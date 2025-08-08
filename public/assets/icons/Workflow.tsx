interface IProps {
  height: string;
  width: string;
  fill?: string;
}

export const Workflow = ({ height, width, fill }: IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
  >
    <path d="M5 3h4v4H5V3zm0 14h4v4H5v-4zM15 3h4v4h-4V3zm0 14h4v4h-4v-4zM9 7h6v2H9V7zm3 2v6h-2v-6h2zm-3 6h6v2H9v-2z" />
  </svg>
);
