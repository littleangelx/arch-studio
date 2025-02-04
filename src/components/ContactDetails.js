import Link from "next/link";
import Paragraph from "./Paragraph";

const ContactDetails = ({ office, mail, address, phone }) => {
  return (
    <div className="mt-10 md:flex justify-between items-end xl:block xl:mt-0">
      <div>
        <h4 className="text-lg text-dark-grey font-bold">{office}</h4>
        <div className="mt-4 mb-8 md:mb-0 xl:mb-16">
          <Paragraph>Mail: {mail}</Paragraph>
          <Paragraph>Address: {address}</Paragraph>
          <Paragraph>Phone: {phone}</Paragraph>
        </div>
      </div>
      <Link href="#map" className="flex gap-12">
        <h4 className="text-dark-blue text-lg font-bold">View on Map</h4>
        <img
          src="/assets/icons/icon-arrow.svg"
          className="w-6 object-contain"
        />
      </Link>
    </div>
  );
};

export default ContactDetails;
