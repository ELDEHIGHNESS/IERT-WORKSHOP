import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { DebugFooter } from "@/components/DebugFooter";
import { NatureBackground } from "@/components/NatureBackground";

export const metadata: Metadata = {
  title: "FlowVault — Haute Cryptographic & Sovereign Vault",
  description: "Exquisite multi-tenant security architecture, private key management, and continuous cryptographic verification.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen flex flex-col text-[#f3ede0] bg-[#050505]">
        {/* Dynamic Natural Landscapes with Smooth Cross-fade Transitions */}
        <NatureBackground />

        {/* Haute Horlogerie / Private Wealth Navigation Header */}
        <header className="border-b border-[#d4af37]/20 bg-[#050505]/85 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto h-20 px-6 sm:px-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-sm border border-[#d4af37]/40 bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] group-hover:border-[#d4af37] group-hover:bg-[#d4af37]/20 transition-all duration-300 shadow-gold-sm">
                  {/* Luxury Vault Crest SVG */}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l8 4.5v6c0 5.5-3.8 10.7-8 11.5-4.2-.8-8-6-8-11.5v-6L12 2z" />
                    <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth={1.5} />
                  </svg>
                </div>
                <div>
                  <span className="font-cinzel text-lg font-bold tracking-[0.18em] text-[#f3ede0] group-hover:text-[#d4af37] transition-colors">
                    FLOWVAULT
                  </span>
                  <span className="block text-[10px] tracking-[0.25em] text-[#d4af37]/80 uppercase font-mono">
                    Sovereign Edition
                  </span>
                </div>
              </Link>
            </div>

            <nav className="flex items-center gap-8">
              <Link
                href="/"
                className="font-cinzel text-xs tracking-[0.15em] text-zinc-300 hover:text-[#d4af37] transition-colors uppercase"
              >
                Philosophy
              </Link>
              <Link
                href="/dashboard"
                className="font-cinzel text-xs tracking-[0.15em] text-zinc-300 hover:text-[#d4af37] transition-colors uppercase"
              >
                Sanctuary
              </Link>
              <Link
                href="/admin"
                className="font-cinzel text-xs tracking-[0.15em] text-zinc-300 hover:text-[#d4af37] transition-colors uppercase"
              >
                Directorate
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center px-6 py-2 rounded-sm bg-gradient-to-r from-[#d4af37] via-[#dfba73] to-[#c5a059] hover:from-[#e7dbc2] hover:to-[#d4af37] text-[#050505] font-cinzel text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-gold-md hover:shadow-gold-lg cursor-pointer"
              >
                Access Vault
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1 flex flex-col relative z-10">{children}</main>
        <DebugFooter />
      </body>
    </html>
  );
}
