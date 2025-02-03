import Link from "next/link";

const Project = ({ image, name, number, isFeatured = false, ...props }) => {
  return (
    <div className="relative xl:h-[35rem] xl:self-end">
      <Link href="/portfolio">
        <img src={image} className="w-full h-60 xl:h-[35rem] object-cover" />
        <div
          className="absolute inset-0 flex xl:flex-col-reverse justify-between items-center xl:items-end text-white p-6 md:pl-10 md:pr-6 xl:pr-0 md:pt-8 md:pb-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0.01%, rgba(0, 0, 0, 0.50) 100%)",
          }}
        >
          <div className="md:self-end xl:self-start">
            <h4 className="text-[2rem] font-bold leading-10 mt-40 md:mt-0">
              {name}
            </h4>
            {isFeatured && (
              <p className="text-lg leading-6 font-medium">View All Projects</p>
            )}
          </div>
          <span className="hidden md:block text-white/50 text-right text-[15.625rem] leading-[12rem] font-bold">
            {number}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Project;
