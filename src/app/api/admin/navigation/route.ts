import { NextResponse } from 'next/server';
import { readCMSData, writeCMSData } from '@/lib/cms/store';

export async function GET() {
  try {
    const nav = await readCMSData<any[]>('navigation.json');
    return NextResponse.json({ navigation: nav || [] });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { navigation } = body;
    if (!Array.isArray(navigation)) {
      return NextResponse.json({ error: 'navigation array is required' }, { status: 400 });
    }
    const success = await writeCMSData('navigation.json', navigation);
    if (!success) {
      return NextResponse.json({ error: 'Failed to write navigation' }, { status: 500 });
    }
    return NextResponse.json({ success: true, navigation });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
