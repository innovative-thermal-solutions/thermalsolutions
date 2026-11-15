import { NextResponse } from 'next/server';
import { getCMSUsers, verifyPassword, createToken, hashPassword, saveCMSUsers } from '@/lib/cms/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, email, password } = body;

    const users = await getCMSUsers();

    if (action === 'login') {
      if (!email || !password) {
        return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
      }

      const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
      if (!user) {
        return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
      }

      const valid = verifyPassword(password, user.passwordHash);
      if (!valid) {
        return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
      }

      // Generate JWT
      const token = createToken({
        userId: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      });

      const response = NextResponse.json({
        success: true,
        user: { id: user.id, email: user.email, name: user.name, role: user.role }
      });

      // Set HTTP-only secure cookie
      response.cookies.set('its_admin_session', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/'
      });

      return response;
    }

    if (action === 'logout') {
      const response = NextResponse.json({ success: true, message: 'Logged out successfully' });
      response.cookies.set('its_admin_session', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 0,
        path: '/'
      });
      return response;
    }

    return NextResponse.json({ error: 'Invalid auth action' }, { status: 400 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Authentication error' }, { status: 500 });
  }
}
