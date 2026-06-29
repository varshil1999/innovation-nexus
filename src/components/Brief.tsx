import { Section, SectionHeader } from "./Section";
import { motion } from "framer-motion";

export function Brief() {
  return (
    <Section id="about">
      <SectionHeader
        eyebrow="What is this"
        title={<>One week to build <span className="text-primary font-semibold">something the world actually needs.</span></>}
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-3"
        >
          <p>
            Now or Never is a hackathon organised by{" "}
            <span className="text-foreground">The Innovation Story</span> in collaboration with{" "}
            <span className="text-foreground">Artpark IISc Bengaluru</span> — one of India's most advanced AI and
            robotics research institutions. It is built for students who believe the most pressing problems of our
            time demand more than a classroom discussion.
          </p>
          <p>
            One week. A domain you choose. A problem you define. A solution you build from scratch — with access to
            curated research, expert-led sessions, and a process designed by people who work on these challenges
            professionally. At the end of it, you present to a jury of researchers, technologists, and innovators.
          </p>
          <p className="text-foreground">
            Whether you write code, design systems, or construct arguments — the jury measures the rigour of your
            thinking, not the tools you used.
          </p>
        </motion.div>

        <div className="space-y-4 lg:col-span-2">
          {[
            {
              title: "The Innovation Story",
              body: "A Mumbai-based innovation education organisation working with India's top schools to build the next generation of problem-solvers, researchers, and entrepreneurs.",
            },
            {
              title: "Artpark IISc Bengaluru",
              body: "A not-for-profit founded by the Indian Institute of Science, Bengaluru. Driving translational research in AI, robotics, and autonomous systems — building technology that solves real problems at scale.",
            },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="surface rounded-2xl p-6"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-primary">Organiser</div>
              <h3 className="mt-2 font-display text-2xl text-foreground">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
