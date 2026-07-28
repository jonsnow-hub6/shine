import { useState } from 'react';
import { Modal, Button, Typography } from 'antd';

import { unlockAlertSound } from './audioManager';
import { getSoundPreference, setSoundPreference } from './aduioPreferences';
import { requestNotificationPermission } from '../../features/notifications/browserNotifications';

export function SoundPermissionModal() {
  const [open, setOpen] = useState(!getSoundPreference());

async function enableSound() {

  const soundEnabled =
    await unlockAlertSound();


  await requestNotificationPermission();


  if(soundEnabled){
    setSoundPreference(true);
    setOpen(false);
  }
}


  return (
    <Modal
      open={open}
      title="Enable alert sounds?"
      closable={false}
      footer={[
        <Button key="enable" type="primary" onClick={enableSound}>
          Enable sound
        </Button>,
      ]}
    >
      <Typography.Paragraph>
        Shine uses audio alerts to notify you when new incidents arrive.
      </Typography.Paragraph>
    </Modal>
  );
}
