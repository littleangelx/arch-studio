"use client";

import Link from "next/link";
import Button from "./Button";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="w-full h-[28rem] md:h-[7.5rem] xl:h-[12.5rem] xl:px-40">
      <div className="bg-very-light-grey h-[24rem] xl:h-[12.5rem] absolute bottom-0 w-full md:w-4/5 xl:w-[70%] md:h-[7.5rem]">
        <div className="w-full absolute -top-[60px] md:bottom-0 md:top-0 flex flex-col md:flex-row items-center gap-8 px-16 md:px-0">
          <img
            src="/assets/mobile-footer-logo.png"
            className="w-[120px] h-[120px] xl:w-[12.5rem] xl:h-[12.5rem] xl:mr-20"
            alt="Arch Studio Logo"
            onClick={() => router.push("/")}
          />
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 text-center text-med-grey text-lg font-bold">
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/contact-us">Contact</Link>
          </div>
          <div className="w-full md:hidden">
            <Button
              style={{ width: "100%" }}
              onClick={() => router.push("/portfolio")}
            >
              See Our Portfolio
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute right-0 xl:right-32 md:w-[15.75rem] mt-6 xl:mt-16">
        <Button
          style={{ width: "16rem" }}
          onClick={() => router.push("/portfolio")}
        >
          See Our Portfolio
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
