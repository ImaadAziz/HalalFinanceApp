import { Pressable, StyleSheet, Text, type PressableProps, type StyleProp, type ViewStyle } from 'react-native';

import { palette, radius, spacing } from '@/src/theme/tokens';

type ButtonTone = 'primary' | 'secondary' | 'ghost';

type ButtonProps = Omit<PressableProps, 'style'> & {
  label: string;
  tone?: ButtonTone;
  style?: StyleProp<ViewStyle>;
};

export function Button({ label, style, tone = 'primary', ...props }: ButtonProps) {
  return (
    <Pressable style={({ pressed }) => [styles.base, toneStyles[tone], pressed && styles.pressed, style]} {...props}>
      <Text style={[styles.label, labelToneStyles[tone]]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    borderRadius: radius.md,
    justifyContent: 'center',
    minHeight: 52,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  label: {
    fontSize: 15,
    fontWeight: '700',
  },
  pressed: {
    opacity: 0.9,
  },
});

const toneStyles = StyleSheet.create({
  primary: {
    backgroundColor: palette.emerald,
  },
  secondary: {
    backgroundColor: palette.surface,
    borderColor: palette.lineStrong,
    borderWidth: 1,
  },
  ghost: {
    backgroundColor: 'transparent',
    borderColor: palette.line,
    borderWidth: 1,
  },
});

const labelToneStyles = StyleSheet.create({
  primary: {
    color: palette.white,
  },
  secondary: {
    color: palette.ink,
  },
  ghost: {
    color: palette.ink,
  },
});
