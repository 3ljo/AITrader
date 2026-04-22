export function PixelArrow({ size = 22, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="5.22852" y="17.3296" width="17.888" height="2.27149" transform="rotate(-40.2798 5.22852 17.3296)" />
      <rect x="7.75781" y="6.25635" width="2.27149" height="2.27149" transform="rotate(-40.2798 7.75781 6.25635)" />
      <rect x="10.959" y="6.52002" width="2.27149" height="2.27149" transform="rotate(-40.2798 10.959 6.52002)" />
      <rect x="14.1562" y="6.78516" width="2.27149" height="2.27149" transform="rotate(-40.2798 14.1562 6.78516)" />
      <rect x="17.0957" y="10.25" width="2.27149" height="2.27149" transform="rotate(-40.2798 17.0957 10.25)" />
      <rect x="16.832" y="13.4517" width="2.27149" height="2.27149" transform="rotate(-40.2798 16.832 13.4517)" />
      <rect x="16.5684" y="16.6538" width="2.27149" height="2.27149" transform="rotate(-40.2798 16.5684 16.6538)" />
    </svg>
  );
}
