import { NextRequest, NextResponse } from "next/server";
import { getCMSHomepage, saveCMSHomepage } from "@/lib/cms/store";
import { CMSHomePageContent } from "@/lib/cms/types";

export async function GET() {
  const homepage = getCMSHomepage();
  return NextResponse.json({ success: true, homepage });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data: CMSHomePageContent = body.homepage || body;
    const updated = {
      ...data,
      updatedAt: new Date().toISOString(),
    };
    const success = saveCMSHomepage(updated);
    if (!success) {
      return NextResponse.json({ success: false, error: "Failed to save homepage data" }, { status: 500 });
    }
    return NextResponse.json({ success: true, homepage: updated });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
