import { prisma } from "@/lib/prismadb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { DBReservationData, ReservationData } from "@/types/reservation";

export async function GET() {}

export async function POST(req: Request) {
  const body = (await req.json()) as ReservationData;

  const session = await getServerSession(authOptions);

  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email!,
    },
  });

  const data: DBReservationData = {
    car: body.car,
    price: body.price,
    pickupLocation: body.pickupLocation,
    dropoffLocation: body.dropoffLocation,
    pickupDate: body.pickupDate,
    dropoffDate: body.dropoffDate,
    userId: user?.id!,
  };

  try {
    await prisma.booking.create({
      data,
    });

    return NextResponse.json({ message: "Booking created" });
  } catch (error) {
    return NextResponse.error();
  }
}
