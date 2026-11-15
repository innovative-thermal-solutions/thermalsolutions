import { NextResponse } from 'next/server';
import { getSessionUser } from '@/lib/cms/auth';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const session = await getSessionUser();
    if (!session) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }
    return NextResponse.json({
      authenticated: true,
      user: {
        userId: session.userId,
        email: session.email,
        name: session.name,
        role: session.role
      }
    });
  } catch {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}

