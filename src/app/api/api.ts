import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, message } = body;

    if (!fullName || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    console.log("New Contact Message:", { fullName, email, message });

    return NextResponse.json({ success: true, message: "Message received successfully!" });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
