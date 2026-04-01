import type { TaskItem } from '../data/types';

interface Props {
  task: TaskItem;
  checked: boolean;
  onToggle: (id: string) => void;
  type: 'must' | 'nice';
}

function formatHours(h: number): string {
  if (h < 1) return `${Math.round(h * 60)}m`;
  const whole = Math.floor(h);
  const frac = h - whole;
  if (frac === 0) return `${whole}h`;
  return `${whole}h ${Math.round(frac * 60)}m`;
}

export function TaskCheckbox({ task, checked, onToggle, type }: Props) {
  return (
    <label className={`task-item ${checked ? 'task-done' : ''} task-${type}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onToggle(task.id)}
      />
      <span className="task-check" />
      <span className="task-text">
        {task.text}
        {task.link && (
          <>
            {' '}
            <a href={task.link} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
              Link
            </a>
          </>
        )}
      </span>
      <span className="task-hours">{formatHours(task.hours)}</span>
    </label>
  );
}
