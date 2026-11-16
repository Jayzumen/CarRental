import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  crumb: string;
  children?: React.ReactNode;
};

/** Compact header used on all inner pages. */
export function PageHero({
  eyebrow,
  title,
  description,
  crumb,
  children,
}: Props) {
  return (
    <section className="relative isolate overflow-hidden border-b">
      <div
        aria-hidden
        className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_90%_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -z-10 h-80 w-[48rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="container-page flex flex-col gap-5 pt-14 pb-14 sm:pt-20 sm:pb-16">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
            </li>
            <ChevronRight aria-hidden className="size-3.5" />
            <li aria-current="page" className="text-foreground">
              {crumb}
            </li>
          </ol>
        </nav>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="max-w-3xl text-4xl font-semibold sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl text-lg text-muted-foreground">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
