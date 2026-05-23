type Props = {
  size?: number;
  className?: string;
};

export default function KickoffLogo({ size = 32, className }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill="#22E39A" />
      <path
        d="M9 8L9 24M9 16L16 10M9 16L16 22M16 10L23 16M16 22L23 16"
        stroke="#000"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
