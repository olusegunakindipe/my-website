interface IProps {
  height: string;
  width: string;
  fill?: string;
}

export const Software = ({ height, width, fill }: IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={fill}
    height={height}
    width={width}
  >
    <rect
      x="2.25"
      y="4.5"
      width="19.5"
      height="15"
      rx="2.25"
      ry="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 9.75l-2.25 2.25 2.25 2.25M15.75 9.75l2.25 2.25-2.25 2.25"
    />
  </svg>
);
