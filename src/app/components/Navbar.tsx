"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import Image from "next/image";
import { Gemunu_Libre } from "next/font/google";
import Link from "next/link";

const gemunuLibre = Gemunu_Libre({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

// wrap logo in a link to the home page

const Logo = () => (
  <Link href="/" className="flex items-center space-x-1 sm:space-x-2">
    <div className="relative w-8 h-8 sm:w-10 sm:h-10">
      <Image
        src="/img/nextwhite.png"
        alt="DubHacks Next Logo"
        fill
        style={{ objectFit: "contain" }}
      />
    </div>
    <span
      className={`text-white font-bold text-lg sm:text-2xl md:text-3xl tracking-wider ${gemunuLibre.className}`}
    >
      DUBHACKS NEXT
    </span>
  </Link>
);

export default Logo;

/*
<MenuItem setActive={setActive} active={active} item="Alumni">
  <div className="flex flex-col space-y-4 text-sm">
    <HoveredLink href="/network">Alumni Network</HoveredLink>
    <HoveredLink href="/events">Alumni Events</HoveredLink>
    <HoveredLink href="/stories">Success Stories</HoveredLink>
  </div>
</MenuItem>

              // <HoveredLink href="/batch3">Batch 3 \uD83D\uDD25</HoveredLink>
*/

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      // className={cn("fixed top-4 inset-x-0 max-w-lg mx-auto z-50", className)}
      className={cn(
        "fixed top-4 left-4 right-4 sm:inset-x-0 sm:mx-auto max-w-xl z-50",
      )}
    >
      <Menu setActive={setActive}>
        <div className="flex justify-between items-center w-full px-4">
          <Logo />
          <div className="flex space-x-4">
            <MenuItem
              setActive={setActive}
              active={active}
              item="Team"
              link="/team"
            >
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/team">Our Team</HoveredLink>
                <HoveredLink href={"/friends"}>Friends of Next </HoveredLink>
              </div>
            </MenuItem>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Join"
              link="/join"
            >
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/join">Apply Now</HoveredLink>
                <HoveredLink href="/join">Tracks</HoveredLink>
              </div>
            </MenuItem>
          </div>
        </div>
      </Menu>
    </div>
  );
}
