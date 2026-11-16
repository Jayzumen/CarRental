import { CarFront, KeyRound, MousePointerClick } from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";

const steps = [
  {
    icon: MousePointerClick,
    title: "Choose your car",
    text: "Filter by city, dates and category. Every price you see is the price you pay.",
  },
  {
    icon: KeyRound,
    title: "Confirm in seconds",
    text: "Sign in, review your trip and confirm. Your rental voucher arrives instantly.",
  },
  {
    icon: CarFront,
    title: "Pick up and go",
    text: "Skip the queue at any of our 12 locations. Return wherever suits you best.",
  },
];

export function HowItWorks() {
  return (
    <section className="section container-page">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <SectionHeading
          eyebrow="How it works"
          title="From search to steering wheel in three steps."
          description="We removed the paperwork, the counters and the surprises. What's left is simply driving."
        />
        <ol className="grid gap-4 sm:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="flex flex-col gap-5 rounded-2xl border bg-card p-6 shadow-soft"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-xl bg-primary-soft text-primary">
                  <s.icon className="size-5" />
                </span>
                <span className="text-sm font-medium text-muted-foreground tabular-nums">
                  0{i + 1}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
