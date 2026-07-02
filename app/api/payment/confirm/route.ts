import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { orderId?: string } | null;

  if (!body?.orderId) {
    return NextResponse.json({ error: "Missing orderId" }, { status: 400 });
  }

  return NextResponse.json({
    paid: true,
    orderId: body.orderId,
    paidAt: new Date().toISOString(),
  });
}
