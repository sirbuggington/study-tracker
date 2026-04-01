import { useState, useCallback, useEffect } from 'react';
import type { ProgressState } from '../data/types';

const STORAGE_KEY = 'hamilton-study-tracker-progress';
const API_URL = '/api/progress';

function loadLocal(): ProgressState {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function saveLocal(state: ProgressState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage may be unavailable
  }
}

async function fetchRemote(): Promise<ProgressState | null> {
  try {
    const res = await fetch(API_URL);
    if (res.ok) return await res.json();
    return null;
  } catch {
    return null;
  }
}

async function saveRemote(state: ProgressState) {
  try {
    await fetch(API_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state),
    });
  } catch {
    // API unavailable — localStorage still has the data
  }
}

function save(state: ProgressState) {
  saveLocal(state);
  saveRemote(state);
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressState>(loadLocal);

  // On mount, fetch from API and use it as source of truth
  useEffect(() => {
    fetchRemote().then(remote => {
      if (remote !== null) {
        setProgress(remote);
        saveLocal(remote);
      }
    });
  }, []);

  const toggle = useCallback((taskId: string) => {
    setProgress(prev => {
      const next = { ...prev };
      if (next[taskId]) {
        delete next[taskId];
      } else {
        next[taskId] = true;
      }
      save(next);
      return next;
    });
  }, []);

  const isComplete = useCallback((taskId: string) => {
    return !!progress[taskId];
  }, [progress]);

  const resetAll = useCallback(() => {
    const empty = {};
    save(empty);
    setProgress(empty);
  }, []);

  const exportData = useCallback(() => {
    return JSON.stringify(progress, null, 2);
  }, [progress]);

  const importData = useCallback((json: string) => {
    try {
      const parsed = JSON.parse(json);
      if (typeof parsed === 'object' && parsed !== null) {
        save(parsed);
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
