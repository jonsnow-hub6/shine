import { useState } from "react";
import {
  Modal,
  Button,
  Typography,
} from "antd";

import {
  unlockAlertSound,
} from "./audioManager";
import { getSoundPreference, setSoundPreference } from "./aduioPreferences";




export function SoundPermissionModal() {

  const [open, setOpen] = useState(
    !getSoundPreference()
  );


  async function enableSound() {

    const success =
      await unlockAlertSound();


    if (success) {
      setSoundPreference(true);
      setOpen(false);
    }

  }


  function disableSound() {
    setSoundPreference(true);
    setOpen(false);
  }


  return (
    <Modal
      open={open}
      title="Enable alert sounds?"
      closable={false}
      footer={[
        <Button
          key="disable"
          onClick={disableSound}
        >
          Not now
        </Button>,

        <Button
          key="enable"
          type="primary"
          onClick={enableSound}
        >
          Enable sound
        </Button>,
      ]}
    >

      <Typography.Paragraph>
        Shine uses audio alerts to notify you
        when new incidents arrive.
      </Typography.Paragraph>

    </Modal>
  );
}
