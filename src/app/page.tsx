import Image from "next/image";
import { LandingPage } from "../app/components/LandingBackground";
import Link from "next/link";

export const metadata = {
  title: "DubHacks Next",
  description: "Home",
};
export default function Home() {
  return (
    <div>
      <LandingPage />
    </div>
  );
}
