import React from "react";
import ProjectTrackCard from "../components/ProjectTrackCard";
import MailingListButton from "../components/MailingListButton";
import EiRTrackCard from "../components/EiRTrackCard";

export default function JoinPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div>
        <div className="mt-24 sm:mt-30 lg:mt-20 border-b border-white border-opacity-25 mb-4 sm:mb-4">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold pb-4">
            Join
          </h1>
        </div>
      </div>
      <div>
        <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2">
          Tracks
        </h2>
        <p className="text-white text-base sm:text-lg">
          There are two main tracks we offer at DubHacks Next, each provides
          their own unique experience.
        </p>
        <div className="flex flex-col md:flex-row gap-4 p-4 mb-4">
          <div className="w-full md:w-1/2 flex">
            <div className="flex-grow flex flex-col">
              <ProjectTrackCard />
              <div className="flex-grow"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <EiRTrackCard />
          </div>
        </div>

        <div className="text-center">
          <MailingListButton href="https://airtable.com/apptsOaJb2Kasu4F6/shrS98NcPXlasBto8">
            Join our Mailing List to Apply when Applications Open
          </MailingListButton>
        </div>
      </div>
    </div>
  );
}
