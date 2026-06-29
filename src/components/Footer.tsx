import { CONTACT_EMAIL, SOCIAL } from "@/lib/site";
import { Instagram, Linkedin, Globe, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            The Innovation Story × Artpark IISc Bengaluru
          </div>
          <div className="mt-3 font-display text-3xl text-foreground sm:text-4xl">Now or Never Hack 2026</div>
          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            For queries regarding participation, write to us.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 text-foreground hover:text-primary">
            <Mail className="size-4" /> {CONTACT_EMAIL}
          </a>
          <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <Instagram className="size-4" /> Instagram
          </a>
          <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <Linkedin className="size-4" /> LinkedIn
          </a>
          <a href={SOCIAL.website} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <Globe className="size-4" /> theinnovationstory.com
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-border pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} The Innovation Story. All rights reserved.
      </div>
    </footer>
  );
}
