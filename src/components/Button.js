import Image from "next/image";

const Button = ({ children, ...props }) => {
  return (
    <button
      className="bg-dark-blue h-[4.5rem] text-white text-lg font-bold flex gap-6 justify-center items-center px-6"
      {...props}
    >
      {children}
      <Image
        src="/assets/icons/icon-arrow-white.svg"
        alt="arrow"
        width={24}
        height={18}
      />
    </button>
  );
};

export default Button;
