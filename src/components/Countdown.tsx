import { useEffect, useState } from "react";
import { REGISTRATION_CLOSE_DATE } from "@/lib/site";

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms % 86400000) / 3600000);
  const mins = Math.floor((ms % 3600000) / 60000);
  const secs = Math.floor((ms % 60000) / 1000);
  return { days, hours, mins, secs };
}

export function Countdown() {
  const target = new Date(REGISTRATION_CLOSE_DATE).getTime();
  const [t, setT] = useState(() => diff(target));

  useEffect(() => {
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const cells: { label: string; value: number }[] = [
    { label: "Days", value: t.days },
    { label: "Hours", value: t.hours },
    { label: "Minutes", value: t.mins },
    { label: "Seconds", value: t.secs },
  ];

  return (
    <div className="glass inline-flex flex-col gap-3 rounded-2xl px-5 py-4">
      <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Registration closes in</div>
      <div className="flex items-center gap-3 sm:gap-5">
        {cells.map((c, i) => (
          <div key={c.label} className="flex items-center gap-3 sm:gap-5">
            <div className="text-center">
              <div className="font-display text-3xl leading-none text-foreground tabular-nums sm:text-4xl">
                {String(c.value).padStart(2, "0")}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{c.label}</div>
            </div>
            {i < cells.length - 1 && <div className="h-8 w-px bg-border" />}
          </div>
        ))}
      </div>
    </div>
  );
}
