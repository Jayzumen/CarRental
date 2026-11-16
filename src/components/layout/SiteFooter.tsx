import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { Logo } from "./Logo";

const social = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <>
        <rect width="20" height="20" x="2" y="2" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <path d="M17.5 6.5h.01" />
      </>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
  },
];

const columns = [
  {
    title: "Explore",
    links: [{ name: "Home", href: "/" }, ...navLinks],
  },
  {
    title: "Rent",
    links: [
      { name: "Book a car", href: "/#booking" },
      { name: "Performance cars", href: "/car-models#performance" },
      { name: "FAQ", href: "/#faq" },
      { name: "My bookings", href: "/profile" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t bg-card">
      <div className="container-page grid gap-12 py-16 md:grid-cols-12">
        <div className="flex flex-col gap-5 md:col-span-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            {site.description}
          </p>
          <div className="flex gap-2">
            {social.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="grid size-9 place-items-center rounded-full border text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  {s.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="md:col-span-2">
            <h3 className="text-sm font-semibold">{col.title}</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="md:col-span-4">
          <h3 className="text-sm font-semibold">Contact</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
            <li>
              <a
                href={site.phoneHref}
                className="flex items-center gap-2.5 hover:text-foreground"
              >
                <Phone className="size-4" /> {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2.5 hover:text-foreground"
              >
                <Mail className="size-4" /> {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0" /> {site.address}
            </li>
          </ul>
          <dl className="mt-6 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1.5 text-sm">
            {site.hours.map((h) => (
              <div key={h.days} className="contents">
                <dt className="text-muted-foreground">{h.days}</dt>
                <dd className="tabular-nums">{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="border-t">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            Designed & built by{" "}
            <a
              href="https://github.com/Jayzumen"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:text-primary"
            >
              Jayzumen
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
