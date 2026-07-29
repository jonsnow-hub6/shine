import { Card, Empty, Flex } from 'antd';
import { useAppSelector } from '../../../../app/store';
import styles from './styles.module.css';
import { ActiveAlertCard } from './ActiveAlertCard';


export function ActiveAlerts() {
  const alerts = useAppSelector((state) => state.alerts.pending);

  return (
    <Card
      title={`Active Alerts (${alerts.length})`}
      style={{
        height: 'calc(100vh - 100px)',
        maxHeight: 'calc(100vh - 100px)',
        display: 'flex',
        flexDirection: 'column',
      }}
      styles={{
        body: {
          flex: 1,
          minHeight: 0,
          overflow: 'hidden',
          padding: 8,
        },
      }}
    >
      <div className={styles['alertList']}>
        {alerts.length === 0 ? (
          <Empty description="No active alerts" />
        ) : (
          <Flex vertical gap={12}>
            {alerts.map((alert) => <ActiveAlertCard key={alert.id} alert={alert} />)}
          </Flex>
        )}
      </div>
    </Card>
  );
}
