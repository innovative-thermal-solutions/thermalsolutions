// Edge-compatible JWT verification helper using Web Crypto API

const JWT_SECRET = process.env.ADMIN_JWT_SECRET || 'its-cooling-cms-super-secret-key-2026-fallback-production';
export const ADMIN_COOKIE_NAME = 'its_admin_session';

export interface EdgeSessionPayload {
  userId: string;
  email: string;
  name: string;
  role: 'super_admin' | 'editor' | 'viewer';
  exp: number;
}

function base64UrlDecode(str: string): Uint8Array {
  let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
  while (base64.length % 4) {
    base64 += '=';
  }
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

export async function verifyTokenEdge(token: string): Promise<EdgeSessionPayload | null> {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    const [headerB64, bodyB64, sigB64] = parts;

    const enc = new TextEncoder();
    const key = await crypto.subtle.importKey(
      'raw',
      enc.encode(JWT_SECRET),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    );

    const sigBytes = base64UrlDecode(sigB64);
    const dataBytes = enc.encode(`${headerB64}.${bodyB64}`);

    const valid = await crypto.subtle.verify(
      'HMAC',
      key,
      sigBytes.buffer as ArrayBuffer,
      dataBytes.buffer as ArrayBuffer
    );

    if (!valid) return null;

    const payloadJson = new TextDecoder().decode(base64UrlDecode(bodyB64));
    const payload: EdgeSessionPayload = JSON.parse(payloadJson);

    if (payload.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

export function getSessionTokenFromCookie(cookieHeader?: string | null): string | null {
  if (!cookieHeader) return null;
  const match = cookieHeader.match(new RegExp(`(?:^|;\\s*)${ADMIN_COOKIE_NAME}=([^;]+)`));
  return match ? decodeURIComponent(match[1]) : null;
}
