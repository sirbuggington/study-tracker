interface Props {
  pct: number;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  label?: string;
}

export function ProgressBar({ pct, size = 'md', color, label }: Props) {
  const h = size === 'sm' ? '6px' : size === 'lg' ? '32px' : '10px';
  const bg = color || (pct === 100 ? 'var(--green)' : 'var(--blue)');
  return (
    <div className="progress-bar" style={{ height: h }}>
      <div
        className="progress-fill"
        style={{ width: `${pct}%`, background: bg }}
      />
      {label && <span className="progress-label">{label}</span>}
    </div>
  );
}
