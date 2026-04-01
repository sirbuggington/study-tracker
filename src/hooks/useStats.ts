import { useMemo } from 'react';
import type { DayData, WeekData, StudyPlan, TaskItem } from '../data/types';
import type { ProgressState } from '../data/types';

export interface Stats {
  must: { done: number; total: number; pct: number };
  nice: { done: number; total: number; pct: number };
  all: { done: number; total: number; pct: number };
  hours: { done: number; remaining: number; total: number };
}

function calcStats(
  mustTasks: TaskItem[],
  niceTasks: TaskItem[],
  progress: ProgressState
): Stats {
  const mustDone = mustTasks.filter(t => progress[t.id]).length;
  const niceDone = niceTasks.filter(t => progress[t.id]).length;
  const totalDone = mustDone + niceDone;
  const total = mustTasks.length + niceTasks.length;

  const allTasks = [...mustTasks, ...niceTasks];
  const hoursDone = allTasks.filter(t => progress[t.id]).reduce((s, t) => s + t.hours, 0);
  const hoursTotal = allTasks.reduce((s, t) => s + t.hours, 0);

  return {
    must: { done: mustDone, total: mustTasks.length, pct: mustTasks.length ? Math.round((mustDone / mustTasks.length) * 100) : 100 },
    nice: { done: niceDone, total: niceTasks.length, pct: niceTasks.length ? Math.round((niceDone / niceTasks.length) * 100) : 100 },
    all: { done: totalDone, total, pct: total ? Math.round((totalDone / total) * 100) : 100 },
    hours: { done: hoursDone, remaining: hoursTotal - hoursDone, total: hoursTotal },
  };
}

export function useDayStats(day: DayData, progress: ProgressState): Stats {
  return useMemo(() => {
    if (day.isRestDay) return {
      must: { done: 0, total: 0, pct: 100 },
      nice: { done: 0, total: 0, pct: 100 },
      all: { done: 0, total: 0, pct: 100 },
      hours: { done: 0, remaining: 0, total: 0 },
    };
    return calcStats(day.mustFinish, day.niceToFinish, progress);
  }, [day, progress]);
}

export function useWeekStats(week: WeekData, progress: ProgressState): Stats {
  return useMemo(() => {
    const must = week.days.flatMap(d => d.mustFinish);
    const nice = week.days.flatMap(d => d.niceToFinish);
    return calcStats(must, nice, progress);
  }, [week, progress]);
}

export function useOverallStats(plan: StudyPlan, progress: ProgressState): Stats {
  return useMemo(() => {
    const must = plan.weeks.flatMap(w => w.days.flatMap(d => d.mustFinish));
    const nice = plan.weeks.flatMap(w => w.days.flatMap(d => d.niceToFinish));
    return calcStats(must, nice, progress);
  }, [plan, progress]);
}
