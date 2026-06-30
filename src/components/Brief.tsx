import { Section, SectionHeader } from "./Section";
import { motion } from "framer-motion";

export function Brief() {
  return (
    <Section id="about">
      <SectionHeader
        eyebrow="What is this"
        title={<>One week. <span className="text-primary font-semibold">Something the world actually needs.</span></>}
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4 leading-relaxed text-muted-foreground lg:col-span-3"
        >
          <p>
            Now or Never is a hackathon by <span className="text-foreground font-medium">The Innovation Story</span> with{" "}
            <span className="text-foreground font-medium">Artpark IISc Bengaluru</span> — for students who believe today's
            biggest problems demand more than a classroom discussion.
          </p>
          <p>
            One week. A domain you choose. A problem you define. A solution you build — with curated research, expert sessions,
            and a process designed by professionals. You finish by presenting to a jury of researchers and innovators.
          </p>
          <p className="text-foreground">
            The jury measures the rigour of your thinking — not the tools you used.
          </p>
        </motion.div>

        <div className="space-y-4 lg:col-span-2">
          {[
            {
              title: "The Innovation Story",
              body: "Mumbai-based innovation education organisation building the next generation of problem-solvers.",
            },
            {
              title: "Artpark IISc Bengaluru",
              body: "IISc-founded research park driving translational AI, robotics & autonomous systems at scale.",
            },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="surface group rounded-2xl p-6 transition-transform hover:-translate-y-0.5"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">Organiser</div>
              <h3 className="mt-1.5 font-display text-xl font-bold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
