import React from "react";
import { ThemeProvider } from "@material-tailwind/react";

export function Layout({ children }: { children: NonNullable<React.ReactNode> }) {
  return <ThemeProvider key="layout">{children}</ThemeProvider>;
}

export default Layout;
