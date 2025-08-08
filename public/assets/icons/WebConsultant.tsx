interface IProps {
  height: string;
  width: string;
  fill?: string;
}

export const WebConsultant = ({
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
      d="M7.5 14.25a4.5 4.5 0 116.75-6.75M12 19.5v-1.5m3 0v-1.5m-6 0v-1.5m7.5 1.5h3m-1.5-6h-3m-12 0h3m-1.5 6v3m0-3v-3"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 21v-6a2.25 2.25 0 012.25-2.25h7.5L21 19.5v1.5H5.25A2.25 2.25 0 013 21z"
    />
  </svg>
);
