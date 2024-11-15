import type { Metadata } from "next";
import { cn } from "@/helpers/lib/utils";
import { Providers } from "./providers";
import "@/helpers/globals.css";
import { ThemeProvider } from "@/helpers/components/theme-provider";

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
