"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface UserRecord {
  id: string;
  email: string;
  name: string;
  role: string;
  credits: number;
}

export default function AdminPage() {
  const [users, setUsers] = useState<UserRecord[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/users");
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Imperial Privilege Required: Directorate clearance not verified.");
        return;
      }
      setUsers(data.users || []);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Network error contacting directorate registry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10 space-y-8 w-full font-sans">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-8 rounded-sm bg-[#0a0a0a]/90 backdrop-blur-md border border-[#d4af37]/35 gap-6 shadow-gold-md">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#d4af37]/10 border border-[#d4af37]/25 text-[#d4af37] text-xs font-cinzel font-semibold tracking-widest uppercase">
            <span>✦</span>
            IMPERIAL DIRECTORATE &bull; HIGH SOVEREIGNTY
          </div>
          <h1 className="font-cinzel text-2xl font-bold tracking-wide text-[#f3ede0]">
            Sovereign Peerage &amp; RBAC Directorate
          </h1>
          <p className="font-serif italic text-sm text-zinc-300">
            &ldquo;He who lives in harmony with himself lives in harmony with the universe.&rdquo;
            <span className="not-italic font-cinzel text-[11px] text-[#d4af37] ml-2 uppercase">
              — Marcus Aurelius
            </span>
          </p>
        </div>

        <Link
          href="/dashboard"
          className="px-5 py-2.5 bg-[#0f0f0f] hover:bg-[#1a160d] border border-[#d4af37]/30 text-xs font-cinzel tracking-wider rounded-sm text-zinc-300 hover:text-[#d4af37] transition-all shadow-sm"
        >
          Return to Sanctuary
        </Link>
      </div>

      {/* Error Alert State */}
      {error && (
        <div
          role="alert"
          className="p-6 rounded-sm bg-[#1c0d0d]/90 border border-rose-800/80 text-xs space-y-4 shadow-md font-sans"
        >
          <div className="flex items-start gap-3">
            <span className="text-rose-400 text-lg">✦</span>
            <div className="space-y-1">
              <div className="font-cinzel text-sm font-bold text-rose-100 tracking-wider uppercase">
                Directorate Clearance Required
              </div>
              <p className="text-rose-200/90 leading-relaxed font-serif italic text-sm">{error}</p>
            </div>
          </div>
          <div className="pt-2 flex items-center gap-4">
            <button
              onClick={fetchUsers}
              className="px-4 py-2 rounded-sm bg-rose-900/60 hover:bg-rose-800 text-white font-cinzel text-xs tracking-wider uppercase transition-colors shadow-sm cursor-pointer"
            >
              Re-Examine Seal
            </button>
            <Link
              href="/login"
              className="text-[#d4af37] hover:underline font-cinzel text-xs tracking-wider uppercase"
            >
              Authenticate as Arch-Admin
            </Link>
          </div>
        </div>
      )}

      {/* Loading Skeletons */}
      {loading && (
        <div className="p-8 rounded-sm bg-[#0a0a0a]/85 border border-[#d4af37]/25 space-y-4 animate-pulse">
          <div className="h-6 w-56 bg-[#d4af37]/20 rounded"></div>
          <div className="space-y-3 pt-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-12 bg-[#050505]/80 rounded-sm border border-[#d4af37]/15"></div>
            ))}
          </div>
        </div>
      )}

      {/* Loaded Table State */}
      {!loading && !error && (
        <div className="p-8 rounded-sm bg-[#0a0a0a]/90 backdrop-blur-md border border-[#d4af37]/35 space-y-6 shadow-gold-md">
          <div className="flex items-center justify-between pb-2 border-b border-[#d4af37]/20">
            <div>
              <h2 className="font-cinzel text-lg font-bold text-[#f3ede0] tracking-wide">
                Enrolled Estate Directory
              </h2>
              <p className="text-xs text-zinc-400 font-serif italic">
                Active tenant estates and treasury credit authorizations
              </p>
            </div>
            <span className="text-xs font-cinzel tracking-wider uppercase text-[#d4af37]">
              {users.length} {users.length === 1 ? "Charter" : "Charters"} Recorded
            </span>
          </div>

          {users.length === 0 ? (
            <div className="py-12 px-4 text-center rounded-sm bg-[#050505]/80 border border-dashed border-[#d4af37]/25 space-y-2">
              <span className="text-[#d4af37] text-xl">✦</span>
              <div className="font-cinzel text-xs tracking-wider uppercase text-zinc-300">
                No noble estates registered in registry
              </div>
              <p className="text-xs text-zinc-500 font-serif italic max-w-xs mx-auto">
                No charters exist in this database partition.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-sans">
                <thead className="border-b border-[#d4af37]/25 text-[#d4af37] uppercase tracking-wider font-cinzel text-[11px]">
                  <tr>
                    <th className="py-3 px-4">Estate ID</th>
                    <th className="py-3 px-4">Dignitary Name</th>
                    <th className="py-3 px-4">Charter Email</th>
                    <th className="py-3 px-4">Rank / Order</th>
                    <th className="py-3 px-4 text-right">Treasury Credits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#d4af37]/15">
                  {users.map((u) => (
                    <tr key={u.id} className="hover:bg-[#14120a]/60 transition-colors">
                      <td className="py-3.5 px-4 font-mono text-zinc-400">{u.id}</td>
                      <td className="py-3.5 px-4 font-cinzel font-semibold text-zinc-100 tracking-wide">{u.name}</td>
                      <td className="py-3.5 px-4 text-zinc-300 font-mono">{u.email}</td>
                      <td className="py-3.5 px-4">
                        <span
                          className={`px-2.5 py-0.5 rounded-sm text-[10px] font-cinzel font-semibold tracking-wider uppercase ${
                            u.role === "admin"
                              ? "bg-[#d4af37]/20 text-[#dfba73] border border-[#d4af37]/40 shadow-gold-sm"
                              : "bg-[#0f0f0f] text-zinc-300 border border-[#d4af37]/20"
                          }`}
                        >
                          {u.role === "admin" ? "Directorate" : "Sovereign"}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-mono font-bold text-right text-[#dfba73]">
                        {u.credits}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
