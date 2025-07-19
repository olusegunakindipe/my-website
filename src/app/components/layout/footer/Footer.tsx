import ContactForm from "../../form/ContactForm";
import { Location } from "../../../../../public/assets/icons/Location";
import { Mail } from "../../../../../public/assets/icons/Mail";
import { Phone } from "../../../../../public/assets/icons/Phone";
import Detail from "./Detail";

export default function Footer() {
  return (
    <>
      <footer id="contact" className="bg-[#17152f]">
        <div className=" mx-auto max-w-7xl container text-white p-4 flex flex-col items-center">
          <div className="flex flex-col gap-14 lg:gap-0 lg:flex-row w-full mt-12 lg:my-24">
            <div className="bg-gray-900 w-full lg:w-1/2 rounded-lg border border-gray-500 p-4">
              <h6 className="mb-2 uppercase text-gray-500">Get in Touch</h6>
              <h2 className="mb-3 font-bold text-3xl">
                {"Let's Discuss Projects"}
              </h2>
              <p className="mb-4 leading-6">
                Get in touch for any kind of software development. I am here to
                give the best experience and help you achieve your dreams
              </p>
              <ContactForm />
            </div>
            <div className="lg:!ml-auto">
              <h3 className="mb-8 text-2xl lg:text-3xl font-bold">
                {"Let's Discuss Your Project"}
              </h3>
              <div className="flex flex-col gap-6 ">
                <Detail
                  icon={<Mail height="24" width="24" />}
                  heading="Phone"
                  description="+44 7748120797"
                />
                <Detail
                  icon={<Phone height="24" width="24" />}
                  heading="Mail"
                  description="akinfergie@gmail.com"
                />
                <Detail
                  icon={<Location height="24" width="24" />}
                  heading="Location"
                  description="Birmingham, United Kingdom"
                />
              </div>
              <iframe
                title="Birmingham Map"
                className="w-full border h-72 lg:h-1/2 border-gray-500 rounded-lg p-2 mt-12 lg:mt-4 mb-12"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95807.09198933028!2d-1.96752435!3d52.4894719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc8e8bb0c56f%3A0xeed69d37b52a3b99!2sBirmingham!5e0!3m2!1sen!2suk!4v1710077123456"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </footer>
      <p className="flex flex-col items-center border-t-1 border-gray-500 py-2">
        © {new Date().getFullYear()} copyright all rights reserved
      </p>
    </>
  );
}
