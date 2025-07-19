import { JSX } from "react";

interface IProps {
  icon: JSX.Element;
  heading: string;
  description: string;
  className?: string;
  listItems?: string[];
}
const Detail = ({
  icon,
  heading,
  description,
  className,
  listItems,
}: IProps) => {
  return (
    <div className={`flex items-start gap-6 ${className}`}>
      <div className="border border-gray-500 rounded-lg p-4">{icon}</div>
      <div className="flex flex-col">
        <h5 className="mb-1 font-bold">{heading}</h5>
        <p className="text-sm leading-6">{description}</p>
        {listItems && (
          <ul className="list-disc pl-5 mt-2 text-sm text-gray-500">
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Detail;
