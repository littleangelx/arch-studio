const Heading = ({ children }) => {
  return (
    <h2 className="text-dark-blue text-5xl md:text-[4.5rem] font-bold leading-[3.25rem] md:leading-[4rem]">
      {children}
    </h2>
  );
};

export default Heading;
