import { NextResponse } from 'next/server';
import { readCMSData, writeCMSData } from '@/lib/cms/store';

export async function GET() {
  try {
    const industries = await readCMSData<any[]>('industries.json');
    return NextResponse.json({ industries: industries || [] });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { industries } = body;
    if (!Array.isArray(industries)) {
      return NextResponse.json({ error: 'industries array is required' }, { status: 400 });
    }
    const success = await writeCMSData('industries.json', industries);
    if (!success) {
      return NextResponse.json({ error: 'Failed to write industries' }, { status: 500 });
    }
    return NextResponse.json({ success: true, industries });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
