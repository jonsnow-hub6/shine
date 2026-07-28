import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAlerts } from '../features/alerts/alertsApi';
import { setAlerts } from '../features/alerts/alertsSlice';
import { useAlertRealtime } from '../features/alerts/hooks/useAlertRealtime';
import { useAlerts } from '../features/alerts/hooks/useAlerts';
import { Row, Col } from 'antd';
import AlertSidebar from '../features/alerts/components/AlertSidebar';
import ActiveAlerts from '../features/alerts/components/ActiveAlerts';

export default function DashboardPage() {
  const dispatch = useDispatch();
  const alerts = useAlerts();

  useAlertRealtime();

  useEffect(() => {
    async function load() {
      const data = await fetchAlerts();

      dispatch(setAlerts(data));
    }

    load();
  }, [dispatch]);

  return (
    <Row
      gutter={24}
      style={{
        height: '100%',
      }}
    >
      <Col
        span={8}
        style={{
          height: '100%',
        }}
      >
        <AlertSidebar />
      </Col>

      <Col span={16}>
        <ActiveAlerts />
      </Col>
    </Row>
  );
}
