import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import HeroImage from "@/components/HeroImage";
import Map from "@/components/Map";

const Contact = () => {
  return (
    <>
      <div className="w-full md:px-24 xl:px-40">
        <HeroImage page="contact" heading="Tell us about your project">
          We’d love to hear more about your project. Please, leave a message
          below or give us a call. We have two offices, one in Texas and one in
          Tennessee. If you find yourself nearby, come say hello!
        </HeroImage>

        <section className="mt-5 md:mt-32 xl:mt-44 p-8 md:p-0 xl:grid xl:grid-cols-3">
          <Heading>Contact Details</Heading>

          <ContactDetails
            office="Main Office"
            mail="archone@mail.com"
            address="1892 Chenweth Drive TN"
            phone="123-456-3451"
          />
          <ContactDetails
            office="Office II"
            mail="archtwo@mail.com"
            address="3399 Wines Lane TX"
            phone="832-123-4321"
          />
        </section>
        <section id="map" className="my-20">
          <Map />
        </section>
        <section className="px-8 mb-20 xl:flex xl:gap-20">
          <div className="w-3/5 xl:w-1/3">
            <Heading>Connect with us</Heading>
          </div>
          <ContactForm />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
