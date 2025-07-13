import React from "react";

interface IProps {
  icon: any;
  heading: string;
  description: string;
}
const Detail = ({ icon, heading, description }: IProps) => {
  return (
    <>
      <div className="flex gap-6 items-center">
        <div className="border border-gray-500 rounded-lg p-4">{icon}</div>
        <div className="flex flex-col">
          <h5 className="mb-1 font-bold">{heading}</h5>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Detail;
