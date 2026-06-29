import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HeartPulse, Cpu, Leaf } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const domains = [
  {
    key: "body",
    icon: HeartPulse,
    title: "The Body",
    tag: "Healthcare · AI · Mental Health · Assistive Tech",
    blurb:
      "Healthcare systems everywhere are under strain. The tools to fix them — AI, data, smarter design, better policy — already exist. What's missing is the intelligence to deploy them where they're needed most.",
    risk:
      "If we don't act: access to quality care determined by geography and income, preventable diseases diagnosed too late, mental health invisible in every system designed to support it.",
    starts: [
      "Early detection and diagnosis",
      "Mental health access",
      "Rural and last-mile healthcare",
      "AI-assisted clinical tools",
      "Assistive technology",
      "Caregiver support",
      "Public health communication",
    ],
    partners: ["J&J MedTech", "Philips Healthcare", "WHO", "Gates Foundation", "DeepMind Health", "Siemens Healthineers", "Qure.ai", "Niramai", "Tricog Health", "Apollo Hospitals"],
  },
  {
    key: "machine",
    icon: Cpu,
    title: "The Machine",
    tag: "AI · Ethics · Future of Work · Autonomous Systems",
    blurb:
      "We are the first generation to live alongside machines that learn, decide, and act. The systems being built today will shape education, employment, justice, and governance for decades. Someone has to design them well.",
    risk:
      "If we don't act: automated decisions with no accountability. A generation fluent in using AI but with no hand in shaping it. Systems optimised for efficiency that quietly discard the people they were built to serve.",
    starts: [
      "Human-centred AI design",
      "Algorithmic accountability",
      "AI literacy and education",
      "Bias in automated systems",
      "The future of work",
      "Autonomous systems in public infrastructure",
      "Ethical frameworks for machine intelligence",
    ],
    partners: ["Google DeepMind", "IBM Research", "OpenAI", "Sarvam AI", "Fractal Analytics", "Microsoft Research India", "NASSCOM", "iSpirt", "Wipro AI"],
  },
  {
    key: "planet",
    icon: Leaf,
    title: "The Planet",
    tag: "Climate · Sustainability · Water · Agriculture",
    blurb:
      "Every system that sustains life is a loop — something goes in, something comes out, something returns. Most of those loops are broken. We extract without replenishing. We consume without accounting.",
    risk:
      "If we don't act: not a distant catastrophe — a slow degradation of the conditions that make ordinary life possible. Clean water, stable food, breathable air. Felt most by those who contributed least to the problem.",
    starts: [
      "Circular economy design",
      "Water systems",
      "Food waste and distribution",
      "Urban heat and climate adaptation",
      "Clean energy access",
      "Environmental policy",
      "Sustainable agriculture",
      "Climate communication",
    ],
    partners: ["WWF", "WRI", "Schneider Electric", "UNEP", "Breakthrough Energy", "ReNew Power", "Ather Energy", "Tata Power", "Mahindra Sustainability"],
  },
];

export function Domains() {
  const [open, setOpen] = useState<string | null>("body");

  return (
    <Section id="domains">
      <SectionHeader
        eyebrow="What you will work on"
        title={<>Three problems. <span className="text-primary font-semibold">One week.</span> No easy answers.</>}
        intro="Every participant chooses one domain. Each is a global crisis with local urgency — a challenge that exists at the scale of the world and inside the streets of your own city. Your solution can be a product, a policy, a design, a system, a framework, or a piece of original research."
      />

      <div className="mt-14 space-y-4">
        {domains.map((d, i) => {
          const isOpen = open === d.key;
          const Icon = d.icon;
          return (
            <motion.div
              key={d.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`surface overflow-hidden rounded-3xl transition-colors ${isOpen ? "border-primary/40" : ""}`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : d.key)}
                className="flex w-full items-start gap-6 p-6 text-left sm:p-8"
              >
                <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                  <Icon className="size-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{d.tag}</div>
                  <h3 className="mt-2 font-display text-4xl text-foreground sm:text-5xl">{d.title}</h3>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">{d.blurb}</p>
                </div>
                <ChevronDown
                  className={`mt-2 size-5 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180 text-primary" : ""}`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-8 border-t border-border px-6 py-8 sm:px-8 lg:grid-cols-3">
                      <div>
                        <div className="text-xs uppercase tracking-[0.18em] text-primary">If we don't act</div>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.risk}</p>
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-[0.18em] text-primary">Where you might begin</div>
                        <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                          {d.starts.map((s) => (
                            <li key={s} className="flex items-start gap-2 text-sm text-foreground/90">
                              <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-[0.18em] text-primary">Industry partners</div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {d.partners.map((p) => (
                            <span
                              key={p}
                              className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-foreground/80"
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
