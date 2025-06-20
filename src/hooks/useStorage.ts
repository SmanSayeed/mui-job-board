import { useCallback } from 'react';

export function useStorage(storage?: Storage) {
  // SSR-safe: only use localStorage if window is defined
  const isBrowser = typeof window !== "undefined";
  const actualStorage = storage || (isBrowser ? window.localStorage : undefined);

  const get = useCallback((key: string) => {
    if (!actualStorage) return null;
    try {
      const value = actualStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch {
      return null;
    }
  }, [actualStorage]);

  const set = useCallback((key: string, value: any) => {
    if (!actualStorage) return;
    try {
      actualStorage.setItem(key, JSON.stringify(value));
    } catch {}
  }, [actualStorage]);

  const remove = useCallback((key: string) => {
    if (!actualStorage) return;
    try {
      actualStorage.removeItem(key);
    } catch {}
  }, [actualStorage]);

  return { get, set, remove };
} 