import React from "react";
import AuthLinks from "./AuthLinks";
import ThemeButton from "./Themebutton";
import MobileMenu from "./MobileMenu";
import PageLinks from "./PageLinks";

export const links = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "about",
    href: "/about",
  },
  {
    name: "car models",
    href: "/car-models",
  },
  {
    name: "testimonials",
    href: "/testimonials",
  },
  {
    name: "contact",
    href: "/contact",
  },
];

const Navbar = () => {
  return (
    <header className="absolute inset-0 z-10 h-20 py-4">
      <nav className="flex w-full items-center justify-between px-8 xl:mx-auto xl:w-[70%]">
        {/* Logo */}
        <section className="flex flex-col items-center">
          <p className="text-xl font-bold text-red-500">CAR</p>
          <p className="text-xl font-light">Rental</p>
        </section>
        {/* Links */}
        <section className="hidden gap-4 font-semibold md:flex">
          <PageLinks links={links} />
        </section>

        <section className="hidden gap-4 md:flex">
          {/* Auth Links */}
          <AuthLinks />

          {/* Theme button */}
          <ThemeButton />
        </section>

        {/* Mobile Menu */}
        <MobileMenu />
      </nav>
    </header>
  );
};

export default Navbar;
