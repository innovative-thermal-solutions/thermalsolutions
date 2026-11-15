import { NextResponse } from 'next/server';
import { readCMSData, writeCMSData } from '@/lib/cms/store';

export async function GET() {
  try {
    const logos = await readCMSData<any[]>('logos.json');
    return NextResponse.json({ logos: logos || [] });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { logos } = body;
    if (!Array.isArray(logos)) {
      return NextResponse.json({ error: 'logos array is required' }, { status: 400 });
    }
    const success = await writeCMSData('logos.json', logos);
    if (!success) {
      return NextResponse.json({ error: 'Failed to write logos' }, { status: 500 });
    }
    return NextResponse.json({ success: true, logos });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

