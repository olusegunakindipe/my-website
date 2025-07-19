import { ReactNode } from "react";
import { ArrowRight } from "../../../../public/assets/icons/ArrowRight";
import Button from "../button/Button";

interface IProps {
  heading: string;
  description: string;
  children?: ReactNode;
}
const Content = ({ heading, description, children }: IProps) => {
  return (
    <>
      <h6 className="text-gray-500 uppercase mb-4">{heading}</h6>
      <h2 className="font-bold text-2xl lg:text-4xl">{description}</h2>
      {children && ( // <Button className="w-full lg:w-auto flex mx-auto lg:mx-0 justify-center items-center gap-4 mt-4 mb-12">
        //   <span>{buttonText}</span> <ArrowRight />
        // </Button>
        <div>{children}</div>
      )}
    </>
  );
};

export default Content;
