import { NextRequest, NextResponse } from "next/server";
import { getCMSCapabilities, saveCMSCapabilities } from "@/lib/cms/store";
import { CMSCapability } from "@/lib/cms/types";

export async function GET() {
  const capabilities = getCMSCapabilities();
  return NextResponse.json({ success: true, capabilities });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    let capabilities = getCMSCapabilities();

    // Support both direct array payload { capabilities: [...] } and action-based payloads
    if (Array.isArray(body.capabilities)) {
      saveCMSCapabilities(body.capabilities);
      return NextResponse.json({ success: true, count: body.capabilities.length });
    }

    if (body.action === "save_all") {
      saveCMSCapabilities(body.capabilities);
      return NextResponse.json({ success: true });
    }

    if (body.action === "update" || body.capability) {
      const updatedItem: CMSCapability = body.capability;
      const index = capabilities.findIndex((c) => c.id === updatedItem.id);
      if (index !== -1) {
        capabilities[index] = { ...updatedItem, updatedAt: new Date().toISOString() };
      } else {
        capabilities.push({ ...updatedItem, updatedAt: new Date().toISOString() });
      }
      saveCMSCapabilities(capabilities);
      return NextResponse.json({ success: true, capability: updatedItem });
    }

    return NextResponse.json({ success: false, error: "Invalid action" }, { status: 400 });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

