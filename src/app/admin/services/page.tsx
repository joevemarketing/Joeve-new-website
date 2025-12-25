"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AdminServices() {
  const [services, setServices] = useState<Array<{ id: string; name: string; slug: string }>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        window.location.href = "/admin/login";
        return;
      }
      const { data } = await supabase.from("services").select("id,name,slug").order("name", { ascending: true });
      setServices(data || []);
      setLoading(false);
    };
    run();
  }, []);

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-white">Services</h1>
        <Link href="/admin/dashboard" className="text-cyan-400 hover:text-cyan-300">Back to Dashboard</Link>
      </div>
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
        {loading ? (
          <p className="text-gray-400">Loading...</p>
        ) : services.length === 0 ? (
          <p className="text-gray-400">No services found. This is a placeholder page.</p>
        ) : (
          <ul className="space-y-3">
            {services.map(s => (
              <li key={s.id} className="flex justify-between items-center bg-gray-900/40 border border-gray-700 rounded-lg p-4">
                <div>
                  <p className="text-white font-medium">{s.name}</p>
                  <p className="text-gray-500 text-sm">/{s.slug}</p>
                </div>
                <Link href={`/services/${s.slug}`} className="text-cyan-400 hover:text-cyan-300">View</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

