"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Mail,
  LayoutDashboard,
  Inbox,
  ChevronRight,
  Clock,
  Zap,
  ArrowLeft,
  Sparkles,
  Building2,
  CheckCheck,
  Send,
  X,
} from "lucide-react";
import { EMAILS, STATS, type Email } from "@/lib/demo-data";

// ─── Count-up hook ─────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1500, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return value;
}

// ─── Stat card ─────────────────────────────────────────────────────────────────
function StatCard({
  stat,
  delay,
  animate,
}: {
  stat: (typeof STATS)[0];
  delay: number;
  animate: boolean;
}) {
  const count = useCountUp(stat.value, 1400, animate);

  const icons: Record<string, React.ReactNode> = {
    mail: <Mail className="w-5 h-5" />,
    clock: <Clock className="w-5 h-5" />,
    zap: <Zap className="w-5 h-5" />,
  };

  const display =
    stat.displayValue ??
    `${count}${stat.suffix}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col gap-3 hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-between">
        <span className="text-slate-500 text-sm font-medium">{stat.label}</span>
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1B3A5C]/10 to-[#2E75B6]/20 flex items-center justify-center text-[#2E75B6]">
          {icons[stat.icon]}
        </div>
      </div>
      <div className="text-3xl font-bold text-[#1B3A5C] tabular-nums">
        {animate ? display : "—"}
      </div>
      <div
        className={`text-xs font-medium flex items-center gap-1 ${
          stat.positive ? "text-emerald-600" : "text-rose-500"
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
        {stat.change}
      </div>
    </motion.div>
  );
}

// ─── Category badge ────────────────────────────────────────────────────────────
const categoryColors: Record<string, string> = {
  immobilier: "bg-blue-50 text-blue-700 border-blue-100",
  testament: "bg-purple-50 text-purple-700 border-purple-100",
  succession: "bg-amber-50 text-amber-700 border-amber-100",
  mandat: "bg-teal-50 text-teal-700 border-teal-100",
  contrat: "bg-orange-50 text-orange-700 border-orange-100",
  autre: "bg-slate-50 text-slate-600 border-slate-200",
};

const categoryLabels: Record<string, string> = {
  immobilier: "Immobilier",
  testament: "Testament",
  succession: "Succession",
  mandat: "Mandat",
  contrat: "Contrat",
  autre: "Autre",
};

const priorityDot: Record<string, string> = {
  haute: "bg-rose-400",
  normale: "bg-amber-400",
  basse: "bg-slate-300",
};

