import { ReactNode } from "react";

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
      {children && <div>{children}</div>}
    </>
  );
};

export default Content;
