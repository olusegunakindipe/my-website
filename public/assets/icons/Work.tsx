interface IProps {
  height: string;
  width: string;
  fill?: string;
}

export const Work = ({ height, width, fill }: IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
  >
    <path d="M1 13.5L7 19.5L11 15.5L13.5 18L22 9.5L18.5 6L10.5 14L7.5 11L1 13.5Z" />
  </svg>
);
