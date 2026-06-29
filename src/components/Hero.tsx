import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { REGISTER_URL } from "@/lib/site";
import { Countdown } from "./Countdown";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="tis-grid absolute inset-0 -z-10" aria-hidden />

      {/* Playful decorative blobs — CreatED-style */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-10 top-32 -z-10 size-40 rounded-full bg-foreground sm:size-56"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-3rem] top-1/2 -z-10 size-48 rounded-full bg-primary sm:size-72"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/3 bottom-8 -z-10 size-24 rounded-full bg-foreground sm:size-32"
      />

      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-foreground/70 backdrop-blur"
        >
          <span className="size-1.5 rounded-full bg-primary" />
          TIS × Artpark IISc Present
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2.75rem,9vw,7.5rem)] font-black uppercase leading-[0.95] tracking-tight text-foreground"
        >
          Now or Never{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Hack</span>
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-1 -z-0 h-[0.35em] bg-primary"
            />
          </span>
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
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold uppercase tracking-wide text-primary-foreground shadow-[0_12px_30px_-10px_rgba(0,0,0,0.4)] transition-transform hover:scale-[1.03]"
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
