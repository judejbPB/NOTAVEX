"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Mail,
  LayoutDashboard,
  Inbox,
  ChevronRight,
  ArrowLeft,
  Sparkles,
  Building2,
  CheckCheck,
  Send,
  X,
  TrendingUp,
} from "lucide-react";
import { EMAILS, STATS } from "@/lib/demo-data";
import { StatCard } from "@/components/stat-card";
import { EmailList } from "@/components/email-list";

// ─── AI Processing animation ────────────────────────────────────────────────
const AI_STEPS = [
  "Lecture du courriel…",
  "Identification du type de dossier…",
  "Extraction des informations clés…",
  "Rédaction de la réponse…",
  "Vérification de la conformité juridique…",
];

function AiProcessing() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setStep((s) => (s + 1) % AI_STEPS.length),
      400
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-8 text-center p-12">
      {/* Pulsing icon */}
      <div className="relative">
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#1B3A5C] to-[#2E75B6] flex items-center justify-center shadow-xl">
          <Sparkles className="w-9 h-9 text-white" />
        </div>
        {[1, 2].map((ring) => (
          <motion.div
            key={ring}
            className="absolute inset-0 rounded-3xl border-2 border-[#2E75B6]/50"
            animate={{ scale: [1, 1.2 + ring * 0.15, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 1.6, delay: ring * 0.4, repeat: Infinity }}
          />
        ))}
      </div>

      {/* Label */}
      <div>
        <h3 className="text-xl font-bold text-[#1B3A5C] mb-3">
          NotaMail traite ce courriel
        </h3>
        <AnimatePresence mode="wait">
          <motion.p
            key={step}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="text-slate-500 text-sm"
          >
            {AI_STEPS[step]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Progress bar */}
      <div className="w-56 h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#1B3A5C] to-[#2E75B6] rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>

      {/* Dots */}
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-[#2E75B6]"
            animate={{ y: [0, -8, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 0.8, delay: i * 0.18, repeat: Infinity }}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Email detail panel ──────────────────────────────────────────────────────
function EmailDetail({ emailId }: { emailId: string }) {
  const email = EMAILS.find((e) => e.id === emailId)!;
  const [phase, setPhase] = useState<"processing" | "done">("processing");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setPhase("processing");
    setSent(false);
    const t = setTimeout(() => setPhase("done"), 2200);
    return () => clearTimeout(t);
  }, [emailId]);

  return (
    <div className="flex flex-col h-full">
      {/* Email header */}
      <div className="px-6 py-4 border-b border-slate-100 bg-white flex-shrink-0">
        <h2 className="font-bold text-[#1B3A5C] text-base mb-1 leading-snug">
          {email.subject}
        </h2>
        <p className="text-sm text-slate-500">
          <span className="font-medium text-slate-700">{email.from}</span>
          {" "}
          <span className="text-slate-400">&lt;{email.fromEmail}&gt;</span>
          {" · "}
          <span>{email.time}</span>
        </p>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto flex flex-col">
        {/* Original message */}
        <div className="px-6 py-5 border-b border-slate-100">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">
            Message reçu
          </p>
          <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
            {email.body}
          </div>
        </div>

        {/* AI section */}
        <div className="flex-1 bg-gradient-to-b from-slate-50/60 to-white flex flex-col min-h-[340px]">
          <AnimatePresence mode="wait">
            {phase === "processing" ? (
              <motion.div
                key="processing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="flex-1 flex flex-col"
              >
                <AiProcessing />
              </motion.div>
            ) : (
              <motion.div
                key="done"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="px-6 py-5 flex flex-col gap-4"
              >
                {/* AI badge */}
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#1B3A5C] to-[#2E75B6] flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-xs font-bold text-[#1B3A5C] uppercase tracking-wide">
                    Réponse rédigée par NotaMail
                  </span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full font-bold">
                    Prête à envoyer
                  </span>
                </div>

                {/* Response body */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                  {email.aiResponse}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSent(true)}
                    disabled={sent}
                    className={`flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-xl transition-all shadow-sm ${
                      sent
                        ? "bg-emerald-600 text-white cursor-default"
                        : "bg-[#1B3A5C] hover:bg-[#2E75B6] text-white"
                    }`}
                  >
                    {sent ? (
                      <>
                        <CheckCheck className="w-4 h-4" />
                        Envoyé !
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Envoyer
                      </>
                    )}
                  </button>
                  <button className="flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-600 bg-white transition-colors">
                    <CheckCheck className="w-4 h-4" />
                    Modifier
                  </button>
                  <button className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-600 px-3 py-2.5 rounded-xl transition-colors">
                    <X className="w-4 h-4" />
                    Ignorer
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// ─── Dashboard overview ──────────────────────────────────────────────────────
function DashboardView() {
  const bars = [
    { day: "Lun", v: 18 },
    { day: "Mar", v: 22 },
    { day: "Mer", v: 15 },
    { day: "Jeu", v: 28 },
    { day: "Ven", v: 24 },
  ];
  const max = Math.max(...bars.map((b) => b.v));

  const activity = [
    { text: "Réponse envoyée — M.-C. Tremblay", time: "8 min", ok: true },
    { text: "Réponse rédigée — R. Lavoie", time: "42 min", ok: false },
    { text: "Nouveau courriel — Agence Dufresne", time: "1h", ok: false },
    { text: "Réponse envoyée — L. Bergeron-Côté", time: "2h", ok: true },
    { text: "Réponse envoyée — H. Benali", time: "4h", ok: true },
  ];

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6">
      <div>
        <h1 className="text-xl font-bold text-[#1B3A5C]">Tableau de bord</h1>
        <p className="text-slate-500 text-sm mt-0.5">
          Bonjour, Me Tremblay — voici votre résumé du jour.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {STATS.map((s, i) => (
          <StatCard
            key={s.id}
            icon={s.icon}
            value={s.value}
            label={s.label}
            displayLabel={s.displayLabel}
            suffix={s.suffix}
            staticDisplay={s.id === "time" ? "7h 12min" : undefined}
            trend={s.trend}
            delay={200 + i * 120}
          />
        ))}
      </div>

      {/* Bottom panels */}
      <div className="grid grid-cols-2 gap-4">
        {/* Bar chart */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="font-bold text-[#1B3A5C] text-sm">Activité hebdomadaire</h3>
              <p className="text-xs text-slate-400 mt-0.5">Courriels traités</p>
            </div>
            <div className="flex items-center gap-1 text-xs text-[#2E75B6] font-semibold bg-blue-50 px-2.5 py-1 rounded-full">
              <TrendingUp className="w-3.5 h-3.5" />
              +18%
            </div>
          </div>
          <div className="flex items-end gap-3 h-28">
            {bars.map((b, i) => (
              <div key={b.day} className="flex-1 flex flex-col items-center gap-1.5">
                <span className="text-xs font-semibold text-slate-500">{b.v}</span>
                <motion.div
                  className="w-full rounded-t-lg bg-gradient-to-t from-[#1B3A5C] to-[#2E75B6]"
                  initial={{ height: 0 }}
                  animate={{ height: `${(b.v / max) * 80}px` }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
                />
                <span className="text-xs text-slate-400">{b.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Activity feed */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <h3 className="font-bold text-[#1B3A5C] text-sm mb-4">Activité récente</h3>
          <div className="space-y-3">
            {activity.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.06 }}
                className="flex items-center gap-3"
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    item.ok ? "bg-emerald-400" : "bg-[#2E75B6]"
                  }`}
                />
                <span className="text-sm text-slate-600 flex-1 truncate">{item.text}</span>
                <span className="text-xs text-slate-400 flex-shrink-0">{item.time}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────
function Sidebar({
  active,
  onNav,
}: {
  active: string;
  onNav: (v: string) => void;
}) {
  const items = [
    { id: "dashboard", label: "Tableau de bord", Icon: LayoutDashboard },
    { id: "inbox", label: "Boîte de réception", Icon: Inbox, badge: EMAILS.filter((e) => e.unread).length },
  ];

  return (
    <aside className="w-56 flex-shrink-0 bg-[#1B3A5C] flex flex-col">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-400 to-[#2E75B6] flex items-center justify-center shadow">
            <Mail className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="text-white font-bold text-sm leading-tight">NotaMail</div>
            <div className="text-blue-300/70 text-[10px]">par Notavex</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {items.map(({ id, label, Icon, badge }) => (
          <button
            key={id}
            onClick={() => onNav(id)}
            className={`w-full flex items-center justify-between gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
              active === id
                ? "bg-white/15 text-white"
                : "text-blue-200/80 hover:bg-white/8 hover:text-white"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </div>
            {badge ? (
              <span className="bg-[#2E75B6] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                {badge}
              </span>
            ) : null}
          </button>
        ))}
      </nav>

      {/* Profile */}
      <div className="px-4 py-4 border-t border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-[#2E75B6] flex items-center justify-center text-white text-xs font-bold">
            JT
          </div>
          <div className="min-w-0">
            <div className="text-white text-xs font-semibold truncate">Me J.-F. Tremblay</div>
            <div className="text-blue-300/60 text-[10px]">Notaire</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

// ─── Page root ────────────────────────────────────────────────────────────────
export default function DemoPage() {
  const [nav, setNav] = useState("inbox");
  const [selectedId, setSelectedId] = useState(EMAILS[0].id);

  return (
    <div className="h-screen flex flex-col bg-slate-50 overflow-hidden">
      {/* Top bar */}
      <header className="h-14 bg-white border-b border-slate-100 flex items-center justify-between px-6 flex-shrink-0 z-10">
        <div className="flex items-center gap-2.5 text-sm">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-slate-400 hover:text-[#1B3A5C] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour</span>
          </Link>
          <ChevronRight className="w-4 h-4 text-slate-300" />
          <Building2 className="w-4 h-4 text-[#2E75B6]" />
          <span className="font-semibold text-[#1B3A5C]">Bureau Notarial Tremblay</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-[10px] bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full font-bold uppercase tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Mode démo
          </span>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1B3A5C] to-[#2E75B6] flex items-center justify-center text-white text-xs font-bold">
            JT
          </div>
        </div>
      </header>

      {/* Layout */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar active={nav} onNav={setNav} />

        <main className="flex-1 overflow-hidden flex">
          <AnimatePresence mode="wait">
            {nav === "dashboard" ? (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex-1 flex flex-col overflow-hidden"
              >
                <DashboardView />
              </motion.div>
            ) : (
              <motion.div
                key="inbox"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex-1 flex overflow-hidden"
              >
                {/* Email list */}
                <div className="w-72 flex-shrink-0 bg-white border-r border-slate-100 flex flex-col overflow-hidden">
                  <EmailList
                    emails={EMAILS}
                    selected={selectedId}
                    onSelect={setSelectedId}
                  />
                </div>

                {/* Detail */}
                <div className="flex-1 bg-white overflow-hidden flex flex-col">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedId}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="flex-1 flex flex-col overflow-hidden"
                    >
                      <EmailDetail emailId={selectedId} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
