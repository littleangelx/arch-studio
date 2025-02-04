const Leader = ({ image, name, role }) => {
  return (
    <div>
      <img src={image} className="" />
      <p className="text-dark-blue text-[2rem] font-bold leading-10">{name}</p>
      <p className="text-dark-blue text-lg font-medium leading-6">{role}</p>
    </div>
  );
};

export default Leader;
