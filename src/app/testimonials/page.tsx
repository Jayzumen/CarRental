import PageHeader from "@/components/util/PageHeader";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Testimonials",
  description: "Testimonials",
};

const TestimonialsPage = () => {
  return (
    <div>
      <PageHeader>
        <h1 className="text-4xl font-bold">Testimonials</h1>
        <div className="flex gap-2">
          <Link
            className="text-lg font-semibold transition-colors duration-200 hover:text-red-500"
            href={"/"}
          >
            Home
          </Link>
          <p className="text-lg font-semibold">/ Testimonials</p>
        </div>
      </PageHeader>
    </div>
  );
};

export default TestimonialsPage;
