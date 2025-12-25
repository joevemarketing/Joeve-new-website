"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AdminSettings() {
  const [email, setEmail] = useState<string | null>(null);
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const run = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        window.location.href = "/admin/login";
        return;
      }
      setEmail(session.user.email || null);
    };
    run();
  }, []);

  const handlePasswordUpdate = async () => {
    setMessage("");
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage("Password updated successfully");
      setNewPassword("");
    }
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-white">Settings</h1>
        <Link href="/admin/dashboard" className="text-cyan-400 hover:text-cyan-300">Back to Dashboard</Link>
      </div>

      <div className="grid gap-6">
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
          <h2 className="text-white font-semibold mb-4">Account</h2>
          <p className="text-gray-400 mb-4">Signed in as: <span className="text-cyan-300">{email || '-'}</span></p>
          <div className="flex gap-3 items-center">
            <Input type="password" placeholder="New password" value={newPassword} onChange={e => setNewPassword(e.target.value)} className="bg-gray-700 border-gray-600 text-white w-64" />
            <Button onClick={handlePasswordUpdate} className="bg-cyan-600 hover:bg-cyan-700">Update Password</Button>
          </div>
          {message && <p className="text-sm mt-3 text-gray-300">{message}</p>}
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
          <p className="text-gray-400">This is a placeholder settings page.</p>
        </div>
      </div>
    </div>
  );
}
