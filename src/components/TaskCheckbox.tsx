import { useState } from 'react';
import type { TaskItem } from '../data/types';
import { SparklesBurst } from './SparklesBurst';
import { triggerHaptic } from '../utils/haptic';

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
  const [showDetail, setShowDetail] = useState(false);
  const [showSparkles, setShowSparkles] = useState(false);

  const handleToggle = () => {
    if (!checked) {
      setShowSparkles(true);
      setTimeout(() => setShowSparkles(false), 600);
      triggerHaptic();
    }
    onToggle(task.id);
  };

  return (
    <div className={`task-wrapper ${checked ? 'task-done' : ''} task-${type} ${task.isQuiz ? 'task-quiz' : ''}`}>
      {showSparkles && <SparklesBurst />}
      <label className="task-item">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleToggle}
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
        {task.detail && (
          <button
            className="task-detail-btn"
            onClick={e => { e.preventDefault(); e.stopPropagation(); setShowDetail(!showDetail); }}
            aria-label="View details"
          >
            {showDetail ? 'Less' : 'More'}
          </button>
        )}
      </label>
      {showDetail && task.detail && (
        <div className="task-detail">
          {task.detail.split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      )}
    </div>
  );
}
