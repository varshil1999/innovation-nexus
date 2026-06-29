import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { REGISTER_URL } from "@/lib/site";
import { Countdown } from "./Countdown";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="tis-grid absolute inset-0 -z-10" aria-hidden />
      <div
        className="absolute left-1/2 top-0 -z-10 h-[600px] w-[1200px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.58 0.21 263 / 0.35), transparent 60%)",
        }}
        aria-hidden
      />

      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground backdrop-blur"
        >
          <span className="size-1.5 rounded-full bg-primary shadow-[0_0_12px_var(--electric)]" />
          TIS × Artpark IISc Present
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2.75rem,8.5vw,7rem)] font-extrabold leading-[1.02] tracking-tight text-foreground"
        >
          Now or Never <span className="text-primary">Hack</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18 }}
          className="mx-auto mt-8 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          The problems that define our era — in health, in technology, in the natural world — demand attention now.
          A national individual hackathon for students ready to think at the scale of the world's most urgent
          challenges, and build something that matters.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-5"
        >
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-medium text-primary-foreground shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] transition-transform hover:scale-[1.02]"
          >
            Register Now — ₹250
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <p className="max-w-xl text-sm text-muted-foreground">
            Open to students from Grade 8 onwards across Mumbai · Individual participation · Joint certificates
            from TIS and Artpark IISc Bengaluru
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-14 flex justify-center"
        >
          <Countdown />
        </motion.div>
      </div>
    </section>
  );
}
