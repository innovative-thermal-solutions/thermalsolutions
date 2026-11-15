import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyTokenEdge, getSessionTokenFromCookie } from '@/lib/cms/edge-auth';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect all /admin routes except /admin/login
  if (pathname.startsWith('/admin')) {
    const cookieHeader = request.headers.get('cookie');
    const token = getSessionTokenFromCookie(cookieHeader);
    const session = token ? await verifyTokenEdge(token) : null;

    if (pathname === '/admin/login') {
      if (session) {
        return NextResponse.redirect(new URL('/admin', request.url));
      }
      return NextResponse.next();
    }

    if (!session) {
      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Protect all mutating API routes under /api/admin/* (POST, PUT, DELETE, PATCH)
  if (pathname.startsWith('/api/admin') && !pathname.startsWith('/api/admin/auth')) {
    const isMutation = ['POST', 'PUT', 'DELETE', 'PATCH'].includes(request.method);
    const cookieHeader = request.headers.get('cookie');
    const token = getSessionTokenFromCookie(cookieHeader);
    const session = token ? await verifyTokenEdge(token) : null;

    if (isMutation && !session) {
      return NextResponse.json(
        { error: 'Unauthorized: Admin authentication required' },
        { status: 401 }
      );
    }

    if (isMutation && session?.role === 'viewer') {
      return NextResponse.json(
        { error: 'Forbidden: Viewer role has read-only access' },
        { status: 403 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
