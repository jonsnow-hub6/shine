import { useEffect } from 'react';

import { pb } from '../../../services/pocketbase';

import { addAlert } from '../alertsSlice';
import type { Alert } from '../types';
import { useAppDispatch } from '../../../app/store';

export function useAlertRealtime() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = pb.collection('alerts').subscribe<Alert>('*', (event) => {
      if (event.action === 'create') {
        dispatch(addAlert({ ...event.record, isNew: true }));
      }
    });

    return () => {
      unsubscribe.then((fn) => fn());
    };
  }, [dispatch]);
}
