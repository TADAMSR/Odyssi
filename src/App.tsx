import React from "react";
import { motion } from "framer-motion";
import {
  Compass,
  MapPin,
  NotebookPen,
  Camera,
  CloudOff,
  Lock,
  Smartphone,
  ArrowRight,
} from "lucide-react";

/**
 * Odyssi Landing Page (single file)
 * ---------------------------------------------------------------
 * How to use (Vite + React + Tailwind suggested):
 *  1) Create/replace src/App.tsx with this file's contents.
 *  2) Ensure Tailwind is enabled in your project. (You already use it.)
 *  3) Update the hrefs to point to your real pages.
 *  4) Build to /docs for GitHub Pages (your current flow).
 */

const Section: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ className = "", children }) => (
  <section className={`max-w-6xl mx-auto px-6 sm:px-10 ${className}`}>{children}</section>
);

const Pill: React.FC<React.PropsWithChildren> = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide">
    {children}
  </span>
);

const CTAButton: React.FC<React.PropsWithChildren<{ href?: string }>> = ({ href = "#", children }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm transition active:scale-95 bg-white text-gray-900 hover:bg-gray-100"
  >
    {children} <ArrowRight className="size-4" />
  </a>
);

const GhostButton: React.FC<React.PropsWithChildren<{ href?: string }>> = ({ href = "#", children }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition active:scale-95 border border-white/20 text-white/90 hover:bg-white/10"
  >
    {children}
  </a>
);

const FeatureCard: React.FC<{ icon: React.ElementType; title: string; desc: string }>> = ({ icon: Icon, title, desc }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
    <div className="mb-3 inline-flex rounded-xl bg-white/10 p-2"><Icon className="size-5" /></div>
    <h3 className="text-base font-semibold leading-tight">{title}</h3>
    <p className="mt-1 text-sm text-white/70 leading-relaxed">{desc}</p>
  </div>
);

const Footer: React.FC<{ brand: string }> = ({ brand }) => (
  <footer className="mt-20 border-t border-white/10">
    <Section className="py-10 text-xs text-white/60">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p>© {new Date().getFullYear()} {brand}. All rights reserved.</p>
        <div className="flex gap-4">
          <a className="hover:text-white/80" href="/security.txt">security.txt</a>
          <a className="hover:text-white/80" href="/terms">Terms</a>
          <a className="hover:text-white/80" href="/privacy">Privacy</a>
        </div>
      </div>
    </Section>
  </footer>
);

const Header: React.FC = () => (
  <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/90 border-b border-white/10">
    <Section className="flex items-center justify-between py-3">
      <div className="flex items-center gap-2">
        <Compass className="size-5 text-cyan-300" />
        <span className="font-bold tracking-tight">Odyssi</span>
      </div>
      <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
        <a className="hover:text-white" href="#features">Features</a>
        <a className="hover:text-white" href="#how">How it works</a>
        <a className="hover:text-white" href="#faq">FAQ</a>
      </nav>
      <a href="https://Odyssi.tech" className="rounded-xl bg-white text-gray-900 px-4 py-2 text-sm font-semibold hover:bg-gray-100">Open App</a>
    </Section>
  </header>
);

const Hero: React.FC = () => (
  <Section className="pt-16 sm:pt-24">
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="grid items-center gap-10 md:grid-cols-2">
      <div>
        <Pill>
          <Compass className="size-4" /> Built for the trail — and the trip
        </Pill>
        <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
          Odyssi — Your Offline‑First Map, Journal & Memory Keeper
        </h1>
        <p className="mt-4 text-white/70 leading-relaxed">
          Capture routes, notes, photos, and thoughts anywhere — even with zero signal. Odyssi keeps your data on‑device by default, then syncs when you choose.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <CTAButton href="https://Odyssi.tech">Open Odyssi</CTAButton>
          <GhostButton href="#features">See Features</GhostButton>
        </div>
        <div className="mt-6 flex flex-wrap gap-5 text-xs text-white/60">
          <span className="inline-flex items-center gap-2"><CloudOff className="size-4"/> Works offline</span>
          <span className="inline-flex items-center gap-2"><Lock className="size-4"/> Local‑first privacy</span>
          <span className="inline-flex items-center gap-2"><Smartphone className="size-4"/> Mobile‑ready</span>
        </div>
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl">
        <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-blue-400/20 to-cyan-300/10 p-4">
          <div className="grid h-full grid-cols-3 gap-3">
            <div className="col-span-2 rounded-2xl border border-white/10 bg-black/30 p-4">
              <div className="flex items-center gap-2 text-sm text-white/70"><MapPin className="size-4"/> Map View</div>
              <div className="mt-3 h-full rounded-xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900" />
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <div className="flex items-center gap-2 text-sm text-white/70"><NotebookPen className="size-4"/> Journal</div>
              <div className="mt-3 h-28 rounded-xl border border-white/10 bg-slate-900" />
              <div className="mt-3 flex items-center gap-2 text-white/70 text-xs"><Camera className="size-4"/> Photo Pin</div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </Section>
);

