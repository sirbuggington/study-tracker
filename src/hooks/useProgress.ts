import { useState, useCallback } from 'react';
import type { ProgressState } from '../data/types';

const STORAGE_KEY = 'hamilton-study-tracker-progress';

function loadProgress(): ProgressState {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function saveProgress(state: ProgressState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage may be unavailable (private browsing, storage full)
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressState>(loadProgress);

  const toggle = useCallback((taskId: string) => {
    setProgress(prev => {
      const next = { ...prev };
      if (next[taskId]) {
        delete next[taskId];
      } else {
        next[taskId] = true;
      }
      saveProgress(next);
      return next;
    });
  }, []);

  const isComplete = useCallback((taskId: string) => {
    return !!progress[taskId];
  }, [progress]);

  const resetAll = useCallback(() => {
    const empty = {};
    saveProgress(empty);
    setProgress(empty);
  }, []);

  const exportData = useCallback(() => {
    return JSON.stringify(progress, null, 2);
  }, [progress]);

  const importData = useCallback((json: string) => {
    try {
      const parsed = JSON.parse(json);
      if (typeof parsed === 'object' && parsed !== null) {
        saveProgress(parsed);
        setProgress(parsed);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }, []);

  return { progress, toggle, isComplete, resetAll, exportData, importData };
}
