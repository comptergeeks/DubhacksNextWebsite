import React from "react";

const ProjectTrackCard = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white bg-opacity-25 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            &#x1F4A1; Project Track
          </h1>
          <h2 className="text-2xl font-bold text-white mb-4">
            &#x1F31F; Overview
          </h2>
          <p className="mt-2 text-white">
            Are you someone with a promising project that you want to take to
            the next level? Join Next as a project in our incubator!
          </p>
          <p className="mt-2 text-white">
            As a participant in the Project track of our incubator, you'll go
            through the program alongside other teams of founders. Students
            graduating from Next will leave with tangible growth and progress on
            their projects, valuable lessons from and connections to the booming
            Seattle startup scene, and a long-lasting community of like-minded
            student founders to share stories and lessons with over the years.
          </p>
          <p className="mt-2 text-white">
            Applications to join Batch 3 are now live with the priority deadline
            being October 29 and regular application deadline being November 5.
            We highly encourage you to apply. Additionally, stay connected with
            us via our mailing list and DubHacks social media!
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-2">
            &#x1F4D1; What you'll get out of it
          </h3>
          <p className="text-white">
            Throughout the course of the 10 weeks, we'll provide you with:
          </p>
          <ul className="list-disc list-inside text-white mt-2 pl-4">
            <li>Strategic goal-setting and accountability methods</li>
            <li>Workshops, speaker events, and networking</li>
            <li>
              Ad-hoc advising via the Next team and our partners and sponsors
            </li>
            <li>Hiring support</li>
            <li>Access to our network</li>
            <li>
              A community of amazing fellow founders and
              Entrepreneurs-in-Residence!
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-6 mb-2">
            &#x1F50D; What we're looking for
          </h3>
          <p className="text-white">
            We're looking for teams and individuals excited to push their
            projects to the next level.
          </p>
          <p className="mt-2 text-white">Successful participants are…</p>
          <ul className="list-disc list-inside text-white mt-2 pl-4">
            <li>
              Passionate and insightful about the problem they're tackling
            </li>
            <li>Familiar with the tech startup space</li>
            <li>
              Deeply thinking about both their project's engineering and
              business capabilities
            </li>
            <li>Excited to meet fellow founders at UW!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectTrackCard;
