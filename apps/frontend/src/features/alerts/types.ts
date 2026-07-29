export type Severity = 'info' | 'warning' | 'critical';

export interface Alert {
  id: string;
  title: string;
  severity: Severity;
  message: string;
  timestamp: string;
  isNew?: boolean;
}
