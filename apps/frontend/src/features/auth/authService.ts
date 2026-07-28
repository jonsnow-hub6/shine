import { pb } from '../../services/pocketbase';

const AUTO_EMAIL = 'user@local.dev';
const AUTO_PASSWORD = 'Password1!';

export async function initializeAuth() {
  if (pb.authStore.isValid) {
    return;
  }

  await pb.collection('users').authWithPassword(AUTO_EMAIL, AUTO_PASSWORD);
}

export function logout() {
  pb.authStore.clear();
}

export function isAuthenticated() {
  return pb.authStore.isValid;
}
