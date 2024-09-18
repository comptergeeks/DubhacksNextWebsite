import React from "react";

const EiRTrackCard = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white bg-opacity-25 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            &#x1F6E0; EiR Track
          </h1>
          <h2 className="text-2xl font-bold text-white mb-4">
            &#x1F31F; Overview
          </h2>
          <p className="mt-2 text-white">
            Are you a builder interested in technology entrepreneurship? Join
            Next as an Entrepreneur-in-Residence! This provides you a
            personalized pathway to guide and support your entrepreneurial
            journey, ensuring your success.
          </p>
          <p className="mt-2 text-white">
            The EiR program is designed for those who are looking for
            inspiration, accountability, and a community to explore and build in
            the tech startup space. Students in Next's EiR track will graduate
            with a stronger understanding of what it takes to be a founder, a
            unique insight into the Seattle startup ecosystem, and lasting and
            meaningful relationships with like-minded students.
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
            Throughout the course of the 15 weeks, we'll provide you with:
          </p>
          <ul className="list-disc list-inside text-white mt-2 pl-4">
            <li>Workshops, speaker events, and networking opportunities</li>
            <li>An environment to explore, build, and break your ideas</li>
            <li>
              Ad-hoc advising via the Next team and our partners and sponsors
            </li>
            <li>Access to our network</li>
            <li>
              Introduction to Seattle's Entrepreneurship Ecosystem through joint
              off-campus events
            </li>
            <li>
              A community of fellow EiRs (potential co-Founders 👀) and student
              founders at UW
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-6 mb-2">
            &#x1F50D; What we're looking for
          </h3>
          <p className="text-white">
            We're looking for passionate individuals eager to learn and/or
            create their own startups in the future.
          </p>
          <p className="mt-2 text-white">Successful EiRs are...</p>
          <ul className="list-disc list-inside text-white mt-2 pl-4">
            <li>
              Builders with a desire to build building exciting and impactful
              technology
              <ul className="list-disc list-inside pl-4">
                <li>
                  Bonus points if you have engineering, business, product,
                  and/or design skills
                </li>
              </ul>
            </li>
            <li>Endlessly curious and ready to learn</li>
            <li>Extremely passionate about the tech startup space</li>
            <li>Problem-solvers who take initiative</li>
            <li>Excited to meet like-minded people at UW</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EiRTrackCard;
