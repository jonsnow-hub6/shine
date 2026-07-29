import { Card, theme } from 'antd';
import type { Alert } from '../../types';
import { SeverityTag } from './SeverityTag';

export function AlertCard({ alert }: { alert: Alert }) {
  const { token } = theme.useToken();

  return (
    <Card
      title={alert.title}
      style={{
        background: token.colorBgContainer,
        border: `1px solid ${token.colorBorder}`,
        boxShadow: token.boxShadowSecondary,
      }}
    >
      <SeverityTag severity={alert.severity} />

      <p>{alert.message}</p>

      <div>
        Time:
        {alert.timestamp}
      </div>
    </Card>
  );
}
