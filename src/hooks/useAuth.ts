import { useCallback } from 'react';
import { useStorage } from './useStorage';

export type UserRole = 'user' | 'recruiter';
export interface AuthUser {
  name: string;
  email: string;
  role: UserRole;
}

const DEMO_USERS: AuthUser[] = [
  { name: 'Jhon Doe', email: 'user@gmail.com', role: 'user' },
  { name: 'Adam Smith', email: 'recruiter@gmail.com', role: 'recruiter' },
];
const DEMO_PASSWORD = 'password';
const AUTH_KEY = 'auth_user';

export function useAuth() {
  const storage = useStorage();

  const getUser = useCallback((): AuthUser | null => {
    return storage.get(AUTH_KEY);
  }, [storage]);

  const login = useCallback((email: string, password: string): AuthUser | null => {
    const user = DEMO_USERS.find(u => u.email === email);
    if (user && password === DEMO_PASSWORD) {
      storage.set(AUTH_KEY, user);
      return user;
    }
    return null;
  }, [storage]);

  const logout = useCallback(() => {
    storage.remove(AUTH_KEY);
  }, [storage]);

  return { getUser, login, logout };
} 