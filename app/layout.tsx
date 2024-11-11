import type { Metadata } from "next"
import './globals.css';
import { MainNav } from '@/components/ui/main-nav';
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: 'Trading Dashboard',
  description: 'A disciplined trading platform with intelligent constraints and risk management.',
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
          <div className="relative flex min-h-screen">
            <div className="hidden border-r md:block">
              <div className="sticky top-0">
                <Sidebar />
              </div>
            </div>
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}