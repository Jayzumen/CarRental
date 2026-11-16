import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { faqs, site } from "@/data/site";

/** Native <details> accordion: accessible and zero JavaScript. */
export function Faq() {
  return (
    <section id="faq" className="section container-page scroll-mt-20">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered."
          description={
            <>
              Can&apos;t find what you&apos;re looking for? Call us at{" "}
              <a
                href={site.phoneHref}
                className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
              >
                {site.phone}
              </a>
              .
            </>
          }
        />
        <div className="divide-y border-y">
          {faqs.map((f) => (
            <details key={f.q} className="group py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-lg py-5 font-medium outline-none focus-visible:ring-4 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
                {f.q}
                <Plus className="size-5 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="max-w-2xl pb-5 leading-relaxed text-muted-foreground">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
