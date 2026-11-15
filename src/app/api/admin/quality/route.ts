import { NextRequest, NextResponse } from "next/server";
import { getCMSQuality, saveCMSQuality } from "@/lib/cms/store";

export async function GET() {
  const quality = getCMSQuality();
  return NextResponse.json({ success: true, quality });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const updated = { ...body, updatedAt: new Date().toISOString() };
    saveCMSQuality(updated);
    return NextResponse.json({ success: true, quality: updated });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

