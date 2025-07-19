import Image from "next/image";
import Socials from "../components/social-icons/Socials";

const About = () => {
  return (
    <section id="about" className=" bg-[#17152f]">
      <div className="h-auto w-full gap-32 lg:gap-48 flex flex-col-reverse lg:flex-row max-w-7xl lg:pt-40 pt-20 pb-12 lg:pb-20 mx-auto lg:justify-between">
        <div className="lg:w-1/2 w-full">
          <div className="relative mx-auto w-96 h-96 md:w-[550px] md:h-[550px] rounded-full bg-gray-200 overflow-visible">
            <div className="absolute inset-0 rounded-full bg-white z-0"></div>
            <Image
              src="/assets/my-pics.png"
              alt="Profile picture"
              width={600}
              height={600}
              className="absolute -top-16 left-1/2 -translate-x-1/2 w-96 h-96 md:w-[600px] md:h-[600px] object-cover rounded-full shadow-2xl z-10 border-white"
            />
          </div>
        </div>
        <div className="lg:w-1/2 w-full px-4 lg:px-0">
          <h6 className="uppercase text-xl mb-4">About - Olusegun Akindipe</h6>
          <h3 className="text-3xl leading-10 mb-8">
            {`Get a website that will make a lasting impression on your
            audience!!!`}
          </h3>
          <p className="leading-8">
            {`The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.`}
          </p>
          <div className="pt-6 flex gap-4">
            <Socials />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