// ─── Email list item ───────────────────────────────────────────────────────────
function EmailItem({
  email,
  selected,
  onClick,
}: {
  email: Email;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-3.5 border-b border-slate-100 transition-colors group ${
        selected ? "bg-blue-50" : "hover:bg-slate-50"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="relative mt-1 flex-shrink-0">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1B3A5C] to-[#2E75B6] flex items-center justify-center text-white text-xs font-bold uppercase">
            {email.from
              .split(" ")
              .map((n) => n[0])
              .slice(0, 2)
              .join("")}
          </div>
          {!email.read && (
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#2E75B6] border-2 border-white" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-0.5">
            <span
              className={`text-sm truncate ${
                email.read
                  ? "text-slate-600 font-medium"
                  : "text-[#1B3A5C] font-bold"
              }`}
            >
              {email.from}
            </span>
            <span className="text-xs text-slate-400 flex-shrink-0">{email.time}</span>
          </div>
          <div
            className={`text-xs truncate mb-1.5 ${
              email.read ? "text-slate-500" : "text-slate-700 font-semibold"
            }`}
          >
            {email.subject}
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`text-xs px-2 py-0.5 rounded-full border font-medium ${
                categoryColors[email.category]
              }`}
            >
              {categoryLabels[email.category]}
            </span>
            <span
              className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${priorityDot[email.priority]}`}
              title={`Priorité ${email.priority}`}
            />
          </div>
        </div>
      </div>
    </button>
  );
}

// ─── AI loading animation ──────────────────────────────────────────────────────
function AiProcessing() {
  const steps = [
    "Analyse du type de dossier…",
    "Extraction des informations clés…",
    "Rédaction de la réponse…",
    "Vérification de la conformité…",
  ];
  const [stepIdx, setStepIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStepIdx((i) => (i + 1) % steps.length);
    }, 450);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="flex flex-col items-center justify-center h-full gap-6 text-center p-12">
      <div className="relative">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1B3A5C] to-[#2E75B6] flex items-center justify-center shadow-lg">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-[#2E75B6]"
          animate={{ scale: [1, 1.3, 1], opacity: [1, 0, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
      <div>
        <h3 className="text-lg font-bold text-[#1B3A5C] mb-2">
          NotaMail analyse votre courriel
        </h3>
        <AnimatePresence mode="wait">
          <motion.p
            key={stepIdx}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="text-sm text-slate-500"
          >
            {steps[stepIdx]}
          </motion.p>
        </AnimatePresence>
      </div>
      <div className="flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-[#2E75B6]"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 0.7, delay: i * 0.15, repeat: Infinity }}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Email detail view ─────────────────────────────────────────────────────────
function EmailDetail({ email }: { email: Email }) {
  const [phase, setPhase] = useState<"email" | "processing" | "response">("email");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setPhase("processing");
    const t = setTimeout(() => setPhase("response"), 2200);
    return () => clearTimeout(t);
  }, [email.id]);

  const handleCopy = () => {
    navigator.clipboard.writeText(email.aiResponse);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-100 bg-white">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h2 className="font-bold text-[#1B3A5C] text-base leading-snug mb-1 truncate">
              {email.subject}
            </h2>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-slate-600">
                <span className="font-medium">{email.from}</span>{" "}
                <span className="text-slate-400">&lt;{email.fromEmail}&gt;</span>
              </span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span
                className={`text-xs px-2 py-0.5 rounded-full border font-medium ${
                  categoryColors[email.category]
                }`}
              >
                {categoryLabels[email.category]}
              </span>
              <span className="text-xs text-slate-400">{email.time}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Body / AI Response */}
      <div className="flex-1 overflow-y-auto">
        {/* Original email */}
        <div className="px-6 py-5 border-b border-slate-100 bg-white">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">
            Courriel reçu
          </p>
          <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
            {email.body}
          </div>
        </div>

        {/* AI Section */}
        <div className="bg-gradient-to-b from-slate-50 to-white min-h-[320px] flex flex-col">
          <AnimatePresence mode="wait">
            {phase === "processing" && (
              <motion.div
                key="processing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1"
              >
                <AiProcessing />
              </motion.div>
            )}

            {phase === "response" && (
              <motion.div
                key="response"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex-1 px-6 py-5"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#1B3A5C] to-[#2E75B6] flex items-center justify-center">
                      <Sparkles className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-xs font-bold text-[#1B3A5C] uppercase tracking-wide">
                      Réponse rédigée par NotaMail
                    </span>
                    <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-semibold">
                      Prête à envoyer
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 p-5 text-sm text-slate-700 leading-relaxed whitespace-pre-line shadow-sm">
                  {email.aiResponse}
                </div>

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 bg-[#1B3A5C] hover:bg-[#2E75B6] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    {copied ? "Copié !" : "Envoyer"}
                  </button>
                  <button className="flex items-center gap-2 border border-slate-200 hover:border-slate-300 text-slate-600 text-sm font-medium px-5 py-2.5 rounded-lg transition-colors bg-white">
                    <CheckCheck className="w-4 h-4" />
                    Modifier
                  </button>
                  <button className="flex items-center gap-2 text-slate-400 hover:text-slate-600 text-sm px-3 py-2.5 rounded-lg transition-colors">
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

// ─── Sidebar ───────────────────────────────────────────────────────────────────
function Sidebar({
  active,
  setActive,
}: {
  active: string;
  setActive: (v: string) => void;
}) {
  const navItems = [
    { id: "dashboard", label: "Tableau de bord", icon: LayoutDashboard },
    { id: "inbox", label: "Boîte de réception", icon: Inbox, badge: 4 },
  ];

  return (
    <aside className="w-60 flex-shrink-0 bg-[#1B3A5C] flex flex-col h-full">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow">
            <Mail className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="text-white font-bold text-base leading-tight">NotaMail</div>
            <div className="text-blue-300 text-[10px] font-medium">par Notavex</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
              active === item.id
                ? "bg-white/15 text-white"
                : "text-blue-200 hover:bg-white/8 hover:text-white"
            }`}
          >
            <div className="flex items-center gap-3">
              <item.icon className="w-4 h-4" />
              {item.label}
            </div>
            {item.badge && (
              <span className="bg-[#2E75B6] text-white text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* Bottom */}
      <div className="px-4 py-4 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
            JT
          </div>
          <div className="min-w-0">
            <div className="text-white text-xs font-semibold truncate">Me. J.-F. Tremblay</div>
            <div className="text-blue-300 text-[10px]">Notaire</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

// ─── Main chart ────────────────────────────────────────────────────────────────
function ActivityChart() {
  const bars = [
    { day: "Lun", count: 18 },
    { day: "Mar", count: 22 },
    { day: "Mer", count: 15 },
    { day: "Jeu", count: 28 },
    { day: "Ven", count: 24 },
  ];
  const max = Math.max(...bars.map((b) => b.count));

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="font-bold text-[#1B3A5C] text-sm">Activité hebdomadaire</h3>
          <p className="text-xs text-slate-400 mt-0.5">Courriels traités par jour</p>
        </div>
        <span className="text-xs bg-blue-50 text-[#2E75B6] px-2.5 py-1 rounded-full font-semibold border border-blue-100">
          Cette semaine
        </span>
      </div>
      <div className="flex items-end gap-3 h-28">
        {bars.map((b, i) => (
          <div key={b.day} className="flex-1 flex flex-col items-center gap-1.5">
            <span className="text-xs font-semibold text-slate-600">{b.count}</span>
            <motion.div
              className="w-full rounded-t-lg bg-gradient-to-t from-[#1B3A5C] to-[#2E75B6]"
              initial={{ height: 0 }}
              animate={{ height: `${(b.count / max) * 80}px` }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
            />
            <span className="text-xs text-slate-400">{b.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Quick stats for dashboard overview ────────────────────────────────────────
function RecentActivity() {
  const items = [
    { icon: CheckCheck, text: "Réponse envoyée — Marie-Claire Tremblay", time: "Il y a 8 min", color: "text-emerald-500" },
    { icon: Sparkles, text: "Réponse rédigée — Robert Lavoie", time: "Il y a 31 min", color: "text-[#2E75B6]" },
    { icon: Mail, text: "Nouveau courriel — Agence Dufresne", time: "Il y a 1h", color: "text-slate-400" },
    { icon: CheckCheck, text: "Réponse envoyée — Lucie Bergeron-Côté", time: "Il y a 2h", color: "text-emerald-500" },
    { icon: CheckCheck, text: "Réponse envoyée — Hassan Benali", time: "Il y a 3h", color: "text-emerald-500" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
      <h3 className="font-bold text-[#1B3A5C] text-sm mb-4">Activité récente</h3>
      <div className="space-y-3">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.07 }}
            className="flex items-center gap-3"
          >
            <div className={`flex-shrink-0 ${item.color}`}>
              <item.icon className="w-4 h-4" />
            </div>
            <span className="text-sm text-slate-600 flex-1 min-w-0 truncate">{item.text}</span>
            <span className="text-xs text-slate-400 flex-shrink-0">{item.time}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function DemoPage() {
  const [activeNav, setActiveNav] = useState("inbox");
  const [selectedEmail, setSelectedEmail] = useState<Email>(EMAILS[0]);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStatsVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="h-screen flex flex-col bg-slate-50 overflow-hidden">
      {/* Top bar */}
      <header className="bg-white border-b border-slate-100 flex-shrink-0 z-10">
        <div className="flex items-center justify-between px-6 h-14">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-1.5 text-slate-400 hover:text-[#1B3A5C] transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour
            </Link>
            <ChevronRight className="w-4 h-4 text-slate-300" />
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#2E75B6]" />
              <span className="font-semibold text-[#1B3A5C] text-sm">
                Bureau Notarial Tremblay
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Mode démo
            </span>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#1B3A5C] to-[#2E75B6] flex items-center justify-center text-white text-xs font-bold">
                JT
              </div>
              <span className="text-sm font-medium text-slate-700 hidden sm:block">
                Me. Tremblay
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar active={activeNav} setActive={setActiveNav} />

        <main className="flex-1 overflow-hidden flex flex-col">
          {activeNav === "dashboard" && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-1 overflow-y-auto p-6 space-y-6"
            >
              <div>
                <h1 className="text-xl font-bold text-[#1B3A5C]">Tableau de bord</h1>
                <p className="text-slate-500 text-sm mt-0.5">
                  Bonjour, Me. Tremblay — voici votre résumé du jour.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {STATS.map((stat, i) => (
                  <StatCard key={stat.label} stat={stat} delay={i * 0.1} animate={statsVisible} />
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ActivityChart />
                <RecentActivity />
              </div>
            </motion.div>
          )}

          {activeNav === "inbox" && (
            <motion.div
              key="inbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-1 overflow-hidden flex"
            >
              {/* Email list */}
              <div className="w-80 flex-shrink-0 border-r border-slate-100 bg-white flex flex-col">
                <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                  <div>
                    <h2 className="font-bold text-[#1B3A5C] text-sm">Boîte de réception</h2>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {EMAILS.filter((e) => !e.read).length} non lus
                    </p>
                  </div>
                  <span className="text-xs bg-[#2E75B6] text-white px-2 py-0.5 rounded-full font-bold">
                    {EMAILS.length}
                  </span>
                </div>

                <div className="flex-1 overflow-y-auto">
                  {EMAILS.map((email, i) => (
                    <motion.div
                      key={email.id}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                    >
                      <EmailItem
                        email={email}
                        selected={selectedEmail?.id === email.id}
                        onClick={() => setSelectedEmail(email)}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Email detail */}
              <div className="flex-1 overflow-hidden flex flex-col bg-white">
                <AnimatePresence mode="wait">
                  {selectedEmail ? (
                    <motion.div
                      key={selectedEmail.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-1 overflow-hidden flex flex-col"
                    >
                      <EmailDetail email={selectedEmail} />
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex-1 flex items-center justify-center text-slate-400"
                    >
                      <div className="text-center">
                        <Mail className="w-10 h-10 mx-auto mb-3 opacity-30" />
                        <p className="text-sm">Sélectionnez un courriel</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
}
