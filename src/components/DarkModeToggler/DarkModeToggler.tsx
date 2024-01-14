"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

export const DarkModeToggler = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { setTheme, theme, systemTheme } = useTheme();
  console.log(systemTheme);

  const currentTheme = theme ? theme : "light";
  const lightThemeToggler = (
    <Button
      className="bg-transparent hover:bg-transparent shadow-none"
      onClick={() => setTheme("light")}
    >
      <SunIcon className="absolute text-white h-[1.2rem] w-[1.2rem] rotate-90 scale-100 transition-all" />
    </Button>
  );

  const darkThemeToggler = (
    <Button
      className="bg-transparent hover:bg-transparent shadow-none text-black"
      onClick={() => setTheme("dark")}
    >
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-100 transition-all" />
    </Button>
  );

  return currentTheme === "dark" ? lightThemeToggler : darkThemeToggler;
};
