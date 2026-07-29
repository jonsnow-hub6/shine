import { type ThemeConfig, theme } from 'antd';

export const lightTheme: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,

  token: {
    // Brand
    colorPrimary: '#E8A900',

    // Status
    colorSuccess: '#22C55E',
    colorWarning: '#F59E0B',
    colorError: '#EF4444',
    colorInfo: '#3B82F6',

    // Warm neutral palette
    colorBgBase: '#F9F4E8',
    colorBgLayout: '#F3EBD7',
    colorBgContainer: '#FCF8EE',
    colorBgElevated: '#FFFCF5',

    // Borders
    colorBorder: '#E7D8AE',
    colorBorderSecondary: '#EFE3BF',

    // Text
    colorText: '#2F2A1F',
    colorTextSecondary: '#6D6657',
    colorTextTertiary: '#8A806C',

    // Misc
    borderRadius: 14,
    fontFamily: 'Inter, sans-serif',

    // Shadows (much softer than default)
    boxShadow: '0 2px 10px rgba(90, 70, 20, 0.05), 0 1px 3px rgba(90, 70, 20, 0.08)',
    boxShadowSecondary: '0 4px 18px rgba(90, 70, 20, 0.08)',
  },

  components: {
    Layout: {
      headerBg: '#FAF5EA',
      bodyBg: '#F3EBD7',
      siderBg: '#F8F3E6',
    },

    Card: {
      colorBgContainer: '#FCF8EE',
      headerBg: '#FAF5EA',
      colorBorderSecondary: '#E7D8AE',
    },

    Table: {
      headerBg: '#F4E7BE',
      rowHoverBg: '#F8EFCF',
      borderColor: '#E7D8AE',
    },

    Menu: {
      itemBg: '#F8F3E6',
      itemSelectedBg: '#F5E3A7',
      itemHoverBg: '#F9EAB9',
      itemSelectedColor: '#2F2A1F',
    },

    Button: {
      colorPrimary: '#E8A900',
      primaryShadow: 'none',
    },

    Input: {
      activeBorderColor: '#E8A900',
      hoverBorderColor: '#E8A900',
      colorBgContainer: '#FFFCF5',
    },

    Select: {
      colorBgContainer: '#FFFCF5',
      optionSelectedBg: '#F5E3A7',
    },

    Collapse: {
      headerBg: 'transparent',
      contentBg: 'transparent',
    },

    Modal: {
      contentBg: '#FCF8EE',
      headerBg: '#FCF8EE',
    },

    Drawer: {
      colorBgElevated: '#FCF8EE',
    },

    Tooltip: {
      colorBgSpotlight: '#4A4337',
    },

    Divider: {
      colorSplit: '#E7D8AE',
    },

    Tag: {
      defaultBg: '#F5EFD9',
      defaultColor: '#5A4E33',
    },
  },
};
