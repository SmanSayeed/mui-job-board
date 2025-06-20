import { useCallback } from 'react';

export function useStorage(storage: Storage = localStorage) {
  const get = useCallback((key: string) => {
    try {
      const value = storage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch {
      return null;
    }
  }, [storage]);

  const set = useCallback((key: string, value: any) => {
    try {
      storage.setItem(key, JSON.stringify(value));
    } catch {}
  }, [storage]);

  const remove = useCallback((key: string) => {
    try {
      storage.removeItem(key);
    } catch {}
  }, [storage]);

  return { get, set, remove };
} 