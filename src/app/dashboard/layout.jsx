"use client";

import ProtectedRoute from "@/components/common/ProtectedRoute";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";

export default function DashboardLayout({ children }) {
  return (
    <ProtectedRoute>
      <div className="min-h-screen flex bg-gray-50">
        <DashboardSidebar />

        <div className="flex-1 flex flex-col h-screen">
          <DashboardNavbar />

          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}