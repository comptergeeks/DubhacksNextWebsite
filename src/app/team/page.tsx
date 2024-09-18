import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";

const SectionsWithNavigation = () => {
  const router = useRouter();
  const controls = useAnimation();

  useEffect(() => {
    if (router.asPath.includes("#")) {
      const id = router.asPath.split("#")[1];
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80; // Adjust this value to account for any fixed headers
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        controls.start({
          y: -y,
          transition: { duration: 0.8, ease: [0.41, 0.13, 0.12, 0.98] },
        });
      }
    }
  }, [router.asPath, controls]);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Adjust this value to account for any fixed headers
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      controls.start({
        y: -y,
        transition: { duration: 0.8, ease: [0.41, 0.13, 0.12, 0.98] },
      });

      // Update URL without triggering a page reload
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <motion.div className="container mx-auto px-4 py-8" animate={controls}>
      <nav className="mb-8 sticky top-0 bg-white z-10 py-4">
        <ul className="flex justify-center space-x-4">
          <li>
            <Link
              href="#apply"
              onClick={(e) => handleLinkClick(e, "apply")}
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Apply
            </Link>
          </li>
          <li>
            <Link
              href="#tracks"
              onClick={(e) => handleLinkClick(e, "tracks")}
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Tracks
            </Link>
          </li>
        </ul>
      </nav>

      <section id="apply" className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Apply</h2>
        <p className="mb-4">
          Here you can find information about applying to our programs.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Start Application
        </button>
      </section>

      <section id="tracks" className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Tracks</h2>
        <p className="mb-4">Explore our different learning tracks:</p>
        <ul className="list-disc pl-5">
          <li>Web Development</li>
          <li>Data Science</li>
          <li>Mobile App Development</li>
          <li>Machine Learning</li>
        </ul>
      </section>
    </motion.div>
  );
};

export default SectionsWithNavigation;
