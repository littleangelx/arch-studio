"use client";

import Footer from "@/components/Footer";
import Project from "@/components/Project";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "react-responsive";

const Portfolio = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  const router = useRouter();

  let imageSize;
  if (isMobile) {
    imageSize = "mobile";
  } else if (isDesktop) {
    imageSize = "desktop";
  } else {
    imageSize = "tablet";
  }

  const projects = [
    {
      image: `/assets/portfolio/${imageSize}/image-seraph.jpg`,
      name: "Seraph Station",
      date: "September 2019",
    },
    {
      image: `/assets/portfolio/${imageSize}/image-eebox.jpg`,
      name: "Eebox Building",
      date: "August 2017",
    },
    {
      image: `/assets/portfolio/${imageSize}/image-federal.jpg`,
      name: "Federal II Tower",
      date: "March 2017",
    },
    {
      image: `/assets/portfolio/${imageSize}/image-del-sol.jpg`,
      name: "Project Del Sol",
      date: "January 2016",
    },
    {
      image: `/assets/portfolio/${imageSize}/image-prototype.jpg`,
      name: "Le Prototype",
      date: "October 2015",
    },
    {
      image: `/assets/portfolio/${imageSize}/image-228b.jpg`,
      name: "228B Tower",
      date: "April 2015",
    },
    {
      image: `/assets/portfolio/${imageSize}/image-edelweiss.jpg`,
      name: "Grand Edelweiss Hotel",
      date: "December 2013",
    },
    {
      image: `/assets/portfolio/${imageSize}/image-netcry.jpg`,
      name: "Netcry Tower",
      date: "August 2012",
    },
    {
      image: `/assets/portfolio/${imageSize}/image-hypers.jpg`,
      name: "Hypers",
      date: "January 2012",
    },
    {
      image: `/assets/portfolio/${imageSize}/image-sxiv.jpg`,
      name: "SXIV Tower",
      date: "March 2011",
    },
    {
      image: `/assets/portfolio/${imageSize}/image-trinity.jpg`,
      name: "Trinity Bank Tower",
      date: "September 2010",
    },
    {
      image: `/assets/portfolio/${imageSize}/image-paramour.jpg`,
      name: "Project Paramour",
      date: "February 2008",
    },
  ];

  return (
    <>
      <div className="px-8 md:px-24 xl:px-40 py-16 md:pb-56 xl:pb-40 space-y-6 xl:grid xl:grid-cols-3 xl:gap-8">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
