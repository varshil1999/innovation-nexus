import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { REGISTER_URL } from "@/lib/site";
import tisLogo from "@/assets/tis-logo.svg.asset.json";
import artparkLogo from "@/assets/artpark-logo.svg.asset.json";

const items = [
  { label: "About", href: "#about" },
  { label: "Domains", href: "#domains" },
  { label: "Who", href: "#who" },
  { label: "Process", href: "#process" },
  { label: "Awards", href: "#awards" },
  { label: "Judging", href: "#judging" },
  { label: "Partners", href: "#partners" },
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
        scrolled ? "backdrop-blur-xl bg-background/80 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-3">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img src={tisLogo.url} alt="The Innovation Story" className="h-9 w-9 shrink-0 rounded-md object-contain" />
          <span className="text-muted-foreground">×</span>
          <img src={artparkLogo.url} alt="Artpark IISc Bengaluru" className="h-9 w-9 shrink-0 rounded-md object-contain" />
          <span className="ml-1 hidden truncate text-sm font-semibold tracking-tight text-foreground lg:inline">
            Now or Never Hack
          </span>
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {items.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              {i.label}
            </a>
          ))}
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.04]"
          >
            Register
          </a>
        </nav>

        <button
          className="rounded-md p-2 lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="block h-0.5 w-5 bg-foreground"></span>
          <span className="mt-1 block h-0.5 w-5 bg-foreground"></span>
          <span className="mt-1 block h-0.5 w-5 bg-foreground"></span>
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 px-6 py-4 lg:hidden">
          <div className="grid grid-cols-2 gap-2">
            {items.map((i) => (
              <a key={i.href} href={i.href} onClick={() => setOpen(false)} className="rounded-md px-2 py-2 text-foreground hover:bg-foreground/5">
                {i.label}
              </a>
            ))}
          </div>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex w-full justify-center rounded-full bg-primary px-4 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground"
          >
            Register — ₹250
          </a>
        </div>
      )}
    </motion.header>
  );
}
