import type { PropsWithChildren } from 'react';
import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

import { palette, radius, shadow, spacing } from '@/src/theme/tokens';

type CardTone = 'default' | 'accent' | 'warm' | 'soft';

type CardProps = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
  tone?: CardTone;
}>;

export function Card({ children, style, tone = 'default' }: CardProps) {
  return <View style={[styles.base, toneStyles[tone], style]}>{children}</View>;
}

const styles = StyleSheet.create({
  base: {
    borderRadius: radius.lg,
    borderWidth: 1,
    padding: spacing.lg,
    ...shadow,
  },
});

const toneStyles = StyleSheet.create({
  default: {
    backgroundColor: palette.surface,
    borderColor: palette.line,
  },
  accent: {
    backgroundColor: palette.emeraldSoft,
    borderColor: palette.line,
  },
  warm: {
    backgroundColor: palette.goldSoft,
    borderColor: palette.lineStrong,
  },
  soft: {
    backgroundColor: palette.surfaceMuted,
    borderColor: palette.line,
  },
});

