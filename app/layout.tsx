import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/ui/sidebar";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Trading Dashboard",
  description:
    "A disciplined trading platform with intelligent constraints and risk management.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <div>{children}</div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
