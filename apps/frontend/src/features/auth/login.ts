import { pb } from '../../services/pocketbase';
import type { UserRecord } from './types';

export async function login(email: string, password: string) {
  return await pb.collection('users').authWithPassword<UserRecord>(email, password);
}

export function logout() {
  pb.authStore.clear();
}

export function isAuthenticated() {
  return pb.authStore.isValid;
}
