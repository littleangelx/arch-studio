"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Button from "@/components/Button";
import Link from "next/link";

const MOBILE_SLIDES = [
  {
    image: "/assets/home/mobile/image-hero-paramour.jpg",
    title: "Project Paramour",
    description:
      "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
  },
  {
    image: "/assets/home/mobile/image-hero-seraph.jpg",
    title: "Seraph Station",
    description:
      "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
  },
  {
    image: "/assets/home/mobile/image-hero-federal.jpg",
    title: "Federal II Tower",
    description:
      "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
  },
  {
    image: "/assets/home/mobile/image-hero-trinity.jpg",
    title: "Trinity Bank Tower",
    description:
      "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
  },
];

const TABLET_SLIDES = [
  {
    image: "/assets/home/tablet/image-hero-paramour.jpg",
    title: "Project Paramour",
    description:
      "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
  },
  {
    image: "/assets/home/tablet/image-hero-seraph.jpg",
    title: "Seraph Station",
    description:
      "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
  },
  {
    image: "/assets/home/tablet/image-hero-federal.jpg",
    title: "Federal II Tower",
    description:
      "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
  },
  {
    image: "/assets/home/tablet/image-hero-trinity.jpg",
    title: "Trinity Bank Tower",
    description:
      "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
  },
];

const DESKTOP_SLIDES = [
  {
    image: "/assets/home/desktop/image-hero-paramour.jpg",
    title: "Project Paramour",
    description:
      "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
  },
  {
    image: "/assets/home/desktop/image-hero-seraph.jpg",
    title: "Seraph Station",
    description:
      "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
  },
  {
    image: "/assets/home/desktop/image-hero-federal.jpg",
    title: "Federal II Tower",
    description:
      "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
  },
  {
    image: "/assets/home/desktop/image-hero-trinity.jpg",
    title: "Trinity Bank Tower",
    description:
      "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
  },
];

const ImageSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="md:hidden relative w-full h-[35rem]">
        {MOBILE_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-start items-start text-white bg-black  bg-opacity-50 text-left px-8 mt-[7.25rem]">
              <h2 className="text-5xl font-bold">{slide.title}</h2>
              <p className="text-lg leading-6 font-medium mb-10">
                {slide.description}
              </p>
              <Link href="/portfolio">
                <Button>See Our Portfolio</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:block xl:hidden relative w-full h-[45rem]">
        {TABLET_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-start items-start text-white bg-black  bg-opacity-50 text-left px-16 mt-[7.25rem] md:mt-[11.5rem]">
              <h2 className="text-5xl md:text-[6rem] font-bold">
                {slide.title}
              </h2>
              <p className="text-lg leading-6 font-medium mb-10">
                {slide.description}
              </p>
              <Link href="/portfolio">
                <Button>See Our Portfolio</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden  xl:block relative w-full h-[45rem]">
        <img
          src={DESKTOP_SLIDES[currentIndex].image}
          alt={`Slide ${currentIndex}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-start items-start text-white bg-black  bg-opacity-50 text-left px-48 mt-48">
          <h2 className="text-5xl md:text-[6rem] font-bold">
            {DESKTOP_SLIDES[currentIndex].title}
          </h2>
          <p className="text-lg leading-6 font-medium mt-3 mb-10 w-[27rem]">
            {DESKTOP_SLIDES[currentIndex].description}
          </p>
          <Link href="/portfolio">
            <Button>See Our Portfolio</Button>
          </Link>
        </div>
        <div className="absolute flex bottom-0 -left-20">
          {Array.from({ length: DESKTOP_SLIDES.length }, (_, i) => i + 1).map(
            (index) => (
              <button
                key={index}
                className="w-20 h-20 font-bold text-lg"
                style={{
                  backgroundColor:
                    index === currentIndex + 1 ? "#1b1d23" : "#fff",
                  color: index === currentIndex + 1 ? "#fff" : "#7d828f",
                }}
                onClick={() => setCurrentIndex(index - 1)}
              >
                0{index}
              </button>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default ImageSlideshow;
