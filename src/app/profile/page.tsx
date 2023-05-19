import { prisma } from "@/lib/prismadb";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import PageHeader from "@/components/util/PageHeader";
import Link from "next/link";

export const revalidate = 0;

export const metadata = {
  title: "Profile Page",
  description: "Profile Page",
};

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email!,
    },
  });
  // Get bookings from database
  async function getBookings() {
    const res = await prisma.booking.findMany({
      where: {
        userId: user?.id!,
      },
    });
    return res;
  }

  const bookings = await getBookings();

  return (
    <div className="flex flex-col items-center">
      <PageHeader>
        <h1 className="text-4xl font-bold">{user?.name}&apos;s Page</h1>
        <div className="flex gap-2">
          <Link
            className="text-lg font-semibold transition-colors duration-200 hover:text-red-500"
            href={"/"}
          >
            Home
          </Link>
          <p className="text-lg font-semibold">/ {user?.name}&apos;s Page</p>
        </div>
      </PageHeader>
      <div className="flex flex-col items-center justify-center gap-4 pt-[410px]">
        <p className="text-2xl font-bold">Your last Bookings:</p>
        <div className="my-8 flex flex-wrap justify-center gap-8 px-4">
          {bookings
            .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())
            .slice(0, 4)
            .map((booking) => (
              <div
                key={booking.id}
                className="flex flex-col gap-4 rounded-md bg-gray-200 p-4 text-xl font-semibold dark:bg-gray-700"
              >
                <p className="">
                  Booking ID:{" "}
                  <span className="text-lg text-gray-500 dark:text-gray-400">
                    {booking.id}
                  </span>
                </p>
                <p className="">
                  Car:{" "}
                  <span className="text-lg text-gray-500 dark:text-gray-400">
                    {booking.car}
                  </span>
                </p>
                <p className="">
                  Pickup Date:{" "}
                  <span className="text-lg text-gray-500 dark:text-gray-400">
                    {booking.pickupDate}
                  </span>
                </p>
                <p className="">
                  Dropoff Date:{" "}
                  <span className="text-lg text-gray-500 dark:text-gray-400">
                    {booking.dropoffDate}
                  </span>
                </p>
                <p className="">
                  Pickup Location:{" "}
                  <span className="text-lg text-gray-500 dark:text-gray-400">
                    {booking.pickupLocation}
                  </span>
                </p>
                <p className="">
                  Dropoff Location:{" "}
                  <span className="text-lg text-gray-500 dark:text-gray-400">
                    {booking.dropoffLocation}
                  </span>
                </p>
                <p className="">
                  Total Price:{" "}
                  <span className="text-lg text-gray-500 dark:text-gray-400">
                    {booking.price}
                  </span>
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
