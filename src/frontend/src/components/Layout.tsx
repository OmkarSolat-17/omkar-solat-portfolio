import type { ReactNode } from "react";
import { CustomCursor } from "./CustomCursor";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { ScrollProgress } from "./ScrollProgress";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
