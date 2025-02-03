import Link from "next/link";
import Button from "./Button";

const SmallTeam = () => {
  return (
    <div className="w-full h-[35rem] relative">
      <img
        src="/assets/home/mobile/image-small-team.jpg"
        className="md:hidden h-full"
      />
      <img
        src="/assets/home/tablet/image-small-team.jpg"
        className="hidden md:block xl:hidden h-full"
      />
      <img
        src="/assets/home/desktop/image-small-team.jpg"
        className="hidden xl:block h-full"
      />

      <div className="absolute h-[35rem] inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start gap-6 text-white px-8 md:px-16 xl:px-48">
        <h2 className="text-5xl md:text-[4.5rem] font-bold leading-[3.25rem] md:leading-[4rem] xl:w-[28rem]">
          Small team, big ideas
        </h2>
        <Link href="/about-us">
          <Button>About Us</Button>
        </Link>
      </div>
    </div>
  );
};

export default SmallTeam;
