import { StyleSheet, View } from 'react-native';

import { palette, radius } from '@/src/theme/tokens';

type ProgressBarProps = {
  progress: number;
  color?: string;
};

export function ProgressBar({ progress, color = palette.emerald }: ProgressBarProps) {
  return (
    <View style={styles.track}>
      <View
        style={[
          styles.fill,
          {
            backgroundColor: color,
            width: `${Math.max(0, Math.min(100, progress * 100))}%`,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    backgroundColor: palette.cardStrong,
    borderRadius: radius.pill,
    height: 10,
    overflow: 'hidden',
  },
  fill: {
    borderRadius: radius.pill,
    height: '100%',
  },
});

