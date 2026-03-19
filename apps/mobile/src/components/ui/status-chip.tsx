import { StyleSheet, Text, View } from 'react-native';

import { palette, radius, spacing } from '@/src/theme/tokens';

type StatusTone = 'emerald' | 'gold' | 'rose' | 'sage';

type StatusChipProps = {
  label: string;
  tone?: StatusTone;
};

export function StatusChip({ label, tone = 'sage' }: StatusChipProps) {
  return (
    <View style={[styles.base, toneStyles[tone]]}>
      <Text style={[styles.label, labelToneStyles[tone]]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    alignSelf: 'flex-start',
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
  label: {
    fontSize: 12,
    fontWeight: '800',
  },
});

const toneStyles = StyleSheet.create({
  emerald: {
    backgroundColor: palette.emeraldSoft,
  },
  gold: {
    backgroundColor: palette.goldSoft,
  },
  rose: {
    backgroundColor: palette.roseSoft,
  },
  sage: {
    backgroundColor: palette.surfaceMuted,
  },
});

const labelToneStyles = StyleSheet.create({
  emerald: {
    color: palette.emerald,
  },
  gold: {
    color: '#8a6626',
  },
  rose: {
    color: '#8b4e3c',
  },
  sage: {
    color: palette.muted,
  },
});
