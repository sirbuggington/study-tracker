import type { TaskItem } from '../data/types';

interface Props {
  task: TaskItem;
  checked: boolean;
  onToggle: (id: string) => void;
  type: 'must' | 'nice';
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
    </label>
  );
}
