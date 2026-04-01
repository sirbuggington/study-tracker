import { useState } from 'react';
import type { WeekData, ProgressState } from '../data/types';
import { useWeekStats } from '../hooks/useStats';
import { ProgressBar } from './ProgressBar';
import { DayCard } from './DayCard';

interface Props {
  week: WeekData;
  progress: ProgressState;
  onToggle: (id: string) => void;
  activeDayId: string | null;
  filter: string;
  search: string;
}

export function WeekSection({ week, progress, onToggle, activeDayId, filter, search }: Props) {
  const [expanded, setExpanded] = useState(true);
  const stats = useWeekStats(week, progress);

  const filteredDays = week.days.filter(day => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      day.title.toLowerCase().includes(q) ||
      day.mustFinish.some(t => t.text.toLowerCase().includes(q)) ||
      day.niceToFinish.some(t => t.text.toLowerCase().includes(q))
    );
  });

  if (search && filteredDays.length === 0) return null;

  return (
    <section className="week-section">
      <div className="week-header" onClick={() => setExpanded(!expanded)}>
        <div>
          <h2 className="week-title">{week.title}</h2>
          <p className="week-subtitle">{week.subtitle}</p>
        </div>
        <div className="week-header-right">
          <span className="week-pct">{stats.must.pct}%</span>
          <span className="chevron">{expanded ? '\u25B2' : '\u25BC'}</span>
        </div>
      </div>
      <ProgressBar pct={stats.must.pct} />

      {expanded && (
        <div className="week-days">
          {filteredDays.map(day => (
            <DayCard
              key={day.id}
              day={day}
              progress={progress}
              onToggle={onToggle}
              isActive={day.id === activeDayId}
              defaultExpanded={day.id === activeDayId}
              filter={filter}
            />
          ))}
        </div>
      )}
    </section>
  );
}
