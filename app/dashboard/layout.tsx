import Sidebar from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen">
      <div className="hidden border-r md:block">
        <div className="sticky top-0">
          <Sidebar />
        </div>
      </div>
      <main className="flex-1">{children}</main>
    </div>
  );
}
