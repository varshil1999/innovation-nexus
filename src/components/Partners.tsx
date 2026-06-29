import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";

const groups = [
  {
    title: "The Body",
    partners: ["Johnson & Johnson MedTech", "Philips Healthcare", "WHO", "Gates Foundation", "DeepMind Health", "Siemens Healthineers", "Qure.ai", "Niramai Health Analytix", "Tricog Health", "Apollo Hospitals"],
  },
  {
    title: "The Machine",
    partners: ["Google DeepMind", "IBM Research", "OpenAI", "Sarvam AI", "Fractal Analytics", "Microsoft Research India", "NASSCOM", "iSpirt", "Wipro AI"],
  },
  {
    title: "The Planet",
    partners: ["WWF", "WRI", "Schneider Electric", "UNEP", "Breakthrough Energy", "ReNew Power", "Ather Energy", "Tata Power", "Mahindra Sustainability"],
  },
];

export function Partners() {
  return (
    <Section id="partners">
      <SectionHeader
        eyebrow="Organised by"
        title={<>A programme backed by <span className="text-primary font-semibold">leading institutions.</span></>}
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="surface rounded-3xl p-8"
        >
          <div className="text-xs uppercase tracking-[0.18em] text-primary">Organised by</div>
          <h3 className="mt-2 font-display text-3xl text-foreground">The Innovation Story</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            A Mumbai-based innovation education organisation working with India's top schools to build the next
            generation of problem-solvers, researchers, and entrepreneurs.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="surface rounded-3xl p-8"
        >
          <div className="text-xs uppercase tracking-[0.18em] text-primary">In collaboration with</div>
          <h3 className="mt-2 font-display text-3xl text-foreground">Artpark IISc Bengaluru</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            AI & Robotics Technology Park, founded by the Indian Institute of Science. Driving translational
            research in AI, robotics, and autonomous systems for societal impact.
          </p>
        </motion.div>
      </div>

      <div className="mt-16">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Domain partners</div>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl border border-border bg-white/[0.02] p-6"
            >
              <h4 className="font-display text-xl text-foreground">{g.title}</h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.partners.map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-border bg-white/[0.04] px-3 py-1.5 text-xs text-foreground/85"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
