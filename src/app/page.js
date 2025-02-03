import Image from "next/image";
import ImageSlideshow from "@/components/ImageSlideshow";
import Welcome from "@/components/Welcome";
import SmallTeam from "@/components/SmallTeam";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="w-full md:px-24 xl:px-40">
        <ImageSlideshow />
        <Welcome />
        <SmallTeam />
        <Featured />
      </div>
      <Footer />
    </>
  );
}
