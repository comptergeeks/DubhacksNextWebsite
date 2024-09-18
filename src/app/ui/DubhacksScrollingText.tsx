"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Gemunu_Libre } from "next/font/google";
import Image from "next/image";

const gemunuLibre = Gemunu_Libre({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export default function DubHackScrollingText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const textContent = "DUBHACKS NEXT";
  const duration = 20; // Duration in seconds for one complete scroll

  return (
    <div
      className={`h-screen w-full bg-black overflow-hidden relative flex items-center justify-center ${gemunuLibre.className}`}
    >
      <div
        ref={containerRef}
        className="absolute w-full whitespace-nowrap overflow-hidden"
      >
        <motion.div
          className="inline-block"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: duration,
              ease: "linear",
            },
          }}
        >
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="inline-block text-[25rem] font-bold text-white whitespace-nowrap tracking-wider"
            >
              {textContent}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Centered Image Overlay */}
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
