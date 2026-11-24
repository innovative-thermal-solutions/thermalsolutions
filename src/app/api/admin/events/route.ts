import { NextRequest, NextResponse } from "next/server";
import { getCMSEvents, saveCMSEvents } from "@/lib/cms/store";
import { CMSEvent } from "@/lib/cms/types";

export async function GET() {
  const events = getCMSEvents();
  return NextResponse.json({ success: true, events });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    let events = getCMSEvents();

    // Direct array payload
    if (Array.isArray(body.events)) {
      saveCMSEvents(body.events);
      return NextResponse.json({ success: true, count: body.events.length });
    }

    if (body.action === "save_all") {
      saveCMSEvents(body.events);
      return NextResponse.json({ success: true });
    }

    if (body.action === "update" || body.event) {
      const updatedEvent: CMSEvent = body.event;
      const index = events.findIndex((e) => e.id === updatedEvent.id);
      if (index !== -1) {
        events[index] = { ...updatedEvent, updatedAt: new Date().toISOString() };
      } else {
        events.push({ ...updatedEvent, updatedAt: new Date().toISOString() });
      }
      saveCMSEvents(events);
      return NextResponse.json({ success: true, event: updatedEvent });
    }

    if (body.action === "delete") {
      const filtered = events.filter((e) => e.id !== body.id);
      saveCMSEvents(filtered);
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false, error: "Invalid action" }, { status: 400 });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
