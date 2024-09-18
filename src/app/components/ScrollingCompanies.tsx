import Marquee from "react-fast-marquee";
import Image from "next/image";

import YCombinatorLogo from "/public/partners/yc.png";
import GeneralCatalystLogo from "/public/partners/gc.png";
import TechStarsLogo from "/public/partners/ts.png";
import FifSevLogo from "/public/partners/fs.png";
import DormRoomFundLogo from "/public/partners/drf.png";
import RippleVCLogo from "/public/partners/rp.png";
// in the future use a route to dynamically poll images from directory bc that way --> partners can be easily added
// for the sake of speed, this is hardcoded

export default function ScrollingCompanies() {
  return (
    // might need to add height to the scrolling piece
    <div className="bg-white bg-opacity-25 h-[10%]">
      <Marquee pauseOnHover={true}>
        <Image
          className="mx-10"
          height={80}
          src={YCombinatorLogo}
          alt="YCombinator Logo"
        />
        <Image
          className="mx-10"
          height={110}
          src={GeneralCatalystLogo}
          alt="GeneralCatalyst Logo"
        />
        <Image
          className="mx-10"
          height={100}
          src={TechStarsLogo}
          alt="TechStars Logo"
        />
        <Image
          className="mx-10"
          height={100}
          src={FifSevLogo}
          alt="1517 Logo"
        />
        <Image
          className="mx-10"
          height={100}
          src={DormRoomFundLogo}
          alt="1517 Logo"
        />
        <Image
          className="mx-10"
          height={90}
          src={RippleVCLogo}
          alt="1517 Logo"
        />
      </Marquee>
    </div>
  );
}
