import { Card, Collapse, Flex, Tag, Typography } from 'antd';

import { useAlerts } from '../hooks/useAlerts';
import { alertSeverityConfig } from '../consts';
import styles from './AlertSideBar.module.css';

const { Text } = Typography;

export default function AlertSidebar() {
  const alerts = useAlerts();

  return (
    <Card
      title={`Previous Alerts (${alerts.length})`}
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      styles={{
        body: {
          flex: 1,
          minHeight: 0,
          padding: 8,
        },
      }}
    >
      <div className={styles['alertList']}>
        <Flex vertical gap={10}>
          {alerts.map((alert) => {
            const severity = alertSeverityConfig[alert.severity];

            return (
              <Card
                key={alert.id}
                size="small"
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
                          }}
                        >
                          <Tag color={severity.tag}>{severity.label}</Tag>

                          <Text
                            strong
                            ellipsis
                            style={{
                              flex: 1,
                            }}
                          >
                            {alert.title}
                          </Text>
                        </Flex>
                      ),

                      children: (
                        <Flex vertical gap={8}>
                          <div>
                            <Text strong>Message</Text>

                            <div>{alert.message}</div>
                          </div>

                          <div>
                            <Text strong>Created:</Text>{' '}
                            {new Date(alert.timestamp).toLocaleString()}
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
          })}
        </Flex>
      </div>
    </Card>
  );
}
