import React, { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Modal, Button, Typography } from 'antd';
import { SoundOutlined } from '@ant-design/icons';
import { useSound } from 'react-sounds';
import { selectActiveAlerts } from '../features/alerts/alertsSelectors';
import { useIsPWA } from '../hooks/useIsPWA';

const { Title, Paragraph } = Typography;

export const AlertSoundNotificationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Now updates instantly when app opens as PWA
  const isPWA = useIsPWA();

  const activeAlerts = useSelector(selectActiveAlerts);
  const hasActiveAlerts = Array.isArray(activeAlerts)
    ? activeAlerts.length > 0
    : Object.keys(activeAlerts || {}).length > 0;

  const [hasSoundPermission, setHasSoundPermission] = useState<boolean>(false);

  const { play, stop } = useSound('/sounds/alert.mp3', {
    loop: true,
    volume: 1.0,
  });

  const handleEnableAudio = useCallback(() => {
    setHasSoundPermission(true);
    if (hasActiveAlerts) {
      play();
    }
  }, [hasActiveAlerts, play, setHasSoundPermission]);

  // Handle audio loop
  useEffect(() => {
    if (hasActiveAlerts && (hasSoundPermission || isPWA)) {
      play();
    } else {
      stop();
    }
  }, [hasActiveAlerts, hasSoundPermission, isPWA, play, stop]);

  return (
    <>
      {children}

      {!isPWA && (
        <Modal
          open={!hasSoundPermission}
          footer={null}
          closable={false}
          maskClosable={false}
          centered
          destroyOnClose
        >
          <div style={{ textAlign: 'center', padding: '24px 12px' }}>
            <SoundOutlined style={{ fontSize: 48, color: '#faad14', marginBottom: 16 }} />
            <Title level={4}>Audio Notifications Required</Title>
            <Paragraph>
              Shine requires audio permission to alert operators when active alerts require
              attention.
            </Paragraph>
            <Button
              type="primary"
              size="large"
              icon={<SoundOutlined />}
              onClick={handleEnableAudio}
            >
              Enable Audio Alerts
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
};
