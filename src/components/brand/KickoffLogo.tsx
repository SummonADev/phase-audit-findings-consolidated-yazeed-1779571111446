type Props = {
  size?: number;
  color?: string;
};

export default function KickoffLogo({ size = 32, color = '#22E39A' }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <circle cx="32" cy="32" r="5.5" fill={color} />
      <circle cx="32" cy="32" r="12" fill="none" stroke={color} strokeWidth="2" opacity="0.75" />
      <circle cx="32" cy="32" r="19" fill="none" stroke={color} strokeWidth="1.5" opacity="0.45" />
      <circle cx="32" cy="32" r="26" fill="none" stroke={color} strokeWidth="1" opacity="0.22" />
    </svg>
  );
}
