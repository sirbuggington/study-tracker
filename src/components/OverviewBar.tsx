import { useMemo } from 'react';
import type { StudyPlan } from '../data/types';
import { useOverallStats } from '../hooks/useStats';
import { ProgressBar } from './ProgressBar';

interface Props {
  plan: StudyPlan;
  progress: ProgressState;
}

function formatHours(h: number): string {
  if (h === 0) return '0h';
  const whole = Math.floor(h);
  const frac = h - whole;
  if (frac === 0) return `${whole}h`;
  if (frac <= 0.25) return `${whole}h`;
  if (frac <= 0.75) return `${whole}.5h`;
  return `${whole + 1}h`;
}

function getPaceMessage(plan: StudyPlan, hoursCompleted: number): string | null {
  const start = new Date(plan.startDate + 'T00:00:00');
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  // Before plan starts
  if (today < start) return null;

  // Calculate working days elapsed (exclude Sundays - days 6 and 13)
  const msPerDay = 86400000;
  const daysElapsed = Math.floor((today.getTime() - start.getTime()) / msPerDay);

  // Count working days up to now
  const dayDates: { date: Date; isRest: boolean }[] = [];
  for (const week of plan.weeks) {
    for (const day of week.days) {
      dayDates.push({ date: new Date(start.getTime() + (day.dayNumber - 1) * msPerDay), isRest: day.isRestDay });
    }
  }
  const workingDaysElapsed = dayDates.filter(d => !d.isRest && d.date <= today).length;
  const totalWorkingDays = dayDates.filter(d => !d.isRest).length;

  if (workingDaysElapsed === 0) return null;

  // Expected hours: ~9hrs/working day average
  const expectedHoursPerDay = 9;
  const expectedHours = workingDaysElapsed * expectedHoursPerDay;
  const diff = hoursCompleted - expectedHours;

  if (daysElapsed > 18) {
    return hoursCompleted > 0 ? 'Plan period complete' : null;
  }

  const absDiff = Math.abs(diff);
  if (absDiff < 2) return `On track — Day ${Math.min(workingDaysElapsed + 1, totalWorkingDays)} of ${totalWorkingDays}`;
  if (diff > 0) return `${formatHours(absDiff)} ahead of schedule`;
  return `${formatHours(absDiff)} behind — consider extending today's session`;
}

export function OverviewBar({ plan, progress }: Props) {
  const stats = useOverallStats(plan, progress);
  const paceMessage = useMemo(() => getPaceMessage(plan, stats.hours.done), [plan, stats.hours.done]);

  return (
    <div className="overview-bar">
      <div className="overview-stats">
        <div className="stat-group">
          <span className="stat-label">Overall</span>
          <span className="stat-value">{stats.all.done}/{stats.all.total}</span>
        </div>
        <div className="stat-group">
          <span className="stat-label">Must</span>
          <span className="stat-value must-color">{stats.must.done}/{stats.must.total}</span>
        </div>
        <div className="stat-group">
          <span className="stat-label">Nice</span>
          <span className="stat-value nice-color">{stats.nice.done}/{stats.nice.total}</span>
        </div>
      </div>
      <div className="hours-row">
        <span className="hours-remaining">{formatHours(stats.hours.remaining)} remaining</span>
        <span className="hours-detail">{formatHours(stats.hours.done)} of {formatHours(stats.hours.total)} completed</span>
      </div>
      {paceMessage && <div className="pace-message">{paceMessage}</div>}
      <ProgressBar pct={stats.must.pct} />
    </div>
  );
}
