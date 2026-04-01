import type { StudyPlan, ProgressState } from '../data/types';
import { useOverallStats } from '../hooks/useStats';
import { ProgressBar } from './ProgressBar';

interface Props {
  plan: StudyPlan;
  progress: ProgressState;
}

export function OverviewBar({ plan, progress }: Props) {
  const stats = useOverallStats(plan, progress);

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
      <ProgressBar pct={stats.must.pct} />
    </div>
  );
}
