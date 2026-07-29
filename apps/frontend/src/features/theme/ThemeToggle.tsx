import { Button } from 'antd';

import { MoonOutlined, SunOutlined } from '@ant-design/icons';

import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { mode, toggleTheme } = useTheme();

  return (
    <Button
      type="text"
      icon={mode === 'light' ? <SunOutlined /> : <MoonOutlined />}
      onClick={toggleTheme}
    />
  );
}
