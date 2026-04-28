"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import type { SkillGroup } from "@/lib/site-data";

type SkillAccordionProps = {
  groups: SkillGroup[];
};

export function SkillAccordion({ groups }: SkillAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid gap-4">
      {groups.map((group, index) => {
        const isActive = index === activeIndex;

        return (
          <div key={group.title} className="surface-card overflow-hidden">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
              onClick={() => setActiveIndex(isActive ? -1 : index)}
              aria-expanded={isActive}
            >
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-mist">Skill Group</p>
                <h3 className="mt-2 text-2xl text-paper">{group.title}</h3>
              </div>
              <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-mist">
                {isActive ? "Close" : "Open"}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isActive ? (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="border-t border-white/10 px-6 py-6 sm:px-8">
                    <p className="max-w-2xl text-base leading-7 text-mist">{group.description}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-rose/20 bg-rose/10 px-4 py-2 text-sm text-paper"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
