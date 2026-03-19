import { Platform } from 'react-native';

export const palette = {
  background: '#f6f1e7',
  surface: '#fffdf7',
  surfaceMuted: '#f2eadc',
  card: '#fbf7ef',
  cardStrong: '#f0e8d8',
  ink: '#17372c',
  muted: '#687b70',
  emerald: '#2f5d50',
  emeraldSoft: '#dbe8df',
  sage: '#6f9e82',
  sageSoft: '#edf4ef',
  gold: '#c6a25d',
  goldSoft: '#f3e4bf',
  rose: '#cf836b',
  roseSoft: '#fae5de',
  white: '#ffffff',
  line: 'rgba(23, 55, 44, 0.09)',
  lineStrong: 'rgba(23, 55, 44, 0.18)',
} as const;

export const spacing = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
} as const;

export const radius = {
  sm: 12,
  md: 18,
  lg: 24,
  xl: 32,
  pill: 999,
} as const;

export const shadow = Platform.select({
  ios: {
    shadowColor: '#17372c',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 18 },
    shadowRadius: 28,
  },
  android: {
    elevation: 4,
  },
  default: {
    shadowColor: '#17372c',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 18 },
    shadowRadius: 28,
  },
});

