import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import { DirectionAwareHover } from "../components/ui/direction-aware-hover";

export default function TeamPage() {
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

  return (
    <div className="mt-20 sm:mt-30 lg:mt-20">
      <div className="mx-10 sm:mx-20 lg:mx-40 mb-12 border-b border-white border-opacity-25">
        <div className="flex flex-col md:flex-row items-center gap-10 mb-8">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Team</h1>
          <div className="w-full md:w-auto overflow-x-auto md:overflow-x-visible">
            <div className="inline-flex">
              <AnimatedTooltip items={people} />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-10 sm:mx-20 lg:mx-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
  );
}
