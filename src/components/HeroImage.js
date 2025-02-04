"use client";

import { useMediaQuery } from "react-responsive";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Line from "./Line";

const HeroImage = ({ page, heading, children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let imageSize;

  if (isMobile) {
    imageSize = "mobile";
  } else if (isDesktop) {
    imageSize = "desktop";
  } else {
    imageSize = "tablet";
  }

  return (
    <>
      <div className="relative">
        <div className="relative">
          <img
            src={`/assets/${page}/${imageSize}/image-hero.jpg`}
            className="h-60 md:h-[45rem] w-full xl:w-3/5 object-cover"
          />
          <div className="bg-white h-11 w-[90%] absolute bottom-0 md:hidden" />
        </div>
        <section className=" space-y-6 px-8  bg-white md:absolute md:bottom-0 md:w-[90%] md:right-0 md:pt-32 box-border xl:w-3/5 xl:flex xl:flex-col xl:justify-end xl:items-end xl:text-left xl:p-0 xl:pt-56 xl:pl-44">
          <h2 className="hidden md:block absolute -top-20 right-0 text-very-light-grey text-right text-[7.5rem] font-bold">
            {page === "about" ? "About" : "Contact"}
          </h2>
          <Heading>{heading}</Heading>
          <Paragraph>{children}</Paragraph>
          <Line />
        </section>
      </div>
    </>
  );
};

export default HeroImage;
