import { useSelector } from 'react-redux';

import type { RootState } from '../../../app/store';

export function useAlerts() {
  return useSelector((state: RootState) => state.alerts.items);
}
