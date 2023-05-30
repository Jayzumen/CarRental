import ContactForm from "@/components/ContactPage.tsx/ContactForm";
import ContactInfo from "@/components/ContactPage.tsx/ContactInfo";
import Banner from "@/components/util/Banner";
import PageHeader from "@/components/util/PageHeader";
import Link from "next/link";
import { AiFillPhone } from "react-icons/ai";

export const metadata = {
  title: "Contact",
  description: "Contact page",
};

const Contact = () => {
  return (
    <>
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

      <div className="flex flex-col gap-12 pt-[500px]">
        <div className="flex min-h-[600px] flex-col items-center justify-center gap-8 px-10 xl:flex-row 2xl:mx-auto 2xl:w-[70%] 2xl:justify-between">
          <ContactInfo />
          <ContactForm />
        </div>
        <Banner>
          <div className="flex flex-wrap justify-center gap-4">
            <p className="text-3xl font-bold">
              Book a car by getting in touch with us
            </p>
            <div className="flex items-center gap-4 text-red-500">
              <AiFillPhone size={40} />{" "}
              <p className="text-3xl font-semibold">(123) 456-7890</p>
            </div>
          </div>
        </Banner>
      </div>
    </>
  );
};

export default Contact;
