import { CheckOutlined } from '@ant-design/icons';
import { Card, Flex, Tag, Typography, Button } from 'antd';
import { confirmAlert } from '../../alertsSlice';
import type { Alert } from '../../types';
import { ALERT_SEVERITY_CONFIG } from '../../consts';
import { useAppDispatch } from '../../../../app/store';
import { fullDateFormatter } from '../../../../common/utils';

export function ActiveAlertCard({ alert }: { alert: Alert }) {
  const severity = ALERT_SEVERITY_CONFIG[alert.severity];
  const dispatch = useAppDispatch();

  return (
    <Card
      key={alert.id}
      className={severity.className}
      size="small"
      style={{
        borderLeft: `5px solid ${
          alert.severity === 'critical'
            ? '#ff4d4f'
            : alert.severity === 'warning'
              ? '#f5b700'
              : '#1677ff'
        }`,
      }}
    >
      <Flex justify="space-between" align="start" gap={16}>
        <Flex
          vertical
          style={{
            minWidth: 0,
          }}
        >
          <Flex gap={8} align="center">
            <Tag color={severity.tag}>{severity.label}</Tag>

            <Typography.Text strong ellipsis>
              {alert.title}
            </Typography.Text>
          </Flex>

          <Typography.Paragraph
            style={{
              marginTop: 8,
              marginBottom: 8,
            }}
          >
            {alert.message}
          </Typography.Paragraph>

          <Typography.Text type="secondary">{fullDateFormatter(alert.timestamp)}</Typography.Text>
        </Flex>

        <Button
          type="primary"
          icon={<CheckOutlined />}
          onClick={() => dispatch(confirmAlert(alert.id))}
        >
          Confirm
        </Button>
      </Flex>
    </Card>
  );
}
