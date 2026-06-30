import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const awards = [
  {
    place: "First Place",
    medal: "🥇",
    amount: "₹25,000",
    perks: ["Certificate from TIS & Artpark IISc", "Internship with Artpark IISc and industry partners (Grade 9+)"],
    featured: true,
  },
  {
    place: "Second Place",
    medal: "🥈",
    amount: "₹20,000",
    perks: ["Certificate from TIS & Artpark IISc", "Internship with Artpark IISc and industry partners (Grade 9+)"],
  },
  {
    place: "Third Place",
    medal: "🥉",
    amount: "₹10,000",
    perks: ["Certificate from TIS & Artpark IISc"],
  },
];

const criteria = [
  { title: "Depth of Insight", body: "Beyond surface-level: research, original thinking, real engagement." },
  { title: "Originality", body: "A genuinely new angle that creates real value." },
  { title: "Feasibility", body: "Grounded in reality — constraints, costs, risks understood." },
  { title: "Product", body: "Evidence of work — prototype, demo, designed system, or model." },
  { title: "Communication", body: "Clarity and conviction in submission and presentation." },
];

export function Awards() {
  return (
    <Section id="awards">
      <SectionHeader
        eyebrow="Recognition"
        title={<>Recognition that <span className="text-primary font-semibold">goes beyond.</span></>}
        intro="Cash prizes. Internship opportunities. Certificates."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {awards.map((a, i) => (
          <motion.div
            key={a.place}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`relative overflow-hidden rounded-3xl p-8 ${
              a.featured
                ? "surface shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] lg:scale-[1.03]"
                : "surface"
            }`}
          >
            {a.featured && (
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-primary/70" />
            )}
            <div className="text-5xl">{a.medal}</div>
            <h3 className="mt-4 font-display text-xl font-semibold text-foreground">{a.place}</h3>
            <div className="mt-3 font-display text-5xl font-extrabold tracking-tight text-primary">{a.amount}</div>
            <ul className="mt-6 space-y-2">
              {a.perks.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Award className="mt-0.5 size-4 shrink-0 text-primary" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-10 rounded-2xl border border-primary/30 bg-primary/5 p-6 text-center text-sm text-foreground/90"
      >
        Every participant who submits receives a joint certificate from <span className="font-medium">The Innovation Story</span> and <span className="font-medium">Artpark IISc Bengaluru</span>.
      </motion.div>

      <div id="judging" className="mt-20 scroll-mt-24">
        <SectionHeader
          eyebrow="Judging criteria"
          title={<>How your work is <span className="text-primary font-semibold">evaluated.</span></>}
          intro="Researchers, technologists, and practitioners from our partner organisations look for depth, originality, and clarity."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {criteria.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="surface rounded-2xl p-6 transition-transform hover:-translate-y-1"
            >
              <div className="font-display text-3xl text-primary">0{i + 1}</div>
              <h4 className="mt-3 text-lg font-medium text-foreground">{c.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
