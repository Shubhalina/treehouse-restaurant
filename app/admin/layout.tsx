import AdminSidebar from "@/components/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />

      <main className="flex-1 overflow-auto bg-gray-100 p-8 text-gray-900">
        {children}
      </main>
    </div>
  );
}