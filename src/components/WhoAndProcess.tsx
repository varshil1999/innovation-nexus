import { motion } from "framer-motion";
import { Check, FileText, Layers, Mic, Hammer, Send, Presentation, Trophy } from "lucide-react";
import { Section, SectionHeader } from "./Section";

export function Who() {
  return (
    <Section id="who">
      <SectionHeader
        eyebrow="Who this is for"
        title={<>Built for the <span className="text-primary font-semibold">curious</span> and the ready.</>}
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="surface rounded-3xl p-7"
        >
          <div className="eyebrow">Open to all</div>
          <p className="mt-3 leading-relaxed text-foreground/90">
            Open to all innovators — whether your tools are code, research, design, policy, or argument.
          </p>
          <ul className="mt-5 space-y-2.5">
            {[
              "Students from Grade 8 and above across Mumbai",
              "Individual participation only",
              "Every domain has room for tech, research, design & policy",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="surface rounded-3xl p-7"
        >
          <div className="eyebrow">What you get</div>
          <p className="mt-3 leading-relaxed text-foreground/90">
            A structured programme backed by one of India's foremost research institutions.
          </p>
          <ul className="mt-5 space-y-2.5">
            {[
              "Joint certificate from TIS & Artpark IISc on submission",
              "Curated research and domain briefs before the week",
              "Expert-led onboarding webinar",
              "In-person finals before a professional jury",
              "Internships for top 2 finalists (Grade 9+)",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}

const steps = [
  { icon: FileText, title: "Register", body: "Sign up for ₹250." },
  { icon: Layers, title: "Access the Platform", body: "Curated research, briefs, and context documents prepared by TIS & Artpark IISc." },
  { icon: Mic, title: "Attend the Webinar", body: "Live briefing with experts. Understand your domain and the standard." },
  { icon: Hammer, title: "Build", body: "Seven days to identify a problem and ship a solution — website, app, tool, or prototype." },
  { icon: Send, title: "Submit", body: "A project brief and a video proposing your problem and solution." },
  { icon: Presentation, title: "Present", body: "Shortlisted finalists present in person to a jury." },
  { icon: Trophy, title: "Winners Declared", body: "Prizes & opportunities awarded. Joint certificates for all who submit." },
];

export function Process() {
  return (
    <Section id="process">
      <SectionHeader
        eyebrow="The process"
        title={<>From curious to <span className="text-primary font-semibold">consequential.</span></>}
      />

      <div className="relative mt-14">
        {/* timeline rail — left on mobile, centered on desktop */}
        <div
          className="pointer-events-none absolute top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/25 to-transparent left-[27px] md:left-1/2"
          aria-hidden
        />
        <ol className="space-y-8 md:space-y-12">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const right = i % 2 === 1; // zigzag on desktop only
            return (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="relative"
              >
                {/* step marker — sits on the rail */}
                <div className="absolute left-0 top-1 md:left-1/2 md:-translate-x-1/2">
                  <div className="grid size-14 place-items-center rounded-full border border-primary/40 bg-background text-primary shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]">
                    <Icon className="size-5" />
                  </div>
                </div>

                {/* card — full width on mobile (offset right of marker), half on desktop */}
                <div className="pl-20 md:grid md:grid-cols-2 md:gap-12 md:pl-0">
                  <div
                    className={`${
                      right ? "md:col-start-2 md:pl-10" : "md:col-start-1 md:pr-10"
                    }`}
                  >
                    <div className="surface rounded-2xl p-6 transition-transform hover:-translate-y-0.5">
                      <div className="text-[0.7rem] uppercase tracking-[0.18em] text-primary font-semibold">
                        Step {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="mt-1.5 font-display text-2xl font-black uppercase text-foreground">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                    </div>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
