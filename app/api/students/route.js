import sql from "@/lib/db";
import { NextResponse } from "next/server";

// GET all attendance
export async function GET() {
  try {
    const data = await sql`SELECT * FROM attendance ORDER BY date DESC`;
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST new attendance
export async function POST(request) {
  try {
    const { name, date, status } = await request.json();

    await sql`
      INSERT INTO attendance (name, date, status)
      VALUES (${name}, ${date}, ${status})
    `;

    return NextResponse.json({ message: "Attendance added" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}