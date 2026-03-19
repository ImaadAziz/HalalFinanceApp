import { DefaultTheme, type Theme } from '@react-navigation/native';

import { palette } from '@/src/theme/tokens';

export const navigationTheme: Theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: palette.emerald,
    background: palette.background,
    card: palette.surface,
    text: palette.ink,
    border: palette.line,
    notification: palette.gold,
  },
};

