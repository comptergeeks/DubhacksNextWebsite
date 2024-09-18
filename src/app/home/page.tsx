import Image from "next/image";
import { Gemunu_Libre } from "next/font/google";
import ImageStrip from "../ui/ImageStrip";
import ApiCallButton from "../ui/ApiCallButton";
import DubHackScrollingText from "../ui/DubhacksScrollingText";
import { Navbar } from "../ui/Navbar";
const gemunuLibre = Gemunu_Libre({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-gemunu-libre",
});

export default function HomePage() {
  return (
    <main>
      <Navbar className="top-2" />
      <DubHackScrollingText />
    </main>
  );
}
