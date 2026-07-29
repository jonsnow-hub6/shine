import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAlerts } from '../features/alerts/alertsApi';
import { setAlerts } from '../features/alerts/alertsSlice';
import { useAlertRealtime } from '../features/alerts/hooks/useAlertRealtime';
import { Row, Col } from 'antd';
import {ActiveAlerts} from '../features/alerts/components/active-alerts/ActiveAlerts';
import { AllAlerts } from '../features/alerts/components/all-alerts/AllAlerts';

export default function DashboardPage() {
  const dispatch = useDispatch();

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
      <Col span={8}>
        <AllAlerts />
      </Col>

      <Col span={16}>
        <ActiveAlerts />
      </Col>
    </Row>
  );
}
