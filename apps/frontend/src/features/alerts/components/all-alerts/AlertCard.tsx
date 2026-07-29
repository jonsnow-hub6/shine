import { Card, Collapse, Flex, Tag, Typography } from 'antd';
import type { Alert } from '../../types';
import { ALERT_SEVERITY_CONFIG } from '../../consts';
import styles from './styles.module.css'; // Adjust path if needed

const { Text } = Typography;

export function AlertCard({ alert }: { alert: Alert }) {
  const severity = ALERT_SEVERITY_CONFIG[alert.severity];

  return (
    <Card
      key={alert.id}
      size="small"
      className={styles['cardContainer'] || ''}
      style={{
        borderLeft: `5px solid ${severity.color}`,
        background: `${severity.color}12`,
      }}
    >
      <Collapse
        bordered={false}
        ghost
        items={[
          {
            key: alert.id,
            label: (
              <Flex
                align="center"
                gap={8}
                style={{
                  width: '100%',
                  minWidth: 0, // Critical for Ant Design Flex item truncation
                }}
              >
                <Tag color={severity.tag} style={{ flexShrink: 0 }}>
                  {severity.label}
                </Tag>

                <Text
                  strong
                  ellipsis
                  style={{
                    flex: '1 1 0%',
                    minWidth: 0, // Prevents text from pushing timestamp off screen
                  }}
                >
                  {alert.title}
                </Text>

                <div className={styles['timestamp']}>
                  {new Date(alert.timestamp).toLocaleString()}
                </div>
              </Flex>
            ),
            children: (
              <Flex vertical gap={8}>
                <div>
                  <Text strong>Message</Text>
                  <div>{alert.message}</div>
                </div>

                <div>
                  <Text strong>Created:</Text> {new Date(alert.timestamp).toLocaleString()}
                </div>

                <div>
                  <Text strong>Alert ID:</Text> {alert.id}
                </div>
              </Flex>
            ),
          },
        ]}
      />
    </Card>
  );
}