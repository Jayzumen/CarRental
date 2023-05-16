import PageHeader from "@/components/util/PageHeader";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Contact",
  description: "Contact page",
};

const Contact = () => {
  return (
    <div>
      <PageHeader>
        <h1 className="text-4xl font-bold">Contact</h1>
        <div className="flex gap-2">
          <Link
            className="text-lg font-semibold transition-colors duration-200 hover:text-red-500"
            href={"/"}
          >
            Home
          </Link>
          <p className="text-lg font-semibold">/ Contact</p>
        </div>
      </PageHeader>
    </div>
  );
};

export default Contact;
