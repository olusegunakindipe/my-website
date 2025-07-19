interface IProps {
  height: string;
  width: string;
  fill?: string;
}

export const Mail = ({ height, width, fill = "white" }: IProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className="inline-block"
    >
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 13 4 6.01V6h16ZM4 18V8.27l7.12 5.74a1 1 0 0 0 1.27 0L20 8.27V18H4Z" />
    </svg>
  );
};
