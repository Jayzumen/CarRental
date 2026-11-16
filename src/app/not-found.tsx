import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center gap-5 py-20 text-center">
      <p className="eyebrow">404</p>
      <h1 className="text-4xl font-semibold sm:text-5xl">
        Looks like you took a wrong turn.
      </h1>
      <p className="max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="flex gap-3">
        <Button asChild>
          <Link href="/">Back to home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/car-models">Browse fleet</Link>
        </Button>
      </div>
    </section>
  );
}
