import { NextRequest, NextResponse } from "next/server";
import { getCMSProducts, saveCMSProducts } from "@/lib/cms/store";
import { CMSProduct } from "@/lib/cms/types";

export async function GET() {
  const products = getCMSProducts();
  return NextResponse.json({ success: true, products });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    let products = getCMSProducts();

    // Support both direct array payload { products: [...] } and action-based payloads
    if (Array.isArray(body.products)) {
      saveCMSProducts(body.products);
      return NextResponse.json({ success: true, count: body.products.length });
    }

    if (body.action === "save_all") {
      saveCMSProducts(body.products);
      return NextResponse.json({ success: true });
    }

    if (body.action === "update" || body.product) {
      const updatedProduct: CMSProduct = body.product;
      const index = products.findIndex((p) => p.id === updatedProduct.id);
      if (index !== -1) {
        products[index] = { ...updatedProduct, updatedAt: new Date().toISOString() };
      } else {
        products.push({ ...updatedProduct, updatedAt: new Date().toISOString() });
      }
      saveCMSProducts(products);
      return NextResponse.json({ success: true, product: updatedProduct });
    }

    if (body.action === "delete") {
      const filtered = products.filter((p) => p.id !== body.id);
      saveCMSProducts(filtered);
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false, error: "Invalid action" }, { status: 400 });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

