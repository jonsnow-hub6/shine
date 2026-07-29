import { Card, Collapse, Empty, Flex, Tag, Typography } from 'antd';

import { useAlerts } from '../../hooks/useAlerts';
import { alertSeverityConfig } from '../../consts';
import styles from './styles.module.css';

const { Text } = Typography;

export function AllAlerts() {
  const alerts = useAlerts();

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
        )}
      </div>
    </Card>
  );
}
