import { type ThemeConfig, theme } from 'antd';

export const darkTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,

  token: {
    // Brand
    colorPrimary: '#F4C542',

    // Status
    colorSuccess: '#22C55E',
    colorWarning: '#FBBF24',
    colorError: '#EF4444',
    colorInfo: '#60A5FA',

    // Neutral graphite
    colorBgBase: '#131416',
    colorBgLayout: '#0E0F11',
    colorBgContainer: '#1B1D20',
    colorBgElevated: '#23262A',

    // Borders
    colorBorder: '#31353A',
    colorBorderSecondary: '#25282C',

    // Text
    colorText: '#F7F7F2',
    colorTextSecondary: '#B8BDC5',
    colorTextTertiary: '#8B9199',

    borderRadius: 14,
    fontFamily: 'Inter, sans-serif',

    boxShadow: '0 2px 10px rgba(0,0,0,.35), 0 1px 3px rgba(0,0,0,.45)',
    boxShadowSecondary: '0 6px 20px rgba(0,0,0,.45)',
  },

  components: {
    Layout: {
      bodyBg: '#0E0F11',
      siderBg: '#17191C',
      headerBg: '#1B1D20',
    },

    Card: {
      colorBgContainer: '#1F2125',
      headerBg: '#1B1D20',
      colorBorderSecondary: '#31353A',
    },

    Table: {
      headerBg: '#23262A',
      rowHoverBg: '#2B2F34',
      borderColor: '#31353A',
    },

    Menu: {
      itemBg: '#17191C',
      itemHoverBg: '#24282D',
      itemSelectedBg: '#4D3E10',
      itemSelectedColor: '#FFF6D5',
    },

    Button: {
      colorPrimary: '#F4C542',
      primaryShadow: 'none',
    },

    Input: {
      colorBgContainer: '#25282C',
      activeBorderColor: '#F4C542',
      hoverBorderColor: '#F4C542',
    },

    Select: {
      colorBgContainer: '#25282C',
      optionSelectedBg: '#4D3E10',
    },

    Collapse: {
      headerBg: 'transparent',
      contentBg: 'transparent',
    },

    Modal: {
      contentBg: '#1F2125',
      headerBg: '#1F2125',
    },

    Drawer: {
      colorBgElevated: '#1F2125',
    },

    Tooltip: {
      colorBgSpotlight: '#3A3F45',
    },

    Divider: {
      colorSplit: '#31353A',
    },

    Tag: {
      defaultBg: '#2A2E33',
      defaultColor: '#D6DCE3',
    },
  },
};
