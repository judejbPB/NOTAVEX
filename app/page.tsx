"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Mail,
  Shield,
  Zap,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Réponses automatiques en secondes",
    desc: "L'IA rédige des réponses professionnelles en français, adaptées à chaque dossier notarial.",
  },
  {
    icon: Shield,
    title: "Conformité juridique garantie",
    desc: "Chaque réponse respecte les normes de la Chambre des notaires du Québec.",
  },
  {
    icon: Clock,
    title: "Économisez jusqu'à 8h par semaine",
    desc: "Réduisez le temps passé à rédiger des courriels répétitifs et concentrez-vous sur votre clientèle.",
  },
];

const testimonials = [
  {
    name: "Me. Isabelle Gagnon",
    role: "Notaire, Québec",
    text: "NotaMail a transformé la gestion de ma boîte de réception. Je réponds à deux fois plus de clients en moitié moins de temps.",
    stars: 5,
  },
  {
    name: "Me. François Bouchard",
    role: "Notaire, Montréal",
    text: "La qualité des réponses générées est impressionnante. Mes clients ne voient aucune différence.",
    stars: 5,
  },
  {
    name: "Me. Sylvie Lapointe",
    role: "Notaire, Sherbrooke",
    text: "L'intégration a pris moins de 10 minutes. L'IA comprend parfaitement le vocabulaire notarial québécois.",
    stars: 5,
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1B3A5C] to-[#2E75B6] flex items-center justify-center">
              <Mail className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-[#1B3A5C] text-lg tracking-tight">NotaMail</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#fonctionnalites" className="text-sm text-slate-600 hover:text-[#1B3A5C] transition-colors hidden md:block">
              Fonctionnalités
            </a>
            <a href="#temoignages" className="text-sm text-slate-600 hover:text-[#1B3A5C] transition-colors hidden md:block">
              Témoignages
            </a>
            <Link
              href="/demo"
              className="text-sm font-semibold text-[#2E75B6] hover:text-[#1B3A5C] transition-colors hidden md:block"
            >
              Voir la démo
            </Link>
            <Link
              href="/demo"
              className="bg-[#2E75B6] hover:bg-[#1B3A5C] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Commencer
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1B3A5C] via-[#1e4470] to-[#2E75B6] pt-20 pb-32">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/3" />

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Conçu exclusivement pour les notaires du Québec
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
          >
            NotaMail — L&apos;assistant IA
            <br />
            <span className="text-blue-300">pour notaires du Québec</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Automatisez vos courriels notariaux avec l&apos;intelligence artificielle.
            Réponses instantanées, conformes, en français québécois.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/demo"
              className="group inline-flex items-center justify-center gap-2 bg-white text-[#1B3A5C] font-bold px-8 py-4 rounded-xl text-lg hover:bg-blue-50 transition-all shadow-lg shadow-black/20 hover:shadow-xl hover:-translate-y-0.5"
            >
              Voir la démo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#fonctionnalites"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white/10 transition-all"
            >
              En savoir plus
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 grid grid-cols-3 gap-6 max-w-xl mx-auto"
          >
            {[
              { value: "95%", label: "Taux d'automatisation" },
              { value: "8h", label: "Économisées / semaine" },
              { value: "< 3s", label: "Par réponse" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-blue-200 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L1440 80L1440 20C1200 70 960 0 720 30C480 60 240 0 0 40L0 80Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Features */}
      <section id="fonctionnalites" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4">
              Tout ce dont vous avez besoin
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              NotaMail comprend le vocabulaire juridique québécois et adapte chaque réponse à votre style professionnel.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 rounded-2xl border border-slate-100 hover:border-[#2E75B6]/30 hover:shadow-lg hover:shadow-[#2E75B6]/5 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1B3A5C]/10 to-[#2E75B6]/20 flex items-center justify-center mb-5 group-hover:from-[#1B3A5C]/20 group-hover:to-[#2E75B6]/30 transition-all">
                  <feature.icon className="w-6 h-6 text-[#2E75B6]" />
                </div>
                <h3 className="font-bold text-[#1B3A5C] text-lg mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-3xl p-10"
          >
            <h3 className="text-2xl font-bold text-[#1B3A5C] text-center mb-10">
              Comment ça fonctionne
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Courriel reçu", desc: "Un client vous envoie une demande" },
                { step: "2", title: "Analyse IA", desc: "NotaMail identifie le type de dossier" },
                { step: "3", title: "Rédaction", desc: "Une réponse professionnelle est rédigée" },
                { step: "4", title: "Envoi", desc: "Vous approuvez et envoyez en un clic" },
              ].map((item, i) => (
                <div key={item.step} className="text-center relative">
                  {i < 3 && (
                    <div className="hidden md:block absolute top-5 left-1/2 w-full h-0.5 bg-[#2E75B6]/20" />
                  )}
                  <div className="relative z-10 w-10 h-10 rounded-full bg-[#2E75B6] text-white font-bold flex items-center justify-center mx-auto mb-3 text-sm">
                    {item.step}
                  </div>
                  <h4 className="font-semibold text-[#1B3A5C] mb-1">{item.title}</h4>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="temoignages" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-4">
              Ils font confiance à NotaMail
            </h2>
            <p className="text-slate-600 text-lg">
              Plus de 150 notaires québécois utilisent NotaMail chaque jour.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1B3A5C] to-[#2E75B6] flex items-center justify-center text-white font-bold text-sm">
                    {t.name.split(" ").slice(-1)[0][0]}
                  </div>
                  <div>
                    <div className="font-semibold text-[#1B3A5C] text-sm">{t.name}</div>
                    <div className="text-slate-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#1B3A5C] to-[#2E75B6]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prêt à transformer votre pratique ?
            </h2>
            <p className="text-blue-200 text-lg mb-8">
              Découvrez NotaMail avec notre démo interactive. Aucune carte de crédit requise.
            </p>
            <Link
              href="/demo"
              className="group inline-flex items-center gap-2 bg-white text-[#1B3A5C] font-bold px-10 py-4 rounded-xl text-lg hover:bg-blue-50 transition-all shadow-lg"
            >
              Voir la démo interactive
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="mt-6 flex items-center justify-center gap-2 text-blue-200 text-sm">
              <CheckCircle className="w-4 h-4" />
              <span>Démo gratuite • Aucune installation requise • En français</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B3A5C] border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <Mail className="w-3 h-3 text-white" />
            </div>
            <span className="text-white font-semibold text-sm">NotaMail</span>
          </div>
          <p className="text-blue-300 text-xs">
            © 2025 Notavex Technologies Inc. • Montréal, Québec
          </p>
          <div className="flex gap-4 text-blue-300 text-xs">
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
