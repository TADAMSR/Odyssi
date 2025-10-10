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

const Section: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  className = "",
  children,
}) => (
  <section className={`max-w-6xl mx-auto px-6 sm:px-10 ${className}`}>
    {children}
  </section>
);

const Pill: React.FC<React.PropsWithChildren> = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide">
    {children}
  </span>
);

const CTAButton: React.FC<React.PropsWithChildren<{ href?: string }>> = ({
  href = "#",
  children,
}) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm transition active:scale-95 bg-white text-gray-900 hover:bg-gray-100"
  >
    {children} <ArrowRight className="size-4" />
  </a>
);

const GhostButton: React.FC<React.PropsWithChildren<{ href?: string }>> = ({
  href = "#",
  children,
}) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition active:scale-95 border border-white/20 text-white/90 hover:bg-white/10"
  >
    {children}
  </a>
);

// ✅ FIXED line below — removed extra “>”
const FeatureCard: React.FC<{
  icon: React.ElementType;
  title: string;
  desc: string;
}> = ({ icon: Icon, title, desc }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
    <div className="mb-3 inline-flex rounded-xl bg-white/10 p-2">
      <Icon className="size-5" />
    </div>
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
        </d
