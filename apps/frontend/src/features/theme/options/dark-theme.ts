import { type ThemeConfig, theme } from 'antd';

export const darkTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,

  token: {
    colorPrimary: '#FFD54A',

    colorSuccess: '#22C55E',
    colorWarning: '#FBBF24',
    colorError: '#EF4444',
    colorInfo: '#60A5FA',

    colorBgBase: '#111111',
    colorBgLayout: '#0B0B0B',
    colorBgContainer: '#1A1A1A',

    colorBorder: '#3B3520',

    colorText: '#FFFBEA',
    colorTextSecondary: '#C9C3A9',

    borderRadius: 14,

    fontFamily: 'Inter, sans-serif',
  },

  components: {
    Layout: {
      headerBg: '#1A1A1A',
      bodyBg: '#0B0B0B',
      siderBg: '#1A1A1A',
    },

    Card: {
      colorBgContainer: '#1A1A1A',
    },

    Table: {
      headerBg: '#242424',
      rowHoverBg: '#2E2A1F',
    },

    Menu: {
      itemBg: '#1A1A1A',
      itemSelectedBg: '#4A3F12',
    },

    Button: {
      colorPrimary: '#FFD54A',
    },
  },
};
