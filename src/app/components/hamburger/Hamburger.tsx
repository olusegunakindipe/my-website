interface IProps {
  bgColor: string;
}
const Hamburger = ({ bgColor = "bg-white" }: IProps) => {
  return (
    <div className="space-y-1 cursor-pointer border border-gray-600 rounded-lg p-3">
      <span className={`block w-6 h-0.5 ${bgColor}`}></span>
      <span className={`block w-6 h-0.5 ${bgColor}`}></span>
      <span className={`block w-6 h-0.5 ${bgColor}`}></span>
    </div>
  );
};

export default Hamburger;
