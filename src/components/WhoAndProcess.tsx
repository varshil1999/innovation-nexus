import { motion } from "framer-motion";
import { Check, FileText, Layers, Mic, Hammer, Send, Presentation, Trophy } from "lucide-react";
import { Section, SectionHeader } from "./Section";

export function Who() {
  return (
    <Section id="who">
      <SectionHeader
        eyebrow="Who this is for"
        title={<>Built for the <span className="text-primary font-semibold">curious</span>, the rigorous, and the ready.</>}
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="surface rounded-3xl p-8"
        >
          <p className="text-lg leading-relaxed text-foreground/90">
            Now or Never is open to all innovators — whether your tools are code, research, design, policy, or
            argument. What unites every participant is a willingness to engage seriously with a problem that
            matters.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Open to all students from Grade 8 and above across Mumbai",
              "Individual participation only",
              "Every domain has room for technology, research, design, and policy",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="surface rounded-3xl p-8"
        >
          <p className="text-lg leading-relaxed text-foreground/90">
            A structured programme backed by one of India's foremost research institutions.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Joint certificate from TIS and Artpark IISc — every student who submits",
              "Curated reading material and domain briefs before the week begins",
              "Expert-led onboarding webinar with TIS and Artpark IISc researchers",
              "In-person finals evaluated by a professional jury",
              "Internship opportunity for the top 2 finalists in Grade 9 and above",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-muted-foreground">
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
  { icon: FileText, title: "Register", body: "Fill in the registration form. Fee: ₹250." },
  { icon: Layers, title: "Access the Platform", body: "Unlock curated research, domain briefs, and context documents prepared by TIS and Artpark IISc researchers." },
  { icon: Mic, title: "Attend the Webinar", body: "A live briefing with experts. Understand your domain. Understand the standard. Get ready." },
  { icon: Hammer, title: "Build", body: "Seven days to identify a problem that matters and develop your solution — a website, an app, a software tool, or a working prototype." },
  { icon: Send, title: "Submit", body: "A project brief and a video submission proposing the problem and the solution you are putting forward." },
  { icon: Presentation, title: "Present", body: "Shortlisted finalists present in person before a jury of researchers, technologists, and industry leaders." },
  { icon: Trophy, title: "Winners Declared", body: "Prizes and opportunities awarded. Every participant who submits receives a joint certificate." },
];

export function Process() {
  return (
    <Section id="process">
      <SectionHeader
        eyebrow="The process"
        title={<>From curious to <span className="text-primary font-semibold">consequential.</span></>}
      />

      <div className="relative mt-16">
        <div
          className="pointer-events-none absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent md:left-1/2"
          aria-hidden
        />
        <ol className="space-y-6 md:space-y-10">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const right = i % 2 === 1;
            return (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative flex items-start gap-6 md:grid md:grid-cols-2 md:gap-12 ${right ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className={`md:flex ${right ? "md:justify-start" : "md:justify-end"}`}>
                  <div className="surface max-w-md rounded-2xl p-6">
                    <div className="text-xs uppercase tracking-[0.18em] text-primary">Step {String(i + 1).padStart(2, "0")}</div>
                    <h3 className="mt-2 font-display text-2xl text-foreground">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  </div>
                </div>
                <div className="absolute left-0 top-2 md:left-1/2 md:-translate-x-1/2">
                  <div className="grid size-14 place-items-center rounded-full border border-primary/40 bg-background text-primary shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]">
                    <Icon className="size-5" />
                  </div>
                </div>
                <div className="hidden md:block" />
              </motion.li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
