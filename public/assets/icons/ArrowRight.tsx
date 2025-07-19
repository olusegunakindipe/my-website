interface IProps {
  stroke?: string;
}

export const ArrowRight = ({ stroke = "white" }: IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 100 24"
    strokeWidth={4}
    stroke="white"
    className="w-6 h-2"
  >
    <line x1="0" y1="12" x2="90" y2="12" stroke="white" />
    <polyline points="85,6 95,12 85,18" fill="none" stroke={stroke} />
  </svg>
);
