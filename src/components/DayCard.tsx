import { useState } from 'react';
import type { DayData, ProgressState } from '../data/types';
import { useDayStats } from '../hooks/useStats';
import { ProgressBar } from './ProgressBar';
import { TaskCheckbox } from './TaskCheckbox';
import { ConfettiOverlay } from './ConfettiOverlay';

interface Props {
  day: DayData;
  progress: ProgressState;
  onToggle: (id: string) => void;
  isActive: boolean;
  defaultExpanded?: boolean;
  filter: string;
}

export function DayCard({ day, progress, onToggle, isActive, defaultExpanded = false, filter }: Props) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const [showConfetti, setShowConfetti] = useState(false);
  const stats = useDayStats(day, progress);

  const handleToggle = (taskId: string) => {
    const isCheckingOn = !progress[taskId];
    const wasComplete = stats.all.done === stats.all.total;
    if (isCheckingOn && !wasComplete && stats.all.done + 1 === stats.all.total) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3500);
    }
    onToggle(taskId);
  };

  if (day.isRestDay) {
    return (
      <div className={`day-card rest-day ${isActive ? 'active-day' : ''}`} id={day.id}>
        <div className="day-header" onClick={() => setExpanded(!expanded)}>
          <div className="day-header-left">
            <span className="day-badge rest">REST</span>
            <div>
              <div className="day-title">{day.weekday}, {day.date}</div>
              <div className="day-subtitle">{day.title}</div>
            </div>
          </div>
          <span className="chevron">{expanded ? '\u25B2' : '\u25BC'}</span>
        </div>
        {expanded && (
          <div className="day-body">
            <p className="proof-text">{day.endOfDayProof}</p>
          </div>
        )}
      </div>
    );
  }

  const mustTasks = day.mustFinish.filter(t => {
    if (filter === 'incomplete') return !progress[t.id];
    if (filter === 'complete') return !!progress[t.id];
    if (filter === 'nice') return false;
    return true;
  });

  const niceTasks = day.niceToFinish.filter(t => {
    if (filter === 'incomplete') return !progress[t.id];
    if (filter === 'complete') return !!progress[t.id];
    if (filter === 'must') return false;
    return true;
  });

  const dayComplete = stats.must.pct === 100;
  const hasVisibleTasks = mustTasks.length > 0 || niceTasks.length > 0;

  if (filter !== 'all' && !hasVisibleTasks) return null;

  return (
    <div className={`day-card ${isActive ? 'active-day' : ''} ${dayComplete ? 'day-complete' : ''}`} id={day.id}>
      {showConfetti && <ConfettiOverlay dayTitle={day.title} />}
      <div className="day-header" onClick={() => setExpanded(!expanded)}>
        <div className="day-header-left">
          <span className={`day-badge ${dayComplete ? 'done' : 'pending'}`}>
            {dayComplete ? '\u2713' : `D${day.dayNumber}`}
          </span>
          <div>
            <div className="day-title">{day.weekday}, {day.date}</div>
            <div className="day-subtitle">{day.title}</div>
          </div>
        </div>
        <div className="day-header-right">
          <span className="day-hours-badge">{stats.hours.remaining > 0 ? `${Math.round(stats.hours.remaining * 10) / 10}h left` : 'Done!'}</span>
          <span className="day-count">{stats.all.done}/{stats.all.total}</span>
          <span className="chevron">{expanded ? '\u25B2' : '\u25BC'}</span>
        </div>
      </div>

      <ProgressBar pct={stats.must.pct} size="sm" />

      {expanded && (
        <div className="day-body">
          {mustTasks.length > 0 && (
            <div className="task-section">
              <div className="task-section-header must-header">
                Must Finish
                <span className="task-section-count">{stats.must.done}/{stats.must.total}</span>
              </div>
              {mustTasks.map(task => (
                <TaskCheckbox
                  key={task.id}
                  task={task}
                  checked={!!progress[task.id]}
                  onToggle={handleToggle}
                  type="must"
                />
              ))}
            </div>
          )}

          {niceTasks.length > 0 && (
            <div className="task-section">
              <div className="task-section-header nice-header">
                Nice to Finish
                <span className="task-section-count">{stats.nice.done}/{stats.nice.total}</span>
              </div>
              {niceTasks.map(task => (
                <TaskCheckbox
                  key={task.id}
                  task={task}
                  checked={!!progress[task.id]}
                  onToggle={handleToggle}
                  type="nice"
                />
              ))}
            </div>
          )}

          <div className="proof-section">
            <div className="proof-label">End-of-Day Proof</div>
            <p className="proof-text">{day.endOfDayProof}</p>
          </div>
        </div>
      )}
    </div>
  );
}
