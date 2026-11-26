import { NextRequest, NextResponse } from "next/server";
import { getCMSCareers, saveCMSCareers } from "@/lib/cms/store";
import { CMSCareersContent, CMSJobOpportunity } from "@/lib/cms/types";

export async function GET() {
  const careers = getCMSCareers();
  return NextResponse.json({ success: true, careers });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    let careers = getCMSCareers();

    // If full careers object is provided
    if (body.careers) {
      saveCMSCareers(body.careers);
      return NextResponse.json({ success: true, careers: body.careers });
    }

    // Direct openings array payload
    if (Array.isArray(body.openings)) {
      careers.openings = body.openings;
      saveCMSCareers(careers);
      return NextResponse.json({ success: true, count: body.openings.length });
    }

    // Update intro
    if (body.intro) {
      careers.intro = body.intro;
      saveCMSCareers(careers);
      return NextResponse.json({ success: true, intro: careers.intro });
    }

    // Update or add individual job
    if (body.action === "update_job" || body.job) {
      const updatedJob: CMSJobOpportunity = body.job;
      const index = careers.openings.findIndex((j: CMSJobOpportunity) => j.id === updatedJob.id);
      if (index !== -1) {
        careers.openings[index] = { ...updatedJob, updatedAt: new Date().toISOString() };
      } else {
        careers.openings.push({ ...updatedJob, updatedAt: new Date().toISOString() });
      }
      saveCMSCareers(careers);
      return NextResponse.json({ success: true, job: updatedJob });
    }

    // Delete job
    if (body.action === "delete_job") {
      careers.openings = careers.openings.filter((j: CMSJobOpportunity) => j.id !== body.id);
      saveCMSCareers(careers);
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false, error: "Invalid action" }, { status: 400 });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
