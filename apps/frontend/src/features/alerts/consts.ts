import styles from './alertAnimations.module.css';
import type { Severity } from './types';

export const ALERT_SEVERITY_CONFIG: Record<
  Severity,
  { color: string; tag: string; label: string; className: string }
> = {
  critical: {
    color: '#ff4d4f',
    tag: 'red',
    label: 'Critical',
    className: styles['criticalAnimation'] || '',
  },

  warning: {
    color: '#f5b700',
    tag: 'gold',
    label: 'Warning',
    className: styles['warningAnimation'] || '',
  },

  info: {
    color: '#1677ff',
    tag: 'blue',
    label: 'Info',
    className: '',
  },
};
