import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { MediaAsset } from "@/lib/cms/types";
import { getCMSMediaAssets, saveCMSMediaAssets } from "@/lib/cms/store";

export async function GET() {
  const assets = getCMSMediaAssets();
  return NextResponse.json({ success: true, assets });
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const category = (formData.get("category") as any) || "general";
    const altText = (formData.get("altText") as string) || "";

    if (!file) {
      return NextResponse.json({ success: false, error: "No file provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Sanitize filename and create unique name
    const timestamp = Date.now();
    const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
    const uniqueFilename = `${timestamp}_${sanitizedName}`;

    // Write to public/uploads directory
    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const filePath = path.join(uploadsDir, uniqueFilename);
    fs.writeFileSync(filePath, buffer);

    const asset: MediaAsset = {
      id: `media_${timestamp}`,
      filename: uniqueFilename,
      originalName: file.name,
      url: `/uploads/${uniqueFilename}`,
      size: file.size,
      mimeType: file.type || "application/octet-stream",
      category,
      altText: altText || file.name,
      uploadedAt: new Date().toISOString(),
    };

    const assets = getCMSMediaAssets();
    assets.unshift(asset);
    saveCMSMediaAssets(assets);

    return NextResponse.json({ success: true, asset });
  } catch (err: any) {
    console.error("Media upload error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
