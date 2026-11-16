import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Drivora team — we're available 24/7.",
};

const channels = [
  {
    icon: Phone,
    label: "Call us",
    value: site.phone,
    href: site.phoneHref,
    note: "24/7 for existing bookings",
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "Replies within 2 hours",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Frankfurt am Main",
    note: site.address,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Contact"
        title="Let's get you on the road."
        description="Questions about a booking, corporate accounts or a special request? Our team is here to help."
      />

      <section className="container-page grid gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div className="flex flex-col gap-4">
          {channels.map((c) => {
            const content = (
              <>
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                  <c.icon className="size-5" />
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-muted-foreground">
                    {c.label}
                  </span>
                  <span className="font-semibold">{c.value}</span>
                  <span className="text-sm text-muted-foreground">
                    {c.note}
                  </span>
                </div>
              </>
            );
            const cls =
              "flex items-start gap-4 rounded-2xl border bg-card p-5 shadow-soft transition-colors";
            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                className={`${cls} hover:border-foreground/20`}
              >
                {content}
              </a>
            ) : (
              <div key={c.label} className={cls}>
                {content}
              </div>
            );
          })}

          <div className="rounded-2xl border bg-card p-5 shadow-soft">
            <p className="flex items-center gap-2 text-sm font-semibold">
              <Clock className="size-4 text-muted-foreground" /> Office hours
            </p>
            <dl className="mt-4 grid grid-cols-[1fr_auto] gap-y-2 text-sm">
              {site.hours.map((h) => (
                <div key={h.days} className="contents">
                  <dt className="text-muted-foreground">{h.days}</dt>
                  <dd className="tabular-nums">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="rounded-3xl border bg-card p-6 shadow-soft sm:p-10">
          <h2 className="text-2xl font-semibold">Send us a message</h2>
          <p className="mt-2 text-muted-foreground">
            Fill in the form and we&apos;ll get back to you shortly.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
