import React from "react";
import Detail from "../components/layout/footer/Detail";
import Content from "../components/content/Content";
import { detailItems } from "../data";

const Services = () => {
  return (
    <section id="services" className="pt-20 pb-12">
      <div className="h-auto gap-4 lg:gap-28 max-w-7xl flex flex-col lg:flex-row container text-black mx-auto">
        <div className="w-full lg:w-1/2 px-8 xl:px-0">
          <Content
            heading="Services"
            description="Get a powerful website that delivers results with an all-in-one
            solution"
          />
        </div>
        <div className="flex flex-col lg:gap-8 gap-6 w-full lg:w-1/2 px-8 xl:px-0 mt-4 lg:mt-0 ">
          {detailItems.map((item, index) => (
            <Detail
              key={index}
              icon={item.icon}
              heading={item.heading}
              description={item.description}
              className="border border-gray-300 p-4 lg:p-8 rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
