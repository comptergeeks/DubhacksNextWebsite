"use client";
import React, { useCallback } from "react";
import Image from "next/image";
import { ShootingStars } from "../../app/components/ui/shooting-stars";
import { StarsBackground } from "../../app/components/ui/stars-background";
import localFont from "next/font/local";
import { Input } from "../../app/components/ui/input";
import ScrollDown from "../../app/components/customUI/ScrollDown";
import { FloatingNav } from "../../app/components/ui/floating-navbar";
import FeatureCarousel from "../../app/components/customUI/FeatureCarousel";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import TracksComponent from "../../app/components/customUI/TracksComponent";

const generalSans = localFont({
  src: "../fonts/GeneralSans-Variable.woff2",
  variable: "--font-general-sans",
  weight: "400 600 700",
});

const people = [
  {
    id: 1,
    name: "Sthiti",
    designation: "Director",
    image: "/team/aunty.jpg",
  },
  {
    id: 2,
    name: "Varun",
    designation: "Projects Lead",
    image: "/team/varunthegoat.jpg",
  },
  {
    id: 3,
    name: "Farhan",
    designation: "EiR Lead",
    image: "/team/farhan.jpg",
  },
  {
    id: 4,
    name: "Anshul",
    designation: "Director of Sponsorships",
    image: "/team/anshulator.jpg",
  },
  {
    id: 5,
    name: "Abigail",
    designation: "Marketing Lead",
    image: "/team/abigail.jpg",
  },
  {
    id: 6,
    name: "Ryan",
    designation: "Advisor",
    image: "/team/ryan.png",
  },
];

export function LandingPage() {
  const scrollToTracks = useCallback(() => {
    const tracksSection = document.getElementById("tracks-section");
    if (tracksSection) {
      tracksSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  //        <FloatingNav />
  return (
    <div className={`${generalSans.variable} font-sans`}>
      <div className="fixed inset-0 z-0">
        <ShootingStars className="bg-[#462339] bg-opacity-23" />
        <StarsBackground />
      </div>

      <div className="relative z-10">
        <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
          <Image
            src="/logos/dubhacksnext.png"
            alt="Dubhacks Logo"
            width={84}
            height={84}
            className="mb-4 sm:mb-8"
          />
          <div
            onClick={scrollToTracks}
            className="inline-flex py-2 sm:py-4 h-auto sm:h-10 text-[0.875rem] sm:text-[1rem] animate-shimmer items-center rounded-[0.5rem] border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-3 sm:pl-4 sm:pr-6 font-semibold text-[#d0d0d0] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className="fill-[#d0d0d0] mr-2 sm:mr-4"
              viewBox="0 0 256 256"
            >
              <path d="M183.89,153.34a57.6,57.6,0,0,1-46.56,46.55A8.75,8.75,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68ZM216,144a88,88,0,0,1-176,0c0-27.92,11-56.47,32.66-84.85a8,8,0,0,1,11.93-.89l24.12,23.41,22-60.41a8,8,0,0,1,12.63-3.41C165.21,36,216,84.55,216,144Zm-16,0c0-46.09-35.79-85.92-58.21-106.33L119.52,98.74a8,8,0,0,1-13.09,3L80.06,76.16C64.09,99.21,56,122,56,144a72,72,0,0,0,144,0Z"></path>
            </svg>
            Apply Now to Batch 4
          </div>
          <h1 className="text-[2.5rem] sm:text-[4rem] md:text-[6rem] font-bold text-white z-20 mb-4 text-opacity-75 text-center">
            DUBHACKS NEXT
          </h1>
          <p className="text-center z-10 text-white text-opacity-75 text-[1.25rem] leading-relaxed mb-8 px-20 m">
            We are the premier organization at the University of Washington
            dedicated to providing an elite entrepreneurship experience for the
            most talented builders on campus.
          </p>
          <div className="z-10 w-full max-w-md px-4 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Input
              className="w-full sm:w-[20rem] h-12 px-4 rounded-md text-black border border-neutral-700 focus:border-white focus:ring-2 focus:ring-white focus:ring-opacity-50 transition duration-300 ease-in-out"
              id="email"
              placeholder="youremail@example.com"
              type="email"
            />
            <button className="w-full sm:w-auto whitespace-nowrap h-12 px-6 text-[1rem] animate-shimmer items-center rounded-[0.5rem] border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-semibold text-[#d0d0d0] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Sign Up!
            </button>
          </div>
          <ScrollDown position="left" />
          <ScrollDown position="right" />
        </section>

        <section className="w-screen text-white py-10 sm:py-20">
          <div className="max-w-screen mx-auto px-4 sm:px-10">
            <FeatureCarousel />
          </div>
        </section>

        <section className="w-screen text-white py-10 sm:py-20">
          <div className="max-w-screen mx-auto px-4 sm:px-10">
            <div className="flex flex-col sm:flex-row items-center sm:items-start mb-8">
              <div className="w-full sm:w-[500px] mb-4 sm:mb-0">
                <h2 className="text-4xl sm:text-6xl font-bold text-center sm:text-left">
                  the team
                </h2>
              </div>
              <div className="flex flex-row justify-center sm:justify-start lg:-ml-48 sm:-ml-24 ">
                <AnimatedTooltip items={people} />
              </div>
            </div>
            <div className="mx-4 sm:mx-10 lg:mx-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {people.map((person, index) => (
                <div key={index} className="flex items-center justify-center">
                  <DirectionAwareHover imageUrl={person.image}>
                    <p className="font-bold text-xl">{person.name}</p>
                    <p className="font-normal text-sm">{person.designation}</p>
                  </DirectionAwareHover>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="tracks-section"
          className="w-screen text-white py-10 sm:py-20"
        >
          <div className="max-w-screen mx-auto px-4 sm:px-10">
            <div className="mb-8">
              <h2 className="text-4xl sm:text-6xl font-bold text-center sm:text-left">
                our tracks
              </h2>
            </div>
            <TracksComponent />
          </div>
        </section>
      </div>
    </div>
  );
}
