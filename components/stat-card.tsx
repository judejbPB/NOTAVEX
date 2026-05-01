"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Clock, Zap } from "lucide-react";

const ICONS = {
  mail: Mail,
  clock: Clock,
  zap: Zap,
};

function useCountUp(target: number, duration = 1400, active = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return val;
}

interface StatCardProps {
  icon: keyof typeof ICONS;
  value: number;
  label: string;
  displayLabel: string;
  suffix: string;
  staticDisplay?: string;
  trend: string;
  delay?: number;
}

export function StatCard({
  icon,
  value,
  label,
  displayLabel,
  suffix,
  staticDisplay,
  trend,
  delay = 0,
}: StatCardProps) {
  const [active, setActive] = useState(false);
  const count = useCountUp(value, 1400, active);
  const Icon = ICONS[icon];

  useEffect(() => {
    const t = setTimeout(() => setActive(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  const displayed = staticDisplay ?? `${count}${suffix}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col gap-3 hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-between">
        <span className="text-slate-500 text-sm font-medium capitalize">{displayLabel}</span>
        <div className="w-9 h-9 rounded-xl bg-[#1B3A5C]/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-[#2E75B6]" />
        </div>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-4xl font-extrabold text-[#1B3A5C] tabular-nums leading-none">
          {displayed}
        </span>
        <span className="text-slate-500 text-sm font-medium">{label}</span>
      </div>
      <div className="flex items-center gap-1.5 text-emerald-600 text-xs font-semibold">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        {trend}
      </div>
    </motion.div>
  );
}
