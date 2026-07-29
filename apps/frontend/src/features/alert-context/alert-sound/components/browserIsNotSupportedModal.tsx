import React from 'react';
import { Modal, Typography } from 'antd';
import { StopOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export const BrowserIsNotSupportedModal: React.FC = () => {
  return (
    <Modal open={true} footer={null} closable={false} maskClosable={false} centered destroyOnClose>
      <div style={{ textAlign: 'center', padding: '24px 12px' }}>
        <StopOutlined style={{ fontSize: 48, color: '#faad14', marginBottom: 16 }} />
        <Title level={4}>Desktop App Required</Title>
        <Paragraph>
          Shine does not support browser access to the app, please click on the Install app/ Open in
          app in the upper right corner of your browser to open the shine desktop app.
        </Paragraph>
      </div>
    </Modal>
  );
};
