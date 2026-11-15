import { NextRequest, NextResponse } from "next/server";
import { getCMSSiteSettings, saveCMSSiteSettings } from "@/lib/cms/store";

export async function GET() {
  const settings = getCMSSiteSettings();
  return NextResponse.json({ success: true, settings });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const updated = { ...body, updatedAt: new Date().toISOString() };
    saveCMSSiteSettings(updated);
    return NextResponse.json({ success: true, settings: updated });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
