interface IProps {
  height: string;
  width: string;
  fill?: string;
}

export const AcademicResearcher = ({
  height,
  width,
  fill = "currentColor",
}: IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={fill}
    height={height}
    width={width}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 20.25c4.97 0 9-3.582 9-8S16.97 4.25 12 4.25 3 7.832 3 12.25s4.03 8 9 8z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l3 3" />
    <circle
      cx="15"
      cy="15"
      r="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
