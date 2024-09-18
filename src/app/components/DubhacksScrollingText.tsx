"use client";
import React from "react";
import { Gemunu_Libre } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";

import Marquee from "react-fast-marquee";

const gemunuLibre = Gemunu_Libre({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export default function DubHackScrollingText() {
  const textContent = "DUBHACKS NEXT";

  return (
    <div
      className={`h-[90%] mt-[10%] mb-[12%]  w-full bg-black overflow-hidden relative flex items-center justify-center ${gemunuLibre.className} `}
    >
      <div className="relative flex overflow-x-hidden w-full text-[25rem]">
        <Marquee speed={75}>
          <h1 className="mx-10">{textContent}</h1>
        </Marquee>
      </div>

      <div className="absolute z-10">
        <div className="relative w-90 h-90">
          <Image
            src="/img/dubhacksnext.png"
            alt="DubHacks Next Logo"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
