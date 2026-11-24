"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      setMsg("Please endorse the sovereign charter covenants before continuing.");
      return;
    }

    setLoading(true);
    setMsg("Engraving cryptographic partition seal...");
    setTimeout(() => {
      setMsg("Charter established. Transporting to authentication portal...");
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    }, 1200);
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 w-full">
      <div className="w-full max-w-md p-8 sm:p-10 rounded-sm bg-[#0a0a0a]/90 backdrop-blur-md border border-[#d4af37]/35 shadow-gold-md space-y-6">
        
        {/* Luxury Crest Header */}
        <div className="space-y-3 text-center">
          <div className="w-12 h-12 mx-auto rounded-sm border border-[#d4af37]/40 bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] shadow-gold-sm">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          
          <h1 className="font-cinzel text-2xl font-bold tracking-[0.1em] text-[#f3ede0]">
            Charter a Partition
          </h1>

          {/* Classical Quote by Aristotle */}
          <div className="pt-1 pb-1">
            <p className="font-serif italic text-sm text-zinc-300 leading-snug">
              &ldquo;Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution.&rdquo;
            </p>
            <span className="font-cinzel text-[10px] tracking-[0.2em] text-[#d4af37] uppercase block mt-1">
              — Aristotle, Nicomachean Ethics
            </span>
          </div>
        </div>

        {/* Status Notification */}
        {msg && (
          <div
            role="status"
            className="p-4 rounded-sm bg-[#14120a]/90 border border-[#d4af37]/40 text-[#dfba73] text-xs flex items-center gap-2.5 font-sans"
          >
            {loading ? (
              <svg className="w-4 h-4 animate-spin text-[#d4af37] shrink-0" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
            ) : (
              <span className="text-[#d4af37]">✦</span>
            )}
            <span>{msg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 font-sans">
          <div className="space-y-1.5">
            <label
              htmlFor="signup-name"
              className="block text-xs font-cinzel tracking-wider uppercase text-zinc-300"
            >
              Lord / Noble Dignitary Name
            </label>
            <input
              id="signup-name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Lord Harrison"
              disabled={loading}
              className="w-full h-11 px-3.5 rounded-sm bg-[#050505]/90 border border-[#d4af37]/30 text-sm text-zinc-100 placeholder-zinc-600 focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:border-transparent transition-colors disabled:opacity-50"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="signup-email"
              className="block text-xs font-cinzel tracking-wider uppercase text-zinc-300"
            >
              Estate Communications / Email
            </label>
            <input
              id="signup-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="harrison@manor.ch"
              disabled={loading}
              className="w-full h-11 px-3.5 rounded-sm bg-[#050505]/90 border border-[#d4af37]/30 text-sm text-zinc-100 placeholder-zinc-600 focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:border-transparent transition-colors disabled:opacity-50"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="signup-password"
              className="block text-xs font-cinzel tracking-wider uppercase text-zinc-300"
            >
              Master Sovereign Cipher
            </label>
            <input
              id="signup-password"
              type="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              disabled={loading}
              className="w-full h-11 px-3.5 rounded-sm bg-[#050505]/90 border border-[#d4af37]/30 text-sm text-zinc-100 placeholder-zinc-600 focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:border-transparent transition-colors disabled:opacity-50"
              required
            />
          </div>

          {/* Accessible Checkbox */}
          <div className="min-h-[44px] flex items-center gap-3">
            <input
              id="signup-terms"
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              disabled={loading}
              className="w-5 h-5 rounded-sm border-[#d4af37]/40 bg-[#050505] text-[#d4af37] focus-visible:ring-2 focus-visible:ring-[#d4af37] cursor-pointer accent-[#d4af37]"
            />
            <label
              htmlFor="signup-terms"
              className="text-xs text-zinc-300 cursor-pointer select-none leading-relaxed font-serif italic"
            >
              I solemnly accept the Sovereign Covenants &amp; Cryptographic Protocol Terms
            </label>
          </div>

          {/* Gilded Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-11 rounded-sm bg-gradient-to-r from-[#d4af37] via-[#dfba73] to-[#c5a059] hover:from-[#e7dbc2] hover:to-[#d4af37] text-[#050505] font-cinzel font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-gold-md hover:shadow-gold-lg flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-[#d4af37] disabled:opacity-70 cursor-pointer"
          >
            {loading ? (
              <>
                <svg className="w-4 h-4 animate-spin text-[#050505]" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                <span>Chartering Partition...</span>
              </>
            ) : (
              "Seal Partition Charter"
            )}
          </button>
        </form>

        <div className="text-center text-xs text-zinc-400 font-serif italic pt-2 border-t border-[#d4af37]/20">
          Already accredited?{" "}
          <Link href="/login" className="text-[#d4af37] hover:underline not-italic font-cinzel tracking-wider uppercase ml-1">
            Access Existing Vault
          </Link>
        </div>
      </div>
    </div>
  );
}
