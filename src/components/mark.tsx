export function AltyevaMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 60"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(30,30)">
        <path
          d="M0 -25 C1.7 -10, 8 -3.3, 23 -1.7 C8 0, 1.7 6.5, 0 21 C-1.7 6.5, -8 0, -23 -1.7 C-8 -3.3, -1.7 -10, 0 -25 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M0 -11 C0.8 -5.5, 4 -2.5, 10 -1.7 C4 -0.8, 0.8 2.5, 0 8 C-0.8 2.5, -4 -0.8, -10 -1.7 C-4 -2.5, -0.8 -5.5, 0 -11 Z"
          fill="currentColor"
          opacity="0.45"
        />
      </g>
    </svg>
  );
}
