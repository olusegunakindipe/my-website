interface IProps {
  height: string;
  width: string;
  fill?: string;
}

export const Phone = ({ height, width, fill = "white" }: IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    viewBox="0 0 24 24"
    height={height}
    width={width}
  >
    <path d="M6.62 10.79a15.464 15.464 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.21 11.72 11.72 0 0 0 3.69.59 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A16 16 0 0 1 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.72 11.72 0 0 0 .59 3.69 1 1 0 0 1-.21 1.11l-2.2 2.2Z" />
  </svg>
);
