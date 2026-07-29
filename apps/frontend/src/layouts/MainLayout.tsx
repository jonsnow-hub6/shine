import { Flex, Image, Layout, Typography, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import { ThemeToggle } from '../features/theme/ThemeToggle';

const { Header, Content } = Layout;

export default function MainLayout() {
  const { token } = theme.useToken();

  return (
    <Layout
      style={{
        minHeight: '100vh',
        background: token.colorBgLayout,
      }}
    >
      <Header
        style={{
          background: token.colorBgContainer,
          borderBottom: `1px solid ${token.colorBorder}`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Flex align="center" gap={8}>
          <img
            src="/images/logo.png"
            alt="Shine Logo"
            style={{
              width: '3rem',
              height: '3rem',
              objectFit: 'contain',
            }}
          />

          <Typography.Title
            level={3}
            style={{
              margin: 0,
              color: token.colorPrimary,
              letterSpacing: 2,
            }}
          >
            SHINE
          </Typography.Title>
        </Flex>

        <ThemeToggle />
      </Header>

      <Content
        style={{
          height: 'calc(100vh - 64px)',
          overflow: 'hidden',
          padding: 24,
        }}
      >
        <Outlet />
      </Content>
    </Layout>
  );
}
