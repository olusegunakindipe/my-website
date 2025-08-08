import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  description: string;
  imageSrc: string;
  name: string;
  company: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  description,
  imageSrc,
  name,
  company,
}) => {
  return (
    <div
      className="border border-gray-200 p-8 rounded-lg flex flex-col justify-between h-full
    hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer"
    >
      <div>
        <h5 className="mb-4 font-bold">{quote}</h5>
        <p className="text-gray-400 mb-4">{description}</p>
      </div>
      <div className="flex flex-row">
        <Image
          src={imageSrc}
          alt={name}
          width={50}
          height={50}
          className="border border-transparent rounded-full"
        />
        <div className="flex flex-col pl-4">
          <h6 className="font-semibold">{name}</h6>
          <span className="text-sm text-gray-400">{company}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
