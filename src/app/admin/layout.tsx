import { createClient } from "@supabase/supabase-js";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, FileText, Users, Settings, LogOut } from "lucide-react";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // We can't use the client-side supabase instance here easily without cookies setup, 
  // but for now let's assume client-side protection or basic check.
  // Actually, for a real app we'd use @supabase/ssr.
  // Given constraints, I'll make this a client-side protection wrapper or simple server check if cookies are passed.
  // Since I didn't set up cookie middleware, I'll rely on the page components to check auth or make this a client layout.
  // Let's make it a server layout that renders children, but the children will be protected.
  // Or better: make a client wrapper.
  
  return (
    <div className="min-h-screen bg-gray-900 flex">
       {/* Sidebar - only show if logged in? We'll handle that in the inner components or conditional rendering */}
       <AdminSidebar />
       <div className="flex-1 overflow-auto">
          {children}
       </div>
    </div>
  );
}

function AdminSidebar() {
  return (
    <aside className="w-64 bg-gray-800 border-r border-gray-700 hidden md:flex flex-col">
       <div className="p-6 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">JOeve CMS</h2>
       </div>
       <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin/dashboard" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors">
             <LayoutDashboard className="w-5 h-5" />
             Dashboard
          </Link>
          <Link href="/admin/services" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors">
             <FileText className="w-5 h-5" />
             Services
          </Link>
          <Link href="/admin/leads" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors">
             <Users className="w-5 h-5" />
             Leads
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors">
             <Settings className="w-5 h-5" />
             Settings
          </Link>
       </nav>
       <div className="p-4 border-t border-gray-700">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-colors">
             <LogOut className="w-5 h-5" />
             Back to Site
          </Link>
       </div>
    </aside>
  );
}
