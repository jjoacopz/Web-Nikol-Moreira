function Logo({ className, color = 'currentColor' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 104 100"
      role="img"
      aria-label="Nikol Moreira"
    >
      <path
        d="M14,90 L14,10 L52,90 L52,10 L71,55 L90,10 L90,90"
        fill="none"
        stroke={color}
        strokeWidth="15"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Logo;
