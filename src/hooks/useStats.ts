import { useMemo } from 'react';
import type { DayData, WeekData, StudyPlan } from '../data/types';
import type { ProgressState } from '../data/types';

export interface Stats {
  must: { done: number; total: number; pct: number };
  nice: { done: number; total: number; pct: number };
  all: { done: number; total: number; pct: number };
}

function calcStats(
  mustIds: string[],
  niceIds: string[],
  progress: ProgressState
): Stats {
  const mustDone = mustIds.filter(id => progress[id]).length;
  const niceDone = niceIds.filter(id => progress[id]).length;
  const totalDone = mustDone + niceDone;
  const total = mustIds.length + niceIds.length;
  return {
    must: { done: mustDone, total: mustIds.length, pct: mustIds.length ? Math.round((mustDone / mustIds.length) * 100) : 100 },
    nice: { done: niceDone, total: niceIds.length, pct: niceIds.length ? Math.round((niceDone / niceIds.length) * 100) : 100 },
    all: { done: totalDone, total, pct: total ? Math.round((totalDone / total) * 100) : 100 },
  };
}

export function useDayStats(day: DayData, progress: ProgressState): Stats {
  return useMemo(() => {
    if (day.isRestDay) return { must: { done: 0, total: 0, pct: 100 }, nice: { done: 0, total: 0, pct: 100 }, all: { done: 0, total: 0, pct: 100 } };
    const mustIds = day.mustFinish.map(t => t.id);
    const niceIds = day.niceToFinish.map(t => t.id);
    return calcStats(mustIds, niceIds, progress);
  }, [day, progress]);
}

export function useWeekStats(week: WeekData, progress: ProgressState): Stats {
  return useMemo(() => {
    const mustIds = week.days.flatMap(d => d.mustFinish.map(t => t.id));
    const niceIds = week.days.flatMap(d => d.niceToFinish.map(t => t.id));
    return calcStats(mustIds, niceIds, progress);
  }, [week, progress]);
}

export function useOverallStats(plan: StudyPlan, progress: ProgressState): Stats {
  return useMemo(() => {
    const mustIds = plan.weeks.flatMap(w => w.days.flatMap(d => d.mustFinish.map(t => t.id)));
    const niceIds = plan.weeks.flatMap(w => w.days.flatMap(d => d.niceToFinish.map(t => t.id)));
    return calcStats(mustIds, niceIds, progress);
  }, [plan, progress]);
}
