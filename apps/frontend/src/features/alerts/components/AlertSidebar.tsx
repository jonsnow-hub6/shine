import { Card, Collapse, Empty } from 'antd';

import { useAlerts } from '../hooks/useAlerts';
import './AlertSidebar.css';

export default function AlertSidebar() {
  const alerts = useAlerts();

  return (
    <Card title={`Alerts (${alerts.length})`} className="alert-card">
      <div className="alert-list-scroll">
        {alerts.length === 0 ? (
          <Empty description="No alerts" />
        ) : (
          <Collapse
            accordion
            bordered={false}
            items={alerts.map((alert) => ({
              key: alert.id,
              label: alert.title,
              children: <div>{alert.message}</div>,
            }))}
          />
        )}
      </div>
    </Card>
  );
}
