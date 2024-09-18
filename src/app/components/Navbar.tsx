"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import Image from "next/image";
import { Gemunu_Libre } from "next/font/google";

const gemunuLibre = Gemunu_Libre({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

// wrap logo in a link to the home page
const Logo = () => (
  <div className="flex items-center space-x-2">
    <Image
      src="/img/nextwhite.png"
      alt="DubHacks Next Logo"
      //layout="fill"
      // objectFit="contain"
      width={40}
      height={40}
    />
    <span
      className={`text-white font-bold text-[2rem] tracking-wider ${gemunuLibre.className}`}
    >
      DUBHACKS NEXT
    </span>
  </div>
);

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
      className={cn("fixed top-4 inset-x-0 max-w-xl mx-auto z-50", className)}
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
                <HoveredLink href="/join#apply">Apply Now</HoveredLink>
                <HoveredLink href="/join#tracks">Tracks</HoveredLink>
              </div>
            </MenuItem>
          </div>
        </div>
      </Menu>
    </div>
  );
}
