import { NextResponse } from "next/server";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "@/utils/firebase";

const REQUIRED_FIELDS = [
  "pickupDate",
  "dropoffDate",
  "pickupLocation",
  "dropoffLocation",
  "car",
  "price",
  "userId",
];

const isValidISODate = (date: string) => !Number.isNaN(Date.parse(date));

export async function POST(req: Request) {
  const body = await req.json();

  for (const field of REQUIRED_FIELDS) {
    if (!(field in body)) {
      return NextResponse.json(
        { error: `Missing field: ${field}` },
        { status: 400 },
      );
    }
  }
  if (typeof body.price !== "number" || Number.isNaN(body.price)) {
    return NextResponse.json({ error: "Invalid price" }, { status: 400 });
  }
  if (!isValidISODate(body.pickupDate) || !isValidISODate(body.dropoffDate)) {
    return NextResponse.json({ error: "Invalid date format" }, { status: 400 });
  }

  try {
    await addDoc(collection(db, "bookings"), {
      ...body,
      createdAt: new Date().toISOString(),
    });
    return NextResponse.json({ message: "Booking created" });
  } catch {
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 },
    );
  }
}

export async function GET(req: Request) {
  const userId = new URL(req.url).searchParams.get("userId");
  try {
    const bookingsCol = collection(db, "bookings");
    const snapshot = await getDocs(
      userId ? query(bookingsCol, where("userId", "==", userId)) : bookingsCol,
    );
    const bookings = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    return NextResponse.json({ bookings });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch bookings" },
      { status: 500 },
    );
  }
}

export async function DELETE(req: Request) {
  const id = new URL(req.url).searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing booking id" }, { status: 400 });
  }
  try {
    await deleteDoc(doc(db, "bookings", id));
    return NextResponse.json({ message: "Booking deleted" });
  } catch {
    return NextResponse.json(
      { error: "Failed to delete booking" },
      { status: 500 },
    );
  }
}

export async function PATCH(req: Request) {
  const id = new URL(req.url).searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing booking id" }, { status: 400 });
  }
  const body = await req.json();
  try {
    await updateDoc(doc(db, "bookings", id), body);
    return NextResponse.json({ message: "Booking updated" });
  } catch {
    return NextResponse.json(
      { error: "Failed to update booking" },
      { status: 500 },
    );
  }
}
