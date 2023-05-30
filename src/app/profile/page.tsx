import { prisma } from "@/lib/prismadb";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import PageHeader from "@/components/util/PageHeader";
import Link from "next/link";
import { redirect } from "next/navigation";
import Bookings from "@/components/ProfilePage/Bookings";

export const revalidate = 0;

export const metadata = {
  title: "Profile Page",
  description: "Profile Page",
};

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
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
          {bookings.length === 0 ? (
            <p className="text-xl font-semibold">
              You have no bookings yet.{" "}
              <Link
                href="/"
                className="transition-colors duration-200 hover:text-red-500"
              >
                Rent your first car now!
              </Link>
            </p>
          ) : (
            <Bookings bookings={bookings} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
