"use client";
import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        title="Toggle Dark Mode"
        className="flex items-center p-2"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {resolvedTheme === "dark" ? (
          <BsSunFill
            size={20}
            className="transition duration-300 hover:text-yellow-400"
          />
        ) : (
          <BsMoonFill
            size={20}
            className="transition duration-300 hover:text-gray-500"
          />
        )}
      </button>
    </>
  );
};

export default ThemeButton;
