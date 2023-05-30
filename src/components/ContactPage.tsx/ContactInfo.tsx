import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-8 2xl:min-w-[50%]">
      <h2 className="max-w-[400px] text-5xl font-bold">
        Need additional information?
      </h2>
      <p className="max-w-[250px] text-sm text-gray-500">
        We offers a big range of vehicles for all your driving needs. We have
        the perfect car to meet your needs.
      </p>

      <div className="flex flex-col gap-4 text-xl">
        <div className="flex items-center gap-2">
          <BsTelephoneFill size={25} />
          (123) 456-7890
        </div>
        <div className="flex items-center gap-2">
          <MdEmail size={25} />
          carrental@gmail.com
        </div>
        <div className="flex items-center gap-2">
          <MdLocationOn size={25} />
          Frankfurt, Germany
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
