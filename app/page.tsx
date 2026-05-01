"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, Shield, Zap, Clock } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#1B3A5C] flex flex-col">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-[#2E75B6] flex items-center justify-center">
            <Mail className="w-4 h-4 text-white" />
          </div>
          <span className="text-white font-bold text-lg tracking-tight">NotaMail</span>
        </div>
        <Link
          href="/demo"
          className="text-blue-200 hover:text-white text-sm font-medium transition-colors"
        >
          Voir la démo →
        </Link>
      </nav>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-semibold px-4 py-2 rounded-full mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Conçu pour les notaires du Québec
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-6xl md:text-7xl font-extrabold text-white mb-5 leading-none tracking-tight"
          >
            NotaMail
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-blue-200 mb-4"
          >
            L&apos;assistant IA qui gère vos courriels 24/7
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-blue-300/80 text-lg max-w-xl mx-auto mb-12 leading-relaxed"
          >
            Répondez à chaque client en secondes. Automatiquement, en français, avec la précision juridique que vos dossiers exigent.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link
              href="/demo"
              className="group inline-flex items-center gap-3 bg-white text-[#1B3A5C] font-bold text-lg px-9 py-4 rounded-2xl hover:bg-blue-50 transition-all shadow-2xl shadow-black/30 hover:shadow-black/40 hover:-translate-y-1 active:translate-y-0"
            >
              Voir la démo en action
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-10"
          >
            {[
              { value: "95%", label: "Taux d'automatisation" },
              { value: "8h", label: "Économisées par semaine" },
              { value: "< 3s", label: "Par réponse rédigée" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-extrabold text-white">{s.value}</div>
                <div className="text-blue-300 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Feature strip */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="border-t border-white/10 bg-white/5"
      >
        <div className="max-w-4xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: "Réponses instantanées",
              desc: "L'IA analyse le courriel et rédige une réponse professionnelle en 3 secondes.",
            },
            {
              icon: Shield,
              title: "Conformité juridique",
              desc: "Chaque réponse respecte les normes de la Chambre des notaires du Québec.",
            },
            {
              icon: Clock,
              title: "Disponible 24/7",
              desc: "Vos clients reçoivent une réponse même en dehors de vos heures de bureau.",
            },
          ].map((f) => (
            <div key={f.title} className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <f.icon className="w-5 h-5 text-blue-300" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">{f.title}</h3>
                <p className="text-blue-300/70 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-8 py-5 flex items-center justify-between">
        <span className="text-blue-400 text-xs">© 2025 Notavex Technologies Inc. — Montréal, Québec</span>
        <Link href="/demo" className="text-blue-300 hover:text-white text-xs transition-colors">
          Démo interactive →
        </Link>
      </footer>
    </main>
  );
}
