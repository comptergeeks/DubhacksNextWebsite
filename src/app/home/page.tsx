import Image from "next/image";
import { Gemunu_Libre } from "next/font/google";

import DubHackScrollingText from "../components/DubhacksScrollingText";
import HeadingDesc from "../components/HeadingDesc";
import ScrollingCompanies from "../components/ScrollingCompanies";
import ImagePreview from "../components/ImagePreviews";
import Link from "next/link";
import MailingListButton from "../components/MailingListButton";

// planned component on this page --> what is next?
// mailing list can be a modal popup
// for now just link to the normal airtable one
// need scroll animations + footer
// need one text for mobile and one for desktop

export default function HomePage() {
  return (
    <div>
      <DubHackScrollingText />
      <div className="mb-[20rem]">
        <HeadingDesc
          title="Who are we?"
          content={<ImagePreview />}
          desc="DubHacks Next is a premier organization at the University of Washington dedicated to providing an elite entrepreneurship experience for the most talented builders on campus."
        />
      </div>
      <div className="mb-[20rem]">
        <HeadingDesc title="Where have our alumni gone?" />
        <ScrollingCompanies />
      </div>

      <div className="mb-[20rem]">
        <HeadingDesc title="Interested?" />
        <h1 className="text-center mb-10 text-[2rem]  pr-20 pl-20">
          <Link
            href="/join"
            className="text-pink-600 hover:text-pink-800 underline"
          >
            Click Here
          </Link>{" "}
          to learn more about our Programs
        </h1>
        <div className="text-center">
          <MailingListButton href="https://airtable.com/apptsOaJb2Kasu4F6/shrS98NcPXlasBto8">
            Join our Mailing List
          </MailingListButton>
        </div>
      </div>
    </div>
  );
}
