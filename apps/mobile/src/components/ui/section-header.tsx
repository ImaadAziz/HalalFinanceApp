import { Pressable, StyleSheet, Text, View } from 'react-native';

import { palette, spacing } from '@/src/theme/tokens';

type SectionHeaderProps = {
  title: string;
  actionLabel?: string;
  onPressAction?: () => void;
};

export function SectionHeader({ title, actionLabel, onPressAction }: SectionHeaderProps) {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      {actionLabel ? (
        <Pressable onPress={onPressAction}>
          <Text style={styles.action}>{actionLabel}</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: spacing.md,
  },
  title: {
    color: palette.ink,
    fontSize: 20,
    fontWeight: '800',
  },
  action: {
    color: palette.emerald,
    fontSize: 14,
    fontWeight: '700',
  },
});

