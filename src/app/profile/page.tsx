import { prisma } from "@/lib/prismadb";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
  title: "Profile Page",
  description: "Profile Page",
};

const ProfilePage = async () => {
  // Get bookings from database
  async function getBookings() {
    const session = await getServerSession(authOptions);
    const user = await prisma.user.findUnique({
      where: {
        email: session?.user?.email!,
      },
    });
    const res = await prisma.booking.findMany({
      where: {
        userId: user?.id!,
      },
    });
    return res;
  }

  const bookings = await getBookings();

  return (
    <div className="mt-44 flex flex-col items-center">
      <p className="text-4xl font-bold">Profile Page</p>
      <div className="mt-10 flex flex-col items-center justify-center gap-4">
        <p className="text-2xl font-bold">Bookings</p>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          {bookings.map((booking) => (
            <div key={booking.id} className="flex flex-col gap-4">
              <p className="text-xl font-bold">Booking ID: {booking.id}</p>
              <p className="text-xl font-bold">Car: {booking.car}</p>
              <p className="text-xl font-bold">
                Pickup Date: {booking.pickupDate}
              </p>
              <p className="text-xl font-bold">
                Dropoff Date: {booking.dropoffDate}
              </p>
              <p className="text-xl font-bold">
                Pickup Location: {booking.pickupLocation}
              </p>
              <p className="text-xl font-bold">
                Dropoff Location: {booking.dropoffLocation}
              </p>
              <p className="text-xl font-bold">Total Price: {booking.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
