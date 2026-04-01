import type { StudyPlan, ProgressState } from '../data/types';
import { useDayStats } from '../hooks/useStats';

interface Props {
  plan: StudyPlan;
  progress: ProgressState;
  activeDayId: string | null;
  onSelectDay: (dayId: string) => void;
  onClose: () => void;
  visible: boolean;
}

function DayLink({ day, progress, active, onClick }: {
  day: { id: string; dayNumber: number; weekday: string; date: string; title: string; isRestDay: boolean; mustFinish: any[]; niceToFinish: any[]; endOfDayProof: string; subtitle: string };
  progress: ProgressState;
  active: boolean;
  onClick: () => void;
}) {
  const stats = useDayStats(day, progress);
  const done = day.isRestDay || stats.must.pct === 100;

  return (
    <button className={`nav-day ${active ? 'nav-active' : ''} ${done ? 'nav-done' : ''}`} onClick={onClick}>
      <span className="nav-day-num">{day.isRestDay ? '\u00B7' : day.dayNumber}</span>
      <span className="nav-day-label">{day.isRestDay ? 'Rest' : day.title}</span>
      {!day.isRestDay && <span className="nav-day-pct">{stats.must.pct}%</span>}
    </button>
  );
}

export function Sidebar({ plan, progress, activeDayId, onSelectDay, onClose, visible }: Props) {
  return (
    <>
      {visible && <div className="sidebar-overlay" onClick={onClose} />}
      <nav className={`sidebar ${visible ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <h3>Navigation</h3>
          <button className="sidebar-close" onClick={onClose}>&times;</button>
        </div>
        {plan.weeks.map(week => (
          <div key={week.id} className="nav-week">
            <div className="nav-week-title">Week {week.weekNumber}</div>
            {week.days.map(day => (
              <DayLink
                key={day.id}
                day={day}
                progress={progress}
                active={day.id === activeDayId}
                onClick={() => { onSelectDay(day.id); onClose(); }}
              />
            ))}
          </div>
        ))}
      </nav>
    </>
  );
}