const Features: React.FC = () => (
  <Section id="features" className="mt-16 sm:mt-24">
    <h2 className="text-2xl font-bold tracking-tight">Focused features for explorers</h2>
    <p className="mt-2 text-white/70 max-w-2xl">Everything you need to track your path and remember the moments — without leaking your data.</p>
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <FeatureCard icon={MapPin} title="Offline maps" desc="Store tiles locally and keep navigating when the signal disappears." />
      <FeatureCard icon={NotebookPen} title="Fast journaling" desc="Drop a note, tag a photo, auto‑stamp location — all saved on‑device by default." />
      <FeatureCard icon={Camera} title="Memory pins" desc="Attach photos and voice notes to map pins for rich, context‑aware memories." />
      <FeatureCard icon={CloudOff} title="Local‑first" desc="Your data lives with you. Sync later on your terms — encrypted in transit." />
      <FeatureCard icon={Lock} title="Privacy by design" desc="No trackers, no ads. Optional end‑to‑end encryption for backups when enabled." />
      <FeatureCard icon={Smartphone} title="Lightweight & quick" desc="Launches fast, works great on low‑connectivity trips and older devices." />
    </div>
  </Section>
);

const HowItWorks: React.FC = () => (
  <Section id="how" className="mt-20">
    <div className="grid gap-10 lg:grid-cols-3">
      <div className="lg:col-span-1">
        <h2 className="text-2xl font-bold tracking-tight">How it works</h2>
        <p className="mt-2 text-white/70">Local first, then your call. Odyssi never forces cloud storage. You decide if/when to sync.</p>
      </div>
      <div className="lg:col-span-2 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-sm font-semibold">1. Capture</div>
          <p className="mt-1 text-sm text-white/70">Pin locations, jot notes, add photos — all stored on‑device.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-sm font-semibold">2. Explore</div>
          <p className="mt-1 text-sm text-white/70">Navigate offline with cached tiles and GPS.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-sm font-semibold">3. Sync (optional)</div>
          <p className="mt-1 text-sm text-white/70">When online, choose what to back up — encrypted in transit.</p>
        </div>
      </div>
    </div>
  </Section>
);

const FAQ: React.FC = () => (
  <Section id="faq" className="mt-20">
    <h2 className="text-2xl font-bold tracking-tight">FAQ</h2>
    <div className="mt-6 space-y-4">
      <details className="rounded-xl border border-white/10 bg-white/5 p-4">
        <summary className="cursor-pointer font-semibold">Does Odyssi work offline?</summary>
        <p className="mt-2 text-sm text-white/70">Yes. Core features are offline‑first. Map tiles and notes are cached locally.</p>
      </details>
      <details className="rounded-xl border border-white/10 bg-white/5 p-4">
        <summary className="cursor-pointer font-semibold">Where is my data stored?</summary>
        <p className="mt-2 text-sm text-white/70">On your device by default. You can opt‑in to encrypted backup later.</p>
      </details>
      <details className="rounded-xl border border-white/10 bg-white/5 p-4">
        <summary className="cursor-pointer font-semibold">Is there tracking or ads?</summary>
        <p className="mt-2 text-sm text-white/70">No. Odyssi avoids trackers and ads to protect your privacy.</p>
      </details>
    </div>
  </Section>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-900 via-slate-900 to-blue-900 text-white">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Section className="mt-16 text-center">
        <CTAButton href="https://Odyssi.tech">Launch Odyssi</CTAButton>
      </Section>
      <Footer brand="Odyssi" />
    </div>
  );
};

export default App;
