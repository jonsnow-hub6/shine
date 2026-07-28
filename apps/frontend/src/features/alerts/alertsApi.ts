import { pb } from '../../services/pocketbase';
import type { Alert } from './types';

export async function fetchAlerts() {
  const result = await pb.collection('alerts').getList<Alert>(1, 100, {
    sort: '-created',
  });

  return result.items;
}
