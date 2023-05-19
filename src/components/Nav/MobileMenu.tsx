"use client";

import { useMobileMenuStore } from "@/stores/modalStore";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import PageLinks from "./PageLinks";
import AuthLinks from "./AuthLinks";
import ThemeButton from "./Themebutton";
import { motion } from "framer-motion";
import { links } from "./Navbar";
import { useHandleOverflow } from "@/hooks/useOverflowHandler";

const MobileMenu = () => {
  const { isOpen: mobileOpen, toggle: mobileToggle } = useMobileMenuStore();
  useHandleOverflow(mobileOpen);
  return (
    <>
      <section className="flex md:hidden">
        <button
          onClick={mobileToggle}
          className="transition-colors duration-200 hover:text-red-500"
        >
          <AiOutlineMenu size={30} />
        </button>
      </section>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0, x: -1000 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -1000 }}
          className={`fixed inset-0 z-10 flex h-screen w-screen flex-col items-center justify-center gap-4 bg-white dark:bg-black
          ${mobileOpen ? "visible md:invisible" : "invisible"}
          `}
        >
          <button onClick={mobileToggle}>
            <AiOutlineClose
              size={30}
              className="absolute right-10 top-10 rounded-full bg-gray-200 p-1 transition-colors duration-300 hover:bg-red-500 dark:bg-slate-800 dark:hover:bg-red-500"
            />
          </button>
          <section className="flex flex-col items-center gap-8 text-2xl font-semibold">
            <PageLinks toggle={mobileToggle} links={links} />
            <AuthLinks mobileToggle={mobileToggle} />
            <ThemeButton />
          </section>
        </motion.div>
      )}
    </>
  );
};

export default MobileMenu;
