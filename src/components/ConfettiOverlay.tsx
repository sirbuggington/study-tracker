import { useMemo } from 'react';

const COLORS = [
  'var(--blue)', 'var(--green)', 'var(--orange)',
  'var(--purple)', 'var(--red)', '#f472b6', '#facc15',
];

function makeConfetti() {
  return Array.from({ length: 50 }, () => ({
    x: `${Math.random() * 100}%`,
    w: `${8 + Math.random() * 6}px`,
    h: `${5 + Math.random() * 4}px`,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    duration: `${2 + Math.random() * 1.5}s`,
    delay: `${Math.random() * 0.6}s`,
    spin: `${600 + Math.random() * 400}deg`,
  }));
}

interface Props {
  dayTitle?: string;
}

export function ConfettiOverlay({ dayTitle }: Props) {
  const pieces = useMemo(makeConfetti, []);

  return (
    <div className="confetti-overlay">
      {pieces.map((p, i) => (
        <span
          key={i}
          className="confetti-piece"
          style={{
            '--x': p.x,
            '--w': p.w,
            '--h': p.h,
            '--color': p.color,
            '--duration': p.duration,
            '--delay': p.delay,
            '--spin': p.spin,
          } as React.CSSProperties}
        />
      ))}
      <div className="confetti-banner">
        <span className="confetti-banner-text">
          {dayTitle ? `${dayTitle} Complete!` : 'Day Complete!'}
        </span>
      </div>
    </div>
  );
}
