"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Talent",
    description:
      "Selective program supporting 30+ of the most talented builders at the University of Washington.",
    image: "/batch/img_8073_720.jpg",
    bgColor: "bg-black/40",
    textColor: "text-white",
  },
  {
    title: "Curriculum",
    description:
      "Workshops, fireside chats, and build sessions to help take you from idea to product.",
    image: "/batch/IMG_1970.jpg",
    bgColor: "bg-black/40",
    textColor: "text-neutral",
  },
  {
    title: "Community",
    description:
      "Fun community events to create lasting memories throughout the year.",
    image: "/batch/DSC09891.jpg",
    bgColor: "bg-black/40",
    textColor: "text-neutral",
  },
  {
    title: "Demo Day",
    description:
      "Final Demo Day with product pitches to investors, founders, and other members of the Seattle startup community.",
    image: "/batch/_dsc5092_720.jpg",
    bgColor: "bg-black/40",
    textColor: "text-neutral",
  },
];

const FeatureCarousel = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const containerRef = useRef(null);
  const controls = useAnimation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleDragEnd = (event, info) => {
    const dragThreshold = isMobile ? 30 : 50;
    const draggedDistance = info.offset.x;
    const featureWidth = isMobile ? 300 : 380;

    if (draggedDistance > dragThreshold && currentFeature > 0) {
      setCurrentFeature(currentFeature - 1);
    } else if (
      draggedDistance < -dragThreshold &&
      currentFeature < features.length - 1
    ) {
      setCurrentFeature(currentFeature + 1);
    } else {
      controls.start({ x: -currentFeature * featureWidth });
    }
  };

  useEffect(() => {
    const featureWidth = isMobile ? 300 : 380;
    controls.start({ x: -currentFeature * featureWidth });
  }, [currentFeature, controls, isMobile]);

  return (
    <div className="w-full max-w-full overflow-hidden relative pb-24">
      <div className="flex flex-col md:flex-row items-center">
        <motion.div
          className="w-full md:w-[380px] md:mr-[92px] flex-shrink-0 mb-8 md:mb-0"
          animate={{ x: isMobile ? 0 : -currentFeature * 380 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-8">
            our program
          </h2>
          <div className="px-4 mb-4">
            <h2 className="text-[#FFB4F8] text-3xl md:text-5xl font-bold mb-2">
              $1M
            </h2>
            <p>
              Our Founders have gone on to raise over $1 million worth in term
              sheets from investors like, Y-Combinator, Ripple Ventures, and
              more.
            </p>
          </div>
          <div className="px-4">
            <h2 className="text-[#FFB4F8] text-3xl md:text-5xl font-bold mb-2">
              16 weeks
            </h2>
            <p>
              Our program lasts for an intensive 16-week period, full of
              building, learning, and growth as student founders.
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={containerRef}
          className="flex cursor-grab active:cursor-grabbing w-full md:w-auto"
          animate={controls}
          drag="x"
          dragConstraints={{
            left: -(features.length - 1) * (isMobile ? 300 : 380),
            right: 0,
          }}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={`shrink-0 rounded-[30px] md:rounded-[40px] ${feature.bgColor} border-white/60 border-[1px] w-[280px] md:w-[340px] h-[480px] md:h-[540px] mr-[20px] md:mr-[40px] flex flex-col overflow-hidden`}
            >
              <div className="relative w-full h-[60%]">
                <Image
                  src={feature.image}
                  alt={`${feature.title} preview`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-between h-[40%]">
                <h3
                  className={`text-[18px] md:text-[22px] ${feature.textColor} font-semibold mb-2`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-[16px] md:text-[18px] ${
                    feature.textColor === "text-white"
                      ? "text-white/35"
                      : "text-[#808080]"
                  } opacity-80 font-medium`}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 md:gap-4">
        {features.map((feature, index) => (
          <button
            key={index}
            onClick={() => setCurrentFeature(index)}
            className="flex items-center justify-center relative before:content-[''] before:absolute before:w-[30px] md:before:w-[38px] before:h-[32px] md:before:h-[40px] before:top-[50%] before:left-[50%] before:-translate-x-[50%] before:-translate-y-[50%]"
          >
            <span
              className={`
                inline-flex rounded-full text-white text-[12px] md:text-[14px] font-semibold px-1 py-1 overflow-hidden box-border pointer-events-none
                whitespace-nowrap backdrop-blur-sm
                justify-center bg-black/30 translate-z-0
              `}
              style={{
                width:
                  index === currentFeature
                    ? isMobile
                      ? "80px"
                      : "100px"
                    : "8px",
                height: index === currentFeature ? "24px" : "8px",
                color:
                  index === currentFeature
                    ? "rgb(255, 255, 255)"
                    : "rgba(255, 255, 255, 0)",
              }}
            >
              {feature.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeatureCarousel;
