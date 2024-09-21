"use client";
import React from "react";
import { cn } from "../lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";

// could be made dynamic --> route to poll files and then randomly select five from the list
const ImagePreview = () => {
  const images = [
    "/batch/shreyrizzeffect.jpg",
    "/batch/demodayclutch.jpg",
    "/batch/satvik.jpg",
    "/batch/teamdemoday.jpg",
    "/batch/fullbatch.jpg",
    "/batch/finquire.jpg",
    "/batch/mogcity.jpg",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1, // Adjust this value to change the hover scale effect
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1, // Adjust this value to change the tap scale effect
      rotate: 0,
      zIndex: 100,
    },
  };

  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      {/* Adjust the -ml-32 value to change the overall positioning of the image stack */}
      <div className="flex flex-row -ml-32">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10, // Adjust these values to change the random rotation range
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            // Adjust the -mr-6 value to change the overlap between cards
            // Adjust mt-4 to change the vertical positioning of the cards
            className="h-[100%] cursor-pointer rounded-xl -mr-6 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="images will fix bc of this"
              width={500}
              height={500}
              // Adjust these classes to change the size of the images
              // h-150 and w-75 are for mobile, h-60 and w-60 are for desktop (md breakpoint)
              className="rounded-lg h-20 w-20 md:h-80 md:w-80 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
      {/* Adjust the w-32 value to change the width of the left gradient overlay */}
      <div className="absolute left-0 z-[100] inset-y-0 w-32 bg-gradient-to-r from-white dark:from-black to-transparent h-full pointer-events-none" />
      {/* Adjust the w-32 value to change the width of the right gradient overlay */}
      <div className="absolute right-0 z-[100] inset-y-0 w-32 bg-gradient-to-l from-white dark:from-black to-transparent h-full pointer-events-none" />
    </div>
  );
};

export default ImagePreview;
