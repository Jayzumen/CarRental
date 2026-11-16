import type { Metadata } from "next";
import { ProfileView } from "@/components/profile/ProfileView";

export const metadata: Metadata = {
  title: "My bookings",
  robots: { index: false },
};

export default function ProfilePage() {
  return <ProfileView />;
}
