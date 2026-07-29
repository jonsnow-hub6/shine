import { Tag } from 'antd';
import type { Severity } from '../../types';

export function SeverityTag({ severity }: { severity: Severity }) {
  const color = {
    critical: 'volcano',
    warning: 'orange',
    info: 'blue',
  }[severity];

  return <Tag color={color}>{severity}</Tag>;
}
