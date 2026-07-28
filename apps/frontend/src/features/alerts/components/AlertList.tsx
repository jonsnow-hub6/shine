import { Row, Col } from 'antd';
import type { Alert } from '../types';
import { AlertCard } from './AlertCard';

export function AlertList({ alerts }: { alerts: Alert[] }) {
  return (
    <Row gutter={[16, 16]}>
      {alerts.map((alert) => (
        <Col key={alert.id} xs={24} md={12} lg={8}>
          <AlertCard alert={alert} />
        </Col>
      ))}
    </Row>
  );
}
