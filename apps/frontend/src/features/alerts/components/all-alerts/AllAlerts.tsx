import { Card, Empty, Flex } from 'antd';
import styles from './styles.module.css';
import { AlertCard } from './AlertCard';
import { useAppSelector } from '../../../../app/store';

export function AllAlerts() {
  const alerts = useAppSelector((state) => state.alerts.items);

  return (
    <Card
      title={`All Alerts (${alerts.length})`}
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
          <Empty description="No alerts yet" />
        ) : (
          <Flex vertical gap={10}>
            {alerts.map((alert) => (
              <AlertCard key={alert.id} alert={alert} />
            ))}
          </Flex>
        )}
      </div>
    </Card>
  );
}
