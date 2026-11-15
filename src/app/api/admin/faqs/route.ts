import { NextResponse } from 'next/server';
import { readCMSData, writeCMSData } from '@/lib/cms/store';

export async function GET() {
  try {
    const faqs = await readCMSData<any[]>('faqs.json');
    return NextResponse.json({ faqs: faqs || [] });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { faqs } = body;
    if (!Array.isArray(faqs)) {
      return NextResponse.json({ error: 'faqs array is required' }, { status: 400 });
    }
    const success = await writeCMSData('faqs.json', faqs);
    if (!success) {
      return NextResponse.json({ error: 'Failed to write faqs' }, { status: 500 });
    }
    return NextResponse.json({ success: true, faqs });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

