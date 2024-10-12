"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Rocket,
  Users,
  Calendar,
  Lightbulb,
  Zap,
} from "lucide-react";
import Link from "next/link";

const TrackCard = ({ title, description, features, applyHref }) => (
  <motion.div
    className="backdrop-blur-md bg-white/10 rounded-3xl p-6 shadow-lg border border-white/20
                flex flex-col"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
    <p className="text-white/80 mb-6">{description}</p>
    <div
      className={`grid ${title === "Project Track" ? "grid-cols-2" : "grid-cols-1"} gap-4 mb-6`}
    >
      {features.map((feature, index) => (
        <div key={index} className="flex items-center text-white/90">
          {feature.icon}
          <span className="ml-3">{feature.text}</span>
        </div>
      ))}
    </div>
    <div className="mt-auto flex justify-center">
      <Link href={applyHref}>
        <button className="whitespace-nowrap h-12 px-6 text-[1rem] animate-shimmer items-center rounded-[0.5rem] border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-semibold text-[#d0d0d0] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Apply Now
        </button>
      </Link>
    </div>
  </motion.div>
);

const TracksComponent = () => {
  const tracks = [
    {
      title: "Project Track",
      description:
        "The project track is perfect for students and teams who have at least a drafted prototype for a product/project and are looking to make it a startup.",
      features: [
        { icon: <Sparkles size={20} />, text: "Workshops and Speakers" },
        { icon: <Lightbulb size={20} />, text: "Ad-Hoc Advising" },
        { icon: <Calendar size={20} />, text: "Community Events" },
        { icon: <Rocket size={20} />, text: "Funding Opportunities" },
        { icon: <Users size={20} />, text: "Networking Opportunities" },
        { icon: <Zap size={20} />, text: "Compute Resources" },
      ],
      applyHref:
        "https://airtable.com/appzMr0z2UPvOlIlF/pagS8h2nTjBy2JB3g/form",
    },
    {
      title: "EiR Track",
      description:
        "The EiR track is perfect for students who are interested in entrepreneurship but may not know where to start, don't have an idea but want to build.",
      features: [
        { icon: <Sparkles size={20} />, text: "Workshops and Speakers" },
        { icon: <Calendar size={20} />, text: "Community Events" },
        { icon: <Users size={20} />, text: "Networking Opportunities" },
      ],
      applyHref:
        "https://airtable.com/app8dwLTZzIrN6zkg/pagr4gIIigbiomMk9/form",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        {tracks.map((track, index) => (
          <TrackCard key={index} {...track} />
        ))}
      </div>
      <p className="text-center text-white/70 mt-8 italic">
        Not sure which track to apply for? Email us at{" "}
        <Link className="font-bold" href="mailto:next@dubhacks.co">
          next@dubhacks.co
        </Link>
      </p>
    </div>
  );
};

export default TracksComponent;
