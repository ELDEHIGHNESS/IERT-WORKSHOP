"use client";

import React, { useState } from "react";

export function DebugFooter() {
  const [showConfig, setShowConfig] = useState(false);

  // Client-exposed environment variable containing service_role key (security flaw demonstration)
  const serviceRoleKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY || "NOT_CONFIGURED";
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "NOT_CONFIGURED";
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "http://127.0.0.1:54321";

  return (
    <footer className="mt-auto border-t border-[#d4af37]/20 bg-[#050505]/90 backdrop-blur-md px-6 py-5 text-xs text-zinc-400 font-sans">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-cinzel text-xs tracking-wider text-[#d4af37] font-semibold uppercase">
            FLOWVAULT SOVEREIGN
          </span>
          <span className="text-zinc-600">&bull;</span>
          <span className="font-serif italic text-zinc-300">
            &ldquo;Beauty is a light in the heart.&rdquo; — Kahlil Gibran
          </span>
          <span className="text-zinc-600">&bull;</span>
          <button
            onClick={() => setShowConfig(!showConfig)}
            className="text-[#d4af37] hover:underline font-cinzel text-[11px] tracking-wider uppercase cursor-pointer"
          >
            {showConfig ? "Conceal Inscription" : "Sovereign Inscription"}
          </button>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] inline-block animate-pulse" />
          <span>VAULT DISCIPLINE: ACTIVE (MMXXVI)</span>
        </div>
      </div>

      {showConfig && (
        <div className="mx-auto mt-4 max-w-7xl rounded-sm bg-[#0a0a0a]/95 border border-[#d4af37]/30 p-5 font-mono text-xs text-zinc-300 space-y-2 shadow-gold-sm">
          <div className="font-cinzel font-bold text-[#d4af37] flex items-center gap-2 pb-2 border-b border-[#d4af37]/20 tracking-wider uppercase">
            <span>✦</span>
            Directorate Cryptographic Diagnostics
          </div>
          <div className="text-zinc-400">
            Endpoint: <span className="text-zinc-200">{supabaseUrl}</span>
          </div>
          <div className="truncate text-zinc-400">
            Public Anon Token: <span className="text-zinc-200">{anonKey}</span>
          </div>
          <div className="truncate text-rose-400 font-semibold">
            Exposed Service Role Seal: <span>{serviceRoleKey}</span>
          </div>
        </div>
      )}
    </footer>
  );
}
