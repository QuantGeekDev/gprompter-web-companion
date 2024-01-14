"use client";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";

const Providers = ({ children }: PropsWithChildren): React.ReactElement => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

export default Providers;
