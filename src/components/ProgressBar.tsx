interface Props {
  pct: number;
  size?: 'sm' | 'md';
  color?: string;
}

export function ProgressBar({ pct, size = 'md', color }: Props) {
  const h = size === 'sm' ? '6px' : '10px';
  const bg = color || (pct === 100 ? 'var(--green)' : 'var(--blue)');
  return (
    <div className="progress-bar" style={{ height: h }}>
      <div
        className="progress-fill"
        style={{ width: `${pct}%`, background: bg }}
      />
    </div>
  );
}
