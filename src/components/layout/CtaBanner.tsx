import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export function CtaBanner({
  title = "Ready when you are.",
  description = "Reserve in under two minutes, cancel free up to 48 hours before pick-up. Our team is available around the clock.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="container-page py-20 sm:py-24">
      <div className="relative isolate overflow-hidden rounded-3xl bg-ink px-6 py-14 text-ink-foreground sm:px-12 sm:py-16 lg:px-16">
        <div
          aria-hidden
          className="absolute -top-24 -right-24 -z-10 size-96 rounded-full bg-primary/40 blur-[100px]"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [mask-image:linear-gradient(to_left,black,transparent_70%)] [background-size:48px_48px] opacity-[0.07]"
        />
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-xl flex-col gap-4">
            <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
            <p className="text-ink-muted sm:text-lg">{description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/#booking">
                Book your car <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="glass">
              <a href={site.phoneHref}>
                <Phone /> {site.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
