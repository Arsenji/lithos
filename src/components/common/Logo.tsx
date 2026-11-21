const beads: { cx: number; cy: number; r: number }[] = [
  { cx: 90.7, cy: 27.4, r: 7.1 },
  { cx: 72.8, cy: 33.5, r: 5.2 },
  { cx: 56.8, cy: 43.5, r: 5.2 },
  { cx: 43.6, cy: 56.8, r: 7.1 },
  { cx: 33.5, cy: 72.8, r: 5.2 },
  { cx: 27.4, cy: 90.6, r: 5.2 },
  { cx: 25.2, cy: 109.6, r: 7.1 },
  { cx: 27.4, cy: 128.4, r: 5.2 },
  { cx: 33.5, cy: 146.2, r: 5.2 },
  { cx: 43.6, cy: 162.1, r: 7.1 },
  { cx: 56.8, cy: 175.4, r: 5.2 },
  { cx: 72.8, cy: 185.5, r: 5.2 },
  { cx: 114.4, cy: 114.4, r: 5.2 },
  { cx: 132.2, cy: 120.5, r: 5.2 },
  { cx: 148.1, cy: 130.5, r: 7.1 },
  { cx: 161.5, cy: 143.8, r: 5.2 },
  { cx: 171.5, cy: 159.8, r: 5.2 },
  { cx: 177.6, cy: 177.7, r: 7.1 },
  { cx: 179.8, cy: 196.5, r: 5.2 },
  { cx: 177.6, cy: 215.1, r: 5.2 },
];

export function Logo({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 228" className={className} aria-hidden="true">
      {beads.map((bead) => (
        <circle key={`${bead.cx}-${bead.cy}`} cx={bead.cx} cy={bead.cy} r={bead.r} fill="#F2EDE4" />
      ))}
      <ellipse cx="109.5" cy="193.8" rx="18.9" ry="12.4" fill="#BFA77E" />
    </svg>
  );
}
