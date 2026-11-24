import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full border-b border-[#d4af37]/20 bg-[#050505]/75 backdrop-blur-md py-24 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
          
          {/* Classical Inscription by Marcus Aurelius */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#0a0a0a]/90 border border-[#d4af37]/35 shadow-gold-sm">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
            <span className="font-cinzel text-xs tracking-[0.25em] text-[#d4af37] uppercase">
              DE CONSTANTIA SAPIENTIS &bull; SOVEREIGN PRIVACY
            </span>
          </div>

          <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[0.06em] text-[#f3ede0] max-w-4xl leading-[1.18]">
            The Sovereign Sanctuary <br />
            <span className="bg-gradient-to-r from-[#d4af37] via-[#dfba73] to-[#c5a059] bg-clip-text text-transparent font-normal italic font-serif">
              of Private Cryptography
            </span>
          </h1>

          <p className="font-serif italic text-lg sm:text-2xl text-zinc-300 max-w-2xl leading-relaxed">
            &ldquo;Dwell on the beauty of life. Watch the stars, and see yourself running with them.&rdquo;
            <span className="block not-italic font-cinzel text-xs tracking-[0.25em] text-[#d4af37] mt-2 uppercase">
              — Marcus Aurelius, Meditations
            </span>
          </p>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl font-sans leading-relaxed">
            FlowVault protects high-consequence keys and multi-tenant cloud partitions with mathematically provable row-level isolation and zero-trust verification.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
            <Link
              href="/dashboard"
              className="px-8 py-3.5 rounded-sm bg-gradient-to-r from-[#d4af37] via-[#dfba73] to-[#c5a059] hover:from-[#e7dbc2] hover:to-[#d4af37] text-[#050505] font-cinzel text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-gold-md hover:shadow-gold-lg cursor-pointer"
            >
              Enter Sanctuary
            </Link>
            <Link
              href="/login"
              className="px-8 py-3.5 rounded-sm bg-[#0a0a0a]/80 hover:bg-[#141414] border border-[#d4af37]/35 hover:border-[#d4af37] text-[#f3ede0] font-cinzel text-xs tracking-[0.18em] uppercase transition-all duration-300 cursor-pointer shadow-sm"
            >
              Select Credentials
            </Link>
          </div>
        </div>

        {/* Gilded Architecture Manuscript Card */}
        <div className="max-w-3xl mx-auto mt-16 rounded-sm bg-[#0a0a0a]/90 border border-[#d4af37]/30 p-6 shadow-gold-md backdrop-blur-md">
          <div className="flex items-center justify-between pb-4 border-b border-[#d4af37]/20 text-xs font-cinzel text-[#d4af37] tracking-[0.15em]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#c5a059]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#dfba73]" />
              <span className="ml-3 uppercase font-medium">Codex &bull; Verified Partition Access</span>
            </div>
            <span className="font-mono text-zinc-400">SIG-ECDSA-P384</span>
          </div>

          <div className="pt-4 font-mono text-xs text-zinc-300 space-y-2">
            <p className="text-[#d4af37]/70 italic font-serif text-sm">
              &ldquo;Wisely and slow; they stumble that run fast.&rdquo; — Shakespeare
            </p>
            <p>
              <span className="text-[#d4af37] font-semibold">GET</span> /api/orders <span className="text-zinc-500">HTTP/1.1</span>
            </p>
            <p className="text-zinc-400">Host: sovereign.flowvault.ch</p>
            <p className="text-zinc-400">Authorization: Bearer sec_tok_sovereign_partition_01</p>
            <div className="pt-3 text-[#d4af37] font-medium flex items-center gap-2 border-t border-[#d4af37]/15">
              <span>✦</span>
              <span>HTTP/1.1 200 OK — Sovereign Isolation Cryptographically Confirmed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Classical Philosophical Triad */}
      <section className="w-full border-b border-[#d4af37]/20 bg-[#050505]/80 backdrop-blur-md py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-6 rounded-sm bg-[#0a0a0a]/80 border border-[#d4af37]/25 text-center space-y-2">
            <div className="font-cinzel text-xs tracking-[0.25em] text-[#d4af37] uppercase">Aristotle</div>
            <p className="font-serif italic text-base text-zinc-300 leading-snug">
              &ldquo;We are what we repeatedly do. Excellence, then, is not an act, but a habit.&rdquo;
            </p>
          </div>

          <div className="p-6 rounded-sm bg-[#0a0a0a]/80 border border-[#d4af37]/25 text-center space-y-2">
            <div className="font-cinzel text-xs tracking-[0.25em] text-[#d4af37] uppercase">Seneca the Younger</div>
            <p className="font-serif italic text-base text-zinc-300 leading-snug">
              &ldquo;Wealth is the slave of a wise man. The master of a fool.&rdquo;
            </p>
          </div>

          <div className="p-6 rounded-sm bg-[#0a0a0a]/80 border border-[#d4af37]/25 text-center space-y-2">
            <div className="font-cinzel text-xs tracking-[0.25em] text-[#d4af37] uppercase">Leo Tolstoy</div>
            <p className="font-serif italic text-base text-zinc-300 leading-snug">
              &ldquo;The two most powerful warriors are patience and time.&rdquo;
            </p>
          </div>

        </div>
      </section>

      {/* Pillars of Sovereign Security */}
      <section className="max-w-6xl mx-auto py-20 px-6 w-full space-y-16">
        <div className="text-center space-y-4 max-w-xl mx-auto">
          <span className="font-cinzel text-xs tracking-[0.3em] text-[#d4af37] uppercase">
            Architectural Tenets
          </span>
          <h2 className="font-cinzel text-3xl font-bold tracking-wide text-[#f3ede0]">
            The Golden Standard of Defense
          </h2>
          <p className="font-serif italic text-lg text-zinc-400">
            &ldquo;Knowing is not enough; we must apply. Willing is not enough; we must do.&rdquo;
            <span className="block not-italic font-cinzel text-[11px] text-[#d4af37]/80 mt-1 uppercase">
              — Johann Wolfgang von Goethe
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="p-8 rounded-sm bg-[#0a0a0a]/85 border border-[#d4af37]/25 backdrop-blur-md flex flex-col justify-between space-y-6 hover:border-[#d4af37]/60 transition-all duration-300 shadow-gold-sm">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-sm border border-[#d4af37]/40 bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-cinzel text-lg font-bold text-[#f3ede0] tracking-wide">
                Row-Level Authorization
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                Deterministic security invoker policies guarantee that tenant data partitions remain impervious to IDOR and BOLA cross-boundary leakage.
              </p>
            </div>
            <div className="pt-4 border-t border-[#d4af37]/20 font-cinzel text-xs text-[#d4af37] tracking-[0.15em] uppercase">
              Jurisdiction &bull; Access Isolation
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 rounded-sm bg-[#0a0a0a]/85 border border-[#d4af37]/25 backdrop-blur-md flex flex-col justify-between space-y-6 hover:border-[#d4af37]/60 transition-all duration-300 shadow-gold-sm">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-sm border border-[#d4af37]/40 bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h3 className="font-cinzel text-lg font-bold text-[#f3ede0] tracking-wide">
                Secret &amp; Key Governance
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                Zero-knowledge key rotation and continuous credential hygiene prevent accidental exposure of service role secrets.
              </p>
            </div>
            <div className="pt-4 border-t border-[#d4af37]/20 font-cinzel text-xs text-[#d4af37] tracking-[0.15em] uppercase">
              Sanctuary &bull; Secret Hygiene
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-8 rounded-sm bg-[#0a0a0a]/85 border border-[#d4af37]/25 backdrop-blur-md flex flex-col justify-between space-y-6 hover:border-[#d4af37]/60 transition-all duration-300 shadow-gold-sm">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-sm border border-[#d4af37]/40 bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-cinzel text-lg font-bold text-[#f3ede0] tracking-wide">
                Boundary Ingress Defense
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                Rigorous SSRF loopback protections and hardened LLM system boundary assertions prevent prompt injection exfiltration.
              </p>
            </div>
            <div className="pt-4 border-t border-[#d4af37]/20 font-cinzel text-xs text-[#d4af37] tracking-[0.15em] uppercase">
              Aegis &bull; Boundary Defense
            </div>
          </div>
        </div>
      </section>

      {/* Ralph Waldo Emerson Literary Concluding Banner */}
      <section className="w-full border-t border-[#d4af37]/25 bg-[#050505]/85 backdrop-blur-md py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="font-serif italic text-2xl sm:text-3xl text-zinc-200 leading-relaxed">
            &ldquo;Do not go where the path may lead, go instead where there is no path and leave a trail.&rdquo;
          </p>
          <span className="font-cinzel text-xs tracking-[0.3em] text-[#d4af37] uppercase block">
            — Ralph Waldo Emerson
          </span>
          <div className="pt-4 flex items-center justify-center gap-4">
            <Link
              href="/login"
              className="px-8 py-3.5 rounded-sm bg-gradient-to-r from-[#d4af37] via-[#dfba73] to-[#c5a059] hover:from-[#e7dbc2] hover:to-[#d4af37] text-[#050505] font-cinzel text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-gold-md hover:shadow-gold-lg cursor-pointer"
            >
              Authenticate Partition
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
