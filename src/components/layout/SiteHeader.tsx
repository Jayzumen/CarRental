import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { ThemeToggle } from "./ThemeToggle";
import { UserButton } from "./UserButton";
import { MobileNav } from "./MobileNav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl backdrop-saturate-150">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Main" className="hidden md:block">
          <NavLinks />
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeToggle className="hidden md:grid" />
          <div className="hidden md:block">
            <UserButton />
          </div>
          <Button asChild size="sm" className="hidden lg:inline-flex">
            <Link href="/#booking">Book now</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
