import { useMemo } from 'react';

const COLORS = ['var(--blue)', 'var(--green)', 'var(--orange)', 'var(--purple)'];

function makeParticles() {
  return Array.from({ length: 16 }, (_, i) => {
    const angle = (i / 16) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
    const dist = 30 + Math.random() * 30;
    return {
      tx: `${Math.cos(angle) * dist}px`,
      ty: `${Math.sin(angle) * dist}px`,
      color: COLORS[i % COLORS.length],
      delay: `${Math.random() * 100}ms`,
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
