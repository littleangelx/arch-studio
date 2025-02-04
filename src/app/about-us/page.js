import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import HeroImage from "@/components/HeroImage";
import Leader from "@/components/Leader";
import Line from "@/components/Line";
import Paragraph from "@/components/Paragraph";

const AboutUsPage = () => {
  return (
    <>
      <div className="w-full md:px-24 xl:px-40">
        <HeroImage page="about" heading="Your team of professionals">
          Our small team of world-class professionals will work with you every
          step of the way. Strong relationships are at the core of everything we
          do. This extends to the relationship our projects have with their
          surroundings.
        </HeroImage>

        <section className="mt-5 md:mt-32 xl:mt-44 space-y-6 p-8 md:p-0 xl:flex xl:justify-between xl:items-end">
          <div className="space-y-6 xl:w-1/2">
            <Heading>Our Heritage</Heading>
            <Paragraph>
              Founded in 2007, we started as a trio of architects. Our
              complimentary skills and relentless attention to detail turned
              Arch into one of the most sought after boutique firms in the
              country.
            </Paragraph>
            <Paragraph>
              Speciliazing in Urban Design allowed us to focus on creating
              exceptional structures that live in harmony with their
              surroundings. We consider every detail from every surrounding
              element to inform our designs.{" "}
            </Paragraph>
            <Paragraph>
              Our small team of world-class professionals provides input on
              every project.
            </Paragraph>
          </div>
          <img
            src="/assets/about/desktop/image-heritage.jpg"
            className="hidden xl:block w-[40%]"
          />
        </section>
        <section className="mt-12 md:mt-32 xl:mt-44 mb-28 p-8 md:p-0 xl:flex xl:justify-between xl:items-start">
          <Heading>The Leaders</Heading>
          <div className="mt-14 xl:mt-0 space-y-20 md:grid md:grid-cols-2 md:space-y-0 md:gap-x-4 md:gap-y-20">
            <Leader
              image="/assets/about/desktop/avatar-jake.jpg"
              name="Jake Richards"
              role="Chief Architect"
            />
            <Leader
              image="/assets/about/desktop/avatar-thompson.jpg"
              name="Thompson Smith"
              role="Head of Finance"
            />
            <Leader
              image="/assets/about/desktop/avatar-jackson.jpg"
              name="Jackson Rourke"
              role="Lead Designer"
            />
            <Leader
              image="/assets/about/desktop/avatar-maria.jpg"
              name="Maria Simpson"
              role="Senior Architect"
            />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;
