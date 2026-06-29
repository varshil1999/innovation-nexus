import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { REGISTER_URL } from "@/lib/site";
import { Section } from "./Section";

export function FinalCTA() {
  return (
    <Section id="register" className="py-32 sm:py-40">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[2rem] border border-border p-10 text-center sm:p-20"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, oklch(0.58 0.21 263 / 0.35), transparent 60%), linear-gradient(180deg, oklch(0.22 0.04 263 / 0.6), oklch(0.18 0.03 263 / 0.4))",
        }}
      >
        <div className="tis-grid absolute inset-0 -z-10 opacity-50" aria-hidden />
        <div className="text-xs uppercase tracking-[0.22em] text-primary">Now or Never Hack</div>
        <h2 className="mx-auto mt-6 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          The registration window is <span className="italic text-primary">open.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Limited seats. The problems are not waiting. Neither should you.
        </p>
        <div className="mt-10 flex flex-col items-center gap-5">
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] transition-transform hover:scale-[1.02]"
          >
            Register Now — ₹250
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <p className="max-w-xl text-sm text-muted-foreground">
            Open to all students from Grade 8 and above across Mumbai · Individual participation · Joint
            certificate from The Innovation Story and Artpark IISc Bengaluru
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
