import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <div className="eyebrow mb-5 inline-flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-primary" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl font-black uppercase leading-[1.05] tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {intro && <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{intro}</p>}
    </motion.div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative scroll-mt-24 px-6 py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
