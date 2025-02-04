import Line from "./Line";

const Welcome = () => {
  return (
    <div className="px-8 md:px-0 mb-28 md:mb-[14.5rem]">
      <Line />
      <div className="hidden md:block mt-10 relative top-12 xl:top-4 z-10">
        <h1 className="text-very-light-grey text-[7.5rem] xl:text-[15.625rem] font-bold leading-[12.5rem] z-10">
          Welcome
        </h1>
      </div>
      <div className=" z-20 xl:flex justify-between xl:ml-48">
        <div className="space-y-6 md:space-y-10 xl:w-[27.8rem]">
          <h2 className="text-dark-blue text-5xl md:text-[4.5rem] font-bold leading-[3.25rem] md:leading-[4rem] z-20">
            Welcome to Arch Studio
          </h2>
          <p className="text-dark-grey text-lg leading-6 font-medium">
            We have a unique network and skillset to help bring your projects to
            life. Our small team of highly skilled individuals combined with our
            large network put us in a strong position to deliver exceptional
            results.
          </p>
          <p className="text-dark-grey text-lg leading-6 font-medium">
            Over the past 10 years, we have worked on all kinds of projects.
            From stations to high-rise buildings, we create spaces that inspire
            and delight.
          </p>
          <p className="text-dark-grey text-lg leading-6 font-medium">
            We work closely with our clients so that we understand the
            intricacies of each project. This allows us to work in harmony the
            surrounding area to create truly stunning projects that will stand
            the test of time.
          </p>
        </div>
        <img
          className="hidden xl:block"
          src="/assets/home/desktop/image-welcome.jpg"
          alt="image of a building"
        />
      </div>
    </div>
  );
};

export default Welcome;
