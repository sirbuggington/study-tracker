import { useState, useCallback } from 'react';
import { studyPlan } from './data/studyPlan';
import { useProgress } from './hooks/useProgress';
import { OverviewBar } from './components/OverviewBar';
import { WeekSection } from './components/WeekSection';
import { Sidebar } from './components/Sidebar';
import { SettingsModal } from './components/SettingsModal';
import { CourseReference } from './components/CourseReference';

type FilterType = 'all' | 'incomplete' | 'complete' | 'must' | 'nice';

function getTodayDayId(): string | null {
  const now = new Date();
  const dayMap: Record<string, string> = {
    '2026-03-31': 'day-1',
    '2026-04-01': 'day-2',
    '2026-04-02': 'day-3',
    '2026-04-03': 'day-4',
    '2026-04-04': 'day-5',
    '2026-04-05': 'day-6',
    '2026-04-06': 'day-7',
    '2026-04-07': 'day-8',
    '2026-04-08': 'day-9',
    '2026-04-09': 'day-10',
    '2026-04-10': 'day-11',
    '2026-04-11': 'day-12',
    '2026-04-12': 'day-13',
    '2026-04-13': 'day-14',
    '2026-04-14': 'day-15',
    '2026-04-15': 'day-16',
    '2026-04-16': 'day-17-19',
    '2026-04-17': 'day-17-19',
    '2026-04-18': 'day-17-19',
  };
  const key = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  return dayMap[key] || null;
}

export default function App() {
  const { progress, toggle, exportData, importData, resetAll } = useProgress();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [filter, setFilter] = useState<FilterType>('all');
  const [search, setSearch] = useState('');
  const [activeDayId, setActiveDayId] = useState<string | null>(getTodayDayId);

  const handleSelectDay = useCallback((dayId: string) => {
    setActiveDayId(dayId);
    setTimeout(() => {
      document.getElementById(dayId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }, []);

  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'incomplete', label: 'To Do' },
    { key: 'complete', label: 'Done' },
    { key: 'must', label: 'Must' },
    { key: 'nice', label: 'Nice' },
  ];

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-left">
          <button className="icon-btn" onClick={() => setSidebarOpen(true)} aria-label="Open navigation">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
          </button>
          <div>
            <h1 className="app-title">Study Tracker</h1>
            <p className="app-subtitle">Hamilton County IT — App Developer</p>
          </div>
        </div>
        <button className="icon-btn" onClick={() => setSettingsOpen(true)} aria-label="Settings">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
        </button>
      </header>

      <OverviewBar plan={studyPlan} progress={progress} />

      <div className="toolbar">
        <div className="filter-pills">
          {filters.map(f => (
            <button
              key={f.key}
              className={`pill ${filter === f.key ? 'pill-active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <input
          type="search"
          className="search-input"
          placeholder="Search tasks..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <main className="main-content">
        {studyPlan.weeks.map(week => (
          <WeekSection
            key={week.id}
            week={week}
            progress={progress}
            onToggle={toggle}
            activeDayId={activeDayId}
            filter={filter}
            search={search}
          />
        ))}

        <CourseReference courses={studyPlan.courseReference} />

        <div className="completion-banner">
          <p className="completion-text">"{studyPlan.completionCriteria}"</p>
        </div>
      </main>

      <Sidebar
        plan={studyPlan}
        progress={progress}
        activeDayId={activeDayId}
        onSelectDay={handleSelectDay}
        onClose={() => setSidebarOpen(false)}
        visible={sidebarOpen}
      />

      {settingsOpen && (
        <SettingsModal
          onExport={exportData}
          onImport={importData}
          onReset={resetAll}
          onClose={() => setSettingsOpen(false)}
        />
      )}
    </div>
  );
}
