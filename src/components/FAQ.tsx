import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Section, SectionHeader } from "./Section";

const faqs = [
  { q: "Who can participate?", a: "Now or Never Hack is open to all students from Grade 8 and above across Mumbai. There are no school board restrictions — if you are ready to do serious work, you are welcome here." },
  { q: "Do I need to know how to code?", a: "No. Now or Never is built for all kinds of innovators — whether your tools are code, research, design, policy, or argument. The jury evaluates the rigour of your thinking, not the medium you work in." },
  { q: "What does a strong submission look like?", a: "One that goes beyond the surface. A strong submission demonstrates a deep understanding of the problem, proposes a solution that is original and grounded in reality, shows evidence of the work — a prototype, a demo, a designed system — and communicates it with clarity and conviction." },
  { q: "What happens after I register?", a: "You receive immediate access to the Now or Never platform — curated reading material, domain briefs, and context documents prepared by researchers at TIS and Artpark IISc. You will also receive the date and link for the onboarding webinar." },
  { q: "What is the submission format?", a: "A project brief and a video submission — proposing the problem you have identified and the solution you are putting forward. It could be a website, an app, a software tool, or a robot prototype. Full guidelines are available on the platform after registration." },
  { q: "Who are the judges?", a: "The jury includes researchers and practitioners from The Innovation Story, Artpark IISc Bengaluru, and our domain partner organisations across The Body, The Machine, and The Planet. The full jury will be announced closer to the event." },
  { q: "Where and when is the in-person presentation?", a: "The final presentations will be held in Mumbai. Venue and date details will be shared with shortlisted finalists after the submission deadline." },
  { q: "When are the winners announced?", a: "Winners are announced at the conclusion of the in-person presentation day. Prizes, internship opportunities, and certificates are awarded on the same day." },
  { q: "Can I change my domain after registering?", a: "Yes — you can change your domain any time before the submission deadline. Your final submission determines which domain you are evaluated under." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq">
      <SectionHeader
        eyebrow="Questions?"
        title={<>What you <em className="font-display italic text-primary">need to know.</em></>}
      />

      <div className="mt-12 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-white/[0.02]">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left transition-colors hover:bg-white/[0.03] sm:px-8"
              >
                <span className="font-display text-xl text-foreground sm:text-2xl">{f.q}</span>
                <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="shrink-0 text-primary">
                  <Plus className="size-5" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-7 text-base leading-relaxed text-muted-foreground sm:px-8 sm:max-w-3xl">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
