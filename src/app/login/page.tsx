"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (loginEmail?: string, loginPassword?: string) => {
    setError("");
    setLoading(true);

    const submitEmail = loginEmail || email;
    const submitPassword = loginPassword || password;

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: submitEmail, password: submitPassword }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Authentication declined. Sovereign credentials invalid.");
        setLoading(false);
        return;
      }

      localStorage.setItem("flowvault_user", JSON.stringify(data.user));
      localStorage.setItem("flowvault_token", data.token);

      if (data.user?.role === "admin") {
        router.push("/admin");
      } else {
        router.push("/dashboard");
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Network error contacting vault directorate.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 w-full">
      <div className="w-full max-w-md p-8 sm:p-10 rounded-sm bg-[#0a0a0a]/90 backdrop-blur-md border border-[#d4af37]/35 shadow-gold-md space-y-6">
        
        {/* Luxury Crest Header */}
        <div className="space-y-3 text-center">
          <div className="w-12 h-12 mx-auto rounded-sm border border-[#d4af37]/40 bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] shadow-gold-sm">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          
          <h1 className="font-cinzel text-2xl font-bold tracking-[0.1em] text-[#f3ede0]">
            Sovereign Portal
          </h1>

          {/* Classical Quote by William Shakespeare */}
          <div className="pt-1 pb-1">
            <p className="font-serif italic text-sm text-zinc-300 leading-snug">
              &ldquo;All that glisters is not gold; often have you heard that told. Many a man his life hath sold my outside to behold.&rdquo;
            </p>
            <span className="font-cinzel text-[10px] tracking-[0.2em] text-[#d4af37] uppercase block mt-1">
              — William Shakespeare, The Merchant of Venice
            </span>
          </div>
        </div>

        {/* Error Alert State */}
        {error && (
          <div
            role="alert"
            className="p-4 rounded-sm bg-[#1c0d0d]/90 border border-rose-800/80 text-rose-200 text-xs flex items-start justify-between gap-3 font-sans shadow-sm"
          >
            <div className="flex items-start gap-2.5">
              <span className="text-rose-400 mt-0.5">✦</span>
              <span>{error}</span>
            </div>
            <button
              onClick={() => setError("")}
              className="text-rose-400 hover:text-rose-200 text-xs shrink-0 p-1 cursor-pointer"
              aria-label="Dismiss error"
            >
              ✕
            </button>
          </div>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          className="space-y-5"
        >
          <div className="space-y-1.5 font-sans">
            <label
              htmlFor="login-email"
              className="block text-xs font-cinzel tracking-wider uppercase text-zinc-300"
            >
              Partition Identity / Email
            </label>
            <input
              id="login-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="usera@example.com"
              disabled={loading}
              className="w-full h-11 px-3.5 rounded-sm bg-[#050505]/90 border border-[#d4af37]/30 text-sm text-zinc-100 placeholder-zinc-600 focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:border-transparent transition-colors disabled:opacity-50"
              required
            />
          </div>

          <div className="space-y-1.5 font-sans">
            <div className="flex items-center justify-between">
              <label
                htmlFor="login-password"
                className="block text-xs font-cinzel tracking-wider uppercase text-zinc-300"
              >
                Secret Cipher
              </label>
              <span className="text-xs text-[#d4af37]/80 font-mono">Password123!</span>
            </div>
            <input
              id="login-password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              disabled={loading}
              className="w-full h-11 px-3.5 rounded-sm bg-[#050505]/90 border border-[#d4af37]/30 text-sm text-zinc-100 placeholder-zinc-600 focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:border-transparent transition-colors disabled:opacity-50"
              required
            />
          </div>

          {/* Gold Action Button with Loading Spinner */}
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
                <span>Verifying Seal...</span>
              </>
            ) : (
              "Enter Sanctuary"
            )}
          </button>
        </form>

        {/* Quick Credentials Palette */}
        <div className="pt-4 border-t border-[#d4af37]/20 space-y-3 font-sans">
          <div className="flex items-center justify-between text-xs text-zinc-400 font-cinzel tracking-wider">
            <span className="uppercase text-[#d4af37]">Accredited Passkeys</span>
            <span className="font-mono text-[10px] text-zinc-500">Auto-Authorize</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              disabled={loading}
              onClick={() => handleLogin("usera@example.com", "Password123!")}
              className="h-10 px-2 rounded-sm bg-[#0f0f0f]/90 hover:bg-[#1a160d] border border-[#d4af37]/30 hover:border-[#d4af37] text-xs font-cinzel font-semibold tracking-wider text-zinc-200 hover:text-[#d4af37] transition-colors focus-visible:ring-2 focus-visible:ring-[#d4af37] cursor-pointer"
            >
              Lord A
            </button>
            <button
              type="button"
              disabled={loading}
              onClick={() => handleLogin("userb@example.com", "Password123!")}
              className="h-10 px-2 rounded-sm bg-[#0f0f0f]/90 hover:bg-[#1a160d] border border-[#d4af37]/30 hover:border-[#d4af37] text-xs font-cinzel font-semibold tracking-wider text-zinc-200 hover:text-[#d4af37] transition-colors focus-visible:ring-2 focus-visible:ring-[#d4af37] cursor-pointer"
            >
              Lord B
            </button>
            <button
              type="button"
              disabled={loading}
              onClick={() => handleLogin("admin@example.com", "Admin123!")}
              className="h-10 px-2 rounded-sm bg-[#0f0f0f]/90 hover:bg-[#1a160d] border border-[#d4af37]/30 hover:border-[#d4af37] text-xs font-cinzel font-semibold tracking-wider text-[#d4af37] transition-colors focus-visible:ring-2 focus-visible:ring-[#d4af37] cursor-pointer"
            >
              Arch-Admin
            </button>
          </div>
        </div>

        <div className="text-center text-xs text-zinc-400 font-serif italic pt-1">
          Unregistered lineage?{" "}
          <Link href="/signup" className="text-[#d4af37] hover:underline not-italic font-cinzel tracking-wider uppercase ml-1">
            Charter a Partition
          </Link>
        </div>
      </div>
    </div>
  );
}
