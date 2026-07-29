import React, { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Modal, Button, Typography } from 'antd';
import { SoundOutlined, StopOutlined } from '@ant-design/icons';
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


  const { play, stop } = useSound('/sounds/alert.mp3', {
    loop: true,
    volume: 1.0,
  });

  // Handle audio loop
  useEffect(() => {
    if (hasActiveAlerts) {
      play();
    } else {
      stop();
    }
  }, [hasActiveAlerts, isPWA, play, stop]);

  return (
    <>
      {children}

      {!isPWA && (
        <Modal
          open={true}
          footer={null}
          closable={false}
          maskClosable={false}
          centered
          destroyOnClose
        >
          <div style={{ textAlign: 'center', padding: '24px 12px' }}>
            <StopOutlined style={{ fontSize: 48, color: '#faad14', marginBottom: 16 }} />
            <Title level={4}>Desktop App Required</Title>
            <Paragraph>
              Shine does not support browser access to the app, please click on the Install app/ Open in app in the upper right corner of your browser to open the shine desktop app.
            </Paragraph>
          </div>
        </Modal>
      )}
    </>
  );
};
