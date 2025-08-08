interface IProps {
  height: string;
  width: string;
  fill?: string;
}

export const Approach = ({ height, width, fill }: IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12h2a8 8 0 1 1 8 8v2c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 4a6 6 0 0 0-6 6h2a4 4 0 1 1 4 4v2a6 6 0 0 0 0-12zm0 4a2 2 0 1 0 0 4v-4z" />
  </svg>
);
