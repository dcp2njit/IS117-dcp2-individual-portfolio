"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type HomeHeroVisualProps = {
  focusText: string;
};

export function HomeHeroVisual({ focusText }: HomeHeroVisualProps) {
  const { scrollYProgress } = useScroll();

  const beamY = useTransform(scrollYProgress, [0, 0.22], [-30, 60]);
  const imageY = useTransform(scrollYProgress, [0, 0.22], [18, -24]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.22], [1.5, -2.5]);
  const glowScale = useTransform(scrollYProgress, [0, 0.22], [0.94, 1.08]);
  const cardY = useTransform(scrollYProgress, [0, 0.22], [28, -18]);

  return (
    <div className="relative h-full min-h-[24rem] overflow-hidden bg-[linear-gradient(145deg,rgba(61,68,81,0.2),rgba(178,139,159,0.14))] md:min-h-[32rem] lg:min-h-[26rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(246,241,245,0.14),transparent_18%),linear-gradient(135deg,rgba(246,241,245,0.03)_0%,rgba(246,241,245,0)_40%,rgba(178,139,159,0.14)_50%,rgba(246,241,245,0)_60%)]" />

      <motion.div style={{ y: beamY }} className="absolute left-[34%] top-[-10%] h-[135%] w-20 rotate-[32deg] bg-rose/20 blur-3xl md:left-[38%] md:w-24" />

      <motion.div
        style={{ scale: glowScale }}
        className="absolute bottom-0 right-0 h-full w-full bg-[radial-gradient(circle_at_70%_40%,rgba(246,241,245,0.08),transparent_18%),linear-gradient(180deg,rgba(246,241,245,0)_0%,rgba(26,31,43,0.18)_100%)]"
      />

      <motion.div
        style={{ y: imageY, rotate: imageRotate }}
        className="absolute bottom-[6%] right-[6%] top-[12%] w-[78%] overflow-hidden rounded-[2.5rem] border border-rose/25 bg-[#201925] shadow-[0_40px_120px_rgba(19,22,31,0.45)] md:right-[9%] md:top-[14%] md:w-[72%] lg:bottom-[7%] lg:right-[8%] lg:w-[66%]"
      >
        <Image
          src="/header.png"
          alt="Denise working on a laptop with a product interface open on screen."
          fill
          priority
          sizes="(min-width: 1024px) 42vw, (min-width: 768px) 48vw, 100vw"
          className="object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,31,43,0.04)_0%,rgba(26,31,43,0.18)_50%,rgba(26,31,43,0.48)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(246,241,245,0.16),transparent_24%),radial-gradient(circle_at_78%_30%,rgba(178,139,159,0.24),transparent_30%)]" />
      </motion.div>

      <motion.div
        style={{ y: cardY }}
        className="absolute bottom-6 left-5 right-5 rounded-[1.35rem] border border-rose/20 bg-[rgba(178,139,159,0.14)] p-4 backdrop-blur sm:bottom-8 sm:left-6 sm:right-6 sm:p-5 md:bottom-8 md:left-8 md:right-auto md:max-w-[18rem] lg:bottom-10 lg:left-10 lg:max-w-sm"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-paper/68">Current Focus</p>
        <p className="mt-3 text-lg text-paper md:text-xl">{focusText}</p>
      </motion.div>
    </div>
  );
}
