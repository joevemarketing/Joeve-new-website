"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { Users, FileText, BarChart3 } from "lucide-react";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    leads: 0,
    services: 0,
    posts: 0
  });
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/admin/login");
        return;
      }
      fetchStats();
    };
    checkUser();
  }, [router]);

  const fetchStats = async () => {
    const { count: leadsCount } = await supabase.from("leads").select("*", { count: "exact", head: true });
    const { count: servicesCount } = await supabase.from("services").select("*", { count: "exact", head: true });
    const { count: postsCount } = await supabase.from("blog_posts").select("*", { count: "exact", head: true });

    setStats({
      leads: leadsCount || 0,
      services: servicesCount || 0,
      posts: postsCount || 0
    });
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-white mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-400 font-medium">Total Leads</h3>
            <Users className="w-6 h-6 text-cyan-400" />
          </div>
          <p className="text-3xl font-bold text-white">{stats.leads}</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-400 font-medium">Active Services</h3>
            <FileText className="w-6 h-6 text-purple-400" />
          </div>
          <p className="text-3xl font-bold text-white">{stats.services}</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-400 font-medium">Blog Posts</h3>
            <BarChart3 className="w-6 h-6 text-green-400" />
          </div>
          <p className="text-3xl font-bold text-white">{stats.posts}</p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-8 text-center text-gray-400">
          No recent activity to display.
        </div>
      </div>
    </div>
  );
}
