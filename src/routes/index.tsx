import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Brief } from "@/components/Brief";
import { Domains } from "@/components/Domains";
import { Who, Process } from "@/components/WhoAndProcess";
import { Awards } from "@/components/Awards";
import { FAQ } from "@/components/FAQ";
import { Partners } from "@/components/Partners";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Now or Never Hack 2026 — TIS × Artpark IISc Bengaluru" },
      {
        name: "description",
        content:
          "A national hackathon for students from Grade 8 onwards across Mumbai. One week. Three domains: The Body, The Machine, The Planet. Build something the world actually needs.",
      },
      { property: "og:title", content: "Now or Never Hack 2026" },
      {
        property: "og:description",
        content:
          "TIS × Artpark IISc present Now or Never — a national hackathon for young innovators. Register for ₹250.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Brief />
        <Domains />
        <Who />
        <Process />
        <Awards />
        <FAQ />
        <Partners />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
