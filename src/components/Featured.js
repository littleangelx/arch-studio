"use client";

import { useMediaQuery } from "react-responsive";
import Project from "./Project";
import Button from "./Button";
import { useRouter } from "next/navigation";

const Featured = () => {
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

  const featuredProjects = [
    {
      image: `/assets/portfolio/${imageSize}/image-del-sol.jpg`,
      name: "Project Del Sol",
    },
    {
      image: `/assets/portfolio/${imageSize}/image-228b.jpg`,
      name: "228B Tower",
    },
    {
      image: `/assets/portfolio/${imageSize}/image-prototype.jpg`,
      name: "Le Prototype",
    },
  ];

  return (
    <div className="my-20 md:my-[12.5rem] px-8 md:px-0">
      <div className="flex justify-between items-center">
        <h3 className="text-dark-blue text-5xl md:text-[4.5rem] font-bold leading-[3.25rem] md:leading-[4rem]">
          Featured
        </h3>
        {!isMobile && (
          <Button onClick={() => router.push("/portfolio")}>See All</Button>
        )}
      </div>
      <div className="mt-16 space-y-8 xl:flex xl:space-x-8 w-full">
        {featuredProjects.map((project, index) => (
          <Project
            key={index}
            image={project.image}
            name={project.name}
            number={index + 1}
            isFeatured
          />
        ))}
        {isMobile && (
          <Button
            style={{ width: "100%" }}
            onClick={() => router.push("/portfolio")}
          >
            See All
          </Button>
        )}
      </div>
    </div>
  );
};

export default Featured;
