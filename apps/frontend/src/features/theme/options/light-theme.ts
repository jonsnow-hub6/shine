import { type ThemeConfig, theme } from 'antd';

export const lightTheme: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,

  token: {
    colorPrimary: '#F5B700',

    colorSuccess: '#22C55E',
    colorWarning: '#F59E0B',
    colorError: '#EF4444',
    colorInfo: '#3B82F6',

    colorBgBase: '#FFFDF7',
    colorBgLayout: '#FFF8E8',
    colorBgContainer: '#FFFFFF',

    colorBorder: '#F5D76E',

    colorText: '#2F2A1F',
    colorTextSecondary: '#7A705B',

    borderRadius: 14,

    fontFamily: 'Inter, sans-serif',
  },

  components: {
    Layout: {
      headerBg: '#FFFFFF',
      bodyBg: '#FFF8E8',
      siderBg: '#FFFFFF',
    },

    Card: {
      colorBgContainer: '#FFFFFF',
    },

    Table: {
      headerBg: '#FFF6D8',
      rowHoverBg: '#FFF3C4',
    },

    Menu: {
      itemBg: '#FFFFFF',
      itemSelectedBg: '#FFF3C4',
    },

    Button: {
      colorPrimary: '#F5B700',
    },
  },
};
