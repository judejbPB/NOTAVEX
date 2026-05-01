"use client";

import { motion } from "framer-motion";
import type { Email } from "@/lib/demo-data";

const TAG_STYLES: Record<string, string> = {
  blue: "bg-blue-50 text-blue-700 border-blue-100",
  purple: "bg-purple-50 text-purple-700 border-purple-100",
  amber: "bg-amber-50 text-amber-700 border-amber-100",
  teal: "bg-teal-50 text-teal-700 border-teal-100",
  orange: "bg-orange-50 text-orange-700 border-orange-100",
};

const PRIORITY_DOT: Record<string, string> = {
  high: "bg-rose-400",
  normal: "bg-amber-300",
  low: "bg-slate-300",
};

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

interface EmailListProps {
  emails: Email[];
  selected: string;
  onSelect: (id: string) => void;
}

export function EmailList({ emails, selected, onSelect }: EmailListProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between flex-shrink-0">
        <div>
          <h2 className="font-bold text-[#1B3A5C] text-sm">Boîte de réception</h2>
          <p className="text-xs text-slate-400 mt-0.5">
            {emails.filter((e) => e.unread).length} non lu(s)
          </p>
        </div>
        <span className="bg-[#1B3A5C] text-white text-xs font-bold px-2 py-0.5 rounded-full">
          {emails.length}
        </span>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto">
        {emails.map((email, i) => (
          <motion.button
            key={email.id}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            onClick={() => onSelect(email.id)}
            className={`w-full text-left px-4 py-3.5 border-b border-slate-100 transition-colors ${
              selected === email.id
                ? "bg-blue-50 border-l-2 border-l-[#2E75B6]"
                : "hover:bg-slate-50 border-l-2 border-l-transparent"
            }`}
          >
            <div className="flex items-start gap-3">
              {/* Avatar */}
              <div className="relative flex-shrink-0 mt-0.5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1B3A5C] to-[#2E75B6] flex items-center justify-center text-white text-xs font-bold">
                  {initials(email.from)}
                </div>
                {email.unread && (
                  <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#2E75B6] border-2 border-white" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <span
                    className={`text-sm truncate ${
                      email.unread
                        ? "font-bold text-[#1B3A5C]"
                        : "font-medium text-slate-600"
                    }`}
                  >
                    {email.from}
                  </span>
                  <span className="text-[10px] text-slate-400 flex-shrink-0">{email.time}</span>
                </div>
                <div
                  className={`text-xs truncate mb-2 ${
                    email.unread ? "text-slate-700 font-semibold" : "text-slate-500"
                  }`}
                >
                  {email.subject}
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full border font-semibold ${
                      TAG_STYLES[email.tagColor]
                    }`}
                  >
                    {email.tag}
                  </span>
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${PRIORITY_DOT[email.priority]}`}
                    title={`Priorité ${email.priority}`}
                  />
                </div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
