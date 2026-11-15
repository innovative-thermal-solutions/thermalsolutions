import { NextResponse } from 'next/server';
import { readCMSData, writeCMSData } from '@/lib/cms/store';
import { CMSCaseStudy } from '@/lib/cms/types';

export async function GET() {
  try {
    const studies = await readCMSData<CMSCaseStudy[]>('case_studies.json');
    return NextResponse.json({ caseStudies: studies || [] });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { caseStudies } = body;
    if (!Array.isArray(caseStudies)) {
      return NextResponse.json({ error: 'caseStudies array is required' }, { status: 400 });
    }
    const success = await writeCMSData('case_studies.json', caseStudies);
    if (!success) {
      return NextResponse.json({ error: 'Failed to write case studies' }, { status: 500 });
    }
    return NextResponse.json({ success: true, caseStudies });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
