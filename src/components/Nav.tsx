import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { REGISTER_URL } from "@/lib/site";

const items = [
  { label: "About", href: "#about" },
  { label: "Domains", href: "#domains" },
  { label: "Process", href: "#process" },
  { label: "Awards", href: "#awards" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="flex min-w-0 items-center gap-2 text-sm font-medium tracking-tight">
          <span className="text-foreground">The Innovation Story</span>
          <span className="text-muted-foreground">×</span>
          <span className="hidden text-foreground sm:inline">Artpark IISc Bengaluru</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {items.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              {i.label}
            </a>
          ))}
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[0_8px_30px_-8px_var(--tis-gold)] transition-transform hover:scale-[1.02]"
          >
            Register
          </a>
        </nav>

        <button
          className="rounded-md p-2 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="block h-0.5 w-5 bg-foreground"></span>
          <span className="mt-1 block h-0.5 w-5 bg-foreground"></span>
          <span className="mt-1 block h-0.5 w-5 bg-foreground"></span>
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {items.map((i) => (
              <a key={i.href} href={i.href} onClick={() => setOpen(false)} className="py-2 text-foreground">
                {i.label}
              </a>
            ))}
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex justify-center rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
            >
              Register — ₹250
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
