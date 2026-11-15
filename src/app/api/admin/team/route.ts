import { NextRequest, NextResponse } from "next/server";
import { getCMSTeam, saveCMSTeam } from "@/lib/cms/store";
import { CMSTeamMember } from "@/lib/cms/types";

export async function GET() {
  const team = getCMSTeam();
  return NextResponse.json({ success: true, team });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const team = getCMSTeam();

    if (body.action === "save_all") {
      saveCMSTeam(body.team);
      return NextResponse.json({ success: true });
    }

    if (body.action === "update") {
      const updatedMember: CMSTeamMember = body.member;
      const index = team.findIndex((m) => m.id === updatedMember.id);
      if (index !== -1) {
        team[index] = { ...updatedMember, updatedAt: new Date().toISOString() };
      } else {
        team.push({ ...updatedMember, updatedAt: new Date().toISOString() });
      }
      saveCMSTeam(team);
      return NextResponse.json({ success: true, member: updatedMember });
    }

    if (body.action === "delete") {
      const filtered = team.filter((m) => m.id !== body.id);
      saveCMSTeam(filtered);
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false, error: "Invalid action" }, { status: 400 });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

