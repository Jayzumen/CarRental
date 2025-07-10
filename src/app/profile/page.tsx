"use client";
import { auth, db } from "@/utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import PageHeader from "@/components/util/PageHeader";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Bookings from "@/components/ProfilePage/Bookings";
import { User } from "firebase/auth";

interface Booking {
  id: string;
  userId: string;
  car: string;
  pickupDate: string;
  dropoffDate: string;
  pickupLocation: string;
  dropoffLocation: string;
  price: number;
  createdAt: string;
}

const ProfilePage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        router.push("/");
        return;
      }
      setUser(firebaseUser);
      // Fetch bookings from Firestore
      const bookingsRef = collection(db, "bookings");
      const q = query(bookingsRef, where("userId", "==", firebaseUser.uid));
      const querySnapshot = await getDocs(q);
      const bookingsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Booking[];
      setBookings(bookingsData);
    });
    return () => unsubscribe();
  }, [router]);

  if (!user) return null;

  return (
    <div className="flex flex-col items-center">
      <PageHeader>
        <h1 className="text-4xl font-bold">
          {user.displayName || user.email}&apos;s Page
        </h1>
        <div className="flex gap-2">
          <Link
            className="text-lg font-semibold transition-colors duration-200 hover:text-red-500"
            href={"/"}
          >
            Home
          </Link>
          <p className="text-lg font-semibold">
            / {user.displayName || user.email}&apos;s Page
          </p>
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
