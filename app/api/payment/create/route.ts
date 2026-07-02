import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    orderId: crypto.randomUUID(),
    productName: "SMTI完整报告",
    amount: 1998,
    currency: "cny",
    createdAt: new Date().toISOString(),
  });
}
