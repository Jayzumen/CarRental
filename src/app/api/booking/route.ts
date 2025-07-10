import { NextResponse } from "next/server";
import { db } from "@/utils/firebase";
import { addDoc, collection } from "firebase/firestore";

export async function POST(req: Request) {
  const body = await req.json();
  try {
    await addDoc(collection(db, "bookings"), {
      ...body,
      createdAt: new Date().toISOString(),
    });
    return NextResponse.json({ message: "Booking created" });
  } catch (error) {
    return NextResponse.error();
  }
}

export async function GET() {
  // Optionally implement fetching bookings from Firestore
  return NextResponse.json({ message: "Not implemented" });
}
