"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

export function DarkModeToggler() {
  const { setTheme, theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const lightThemeToggler = (
    <Button
      className="bg-transparent hover:bg-transparent"
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
}
