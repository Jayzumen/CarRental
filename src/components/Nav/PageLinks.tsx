"use client";
import Link from "next/link";

type Props = {
  toggle?: () => void;
  links: { name: string; href: string }[];
};

const PageLinks = ({ toggle, links }: Props) => {
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={`${link.href}`}
          onClick={toggle ? toggle : () => {}}
          className="capitalize transition-colors duration-200 hover:text-red-500"
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default PageLinks;
