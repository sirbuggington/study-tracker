import { useMemo } from 'react';

const COLORS = ['var(--blue)', 'var(--green)', 'var(--orange)', 'var(--purple)'];

function makeParticles() {
  return Array.from({ length: 10 }, (_, i) => {
    const angle = (i / 10) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
    const dist = 14 + Math.random() * 12;
    return {
      tx: `${Math.cos(angle) * dist}px`,
      ty: `${Math.sin(angle) * dist}px`,
      color: COLORS[i % COLORS.length],
      delay: `${Math.random() * 80}ms`,
    };
  });
}

export function SparklesBurst() {
  const particles = useMemo(makeParticles, []);

  return (
    <div className="sparkle-container">
      {particles.map((p, i) => (
        <span
          key={i}
          className="sparkle-particle"
          style={{
            '--tx': p.tx,
            '--ty': p.ty,
            '--color': p.color,
            '--delay': p.delay,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
