"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type Lead = { id: string; name: string | null; email: string | null; message: string | null; created_at: string };

export default function AdminLeads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        window.location.href = "/admin/login";
        return;
      }
      const { data } = await supabase.from("leads").select("id,name,email,message,created_at").order("created_at", { ascending: false });
      setLeads((data as Lead[]) || []);
      setLoading(false);
    };
    run();
  }, []);

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-white">Leads</h1>
        <Link href="/admin/dashboard" className="text-cyan-400 hover:text-cyan-300">Back to Dashboard</Link>
      </div>
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
        {loading ? (
          <p className="text-gray-400">Loading...</p>
        ) : leads.length === 0 ? (
          <p className="text-gray-400">No leads yet. This is a placeholder page.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-gray-400">
                  <th className="text-left p-2">Name</th>
                  <th className="text-left p-2">Email</th>
                  <th className="text-left p-2">Message</th>
                  <th className="text-left p-2">Created</th>
                </tr>
              </thead>
              <tbody>
                {leads.map(lead => (
                  <tr key={lead.id} className="border-t border-gray-700">
                    <td className="p-2 text-white">{lead.name || '-'}</td>
                    <td className="p-2 text-cyan-300">{lead.email || '-'}</td>
                    <td className="p-2 text-gray-300">{lead.message || '-'}</td>
                    <td className="p-2 text-gray-400">{new Date(lead.created_at).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

