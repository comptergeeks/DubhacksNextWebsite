import { Roboto } from "next/font/google";
import { ReactNode } from "react";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400"], // Changed to include 100 (thin) and 400 (normal)
});

type HeadingAndDesc = {
  title: string;
  content?: ReactNode;
  desc?: string;
};

// potentially add ability for sub components to be added for MAXIMUM EXPANDIABILITY
// for the who are we add the scrolling strip --> if i can get this up by 7AM this would be optimal

// make font size smaller on mobile

export default function HeadingComponent({
  title,
  content,
  desc,
}: HeadingAndDesc) {
  return (
    <div className={`${roboto.className} text-center`}>
      <h1 className="text-[4rem] font-thin mb-4">{title}</h1>
      <div className="mb-4">{content}</div>
      <p className="text-[2rem]  pr-20 pl-20">{desc}</p>
    </div>
  );
}
