import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '@/src/components/ui/button';
import { Card } from '@/src/components/ui/card';
import { AppScreen } from '@/src/components/ui/screen';
import { StatusChip } from '@/src/components/ui/status-chip';
import { useAppStore } from '@/src/store/app-store';
import { palette, radius, spacing } from '@/src/theme/tokens';

const valuePoints = [
  'Track spending without losing sight of your values.',
  'Review investments with halal-aware screening and portfolio scoring.',
  'Plan zakat, goals, and savings from one calm mobile dashboard.',
];

export default function OnboardingScreen() {
  const router = useRouter();
  const setOnboardingComplete = useAppStore((state) => state.setOnboardingComplete);

  return (
    <AppScreen>
      <LinearGradient colors={[palette.emerald, '#1e463a']} style={styles.hero}>
        <StatusChip label="Halal Finance Manager" tone="sage" />
        <Text style={styles.heroTitle}>Money habits that respect your values.</Text>
        <Text style={styles.heroBody}>
          Start with a focused mobile shell for budgeting, halal investing, savings goals, and
          zakat-aware planning.
        </Text>
        <View style={styles.heroPills}>
          {['Budget', 'Invest', 'Zakat', 'Goals'].map((pill) => (
            <View key={pill} style={styles.heroPill}>
              <Text style={styles.heroPillText}>{pill}</Text>
            </View>
          ))}
        </View>
      </LinearGradient>

      <Card>
        <Text style={styles.sectionEyebrow}>What is scaffolded</Text>
        <Text style={styles.sectionTitle}>A mobile MVP structure built for fintech product work.</Text>
        <View style={styles.pointStack}>
          {valuePoints.map((point) => (
            <View key={point} style={styles.pointRow}>
              <View style={styles.pointDot} />
              <Text style={styles.pointText}>{point}</Text>
            </View>
          ))}
        </View>
      </Card>

      <Card tone="soft">
        <Text style={styles.sectionEyebrow}>Next build steps</Text>
        <Text style={styles.softTitle}>Connect Supabase, Plaid sandbox, and live screening logic.</Text>
        <Text style={styles.softBody}>
          The current app uses realistic sample data so we can move straight into feature work and
          replace each module with live queries incrementally.
        </Text>
      </Card>

      <Button
        label="Enter dashboard"
        onPress={() => {
          setOnboardingComplete(true);
          router.replace('/(tabs)');
        }}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  hero: {
    borderRadius: radius.xl,
    gap: spacing.md,
    padding: spacing.xl,
  },
  heroTitle: {
    color: palette.white,
    fontSize: 34,
    fontWeight: '800',
    lineHeight: 38,
    maxWidth: 280,
  },
  heroBody: {
    color: '#e7f3eb',
    fontSize: 15,
    lineHeight: 23,
  },
  heroPills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  heroPill: {
    backgroundColor: 'rgba(255, 255, 255, 0.14)',
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
  heroPillText: {
    color: palette.white,
    fontSize: 13,
    fontWeight: '700',
  },
  sectionEyebrow: {
    color: palette.emerald,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  sectionTitle: {
    color: palette.ink,
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 29,
    marginTop: spacing.sm,
  },
  pointStack: {
    gap: spacing.md,
    marginTop: spacing.lg,
  },
  pointRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: spacing.sm,
  },
  pointDot: {
    backgroundColor: palette.gold,
    borderRadius: radius.pill,
    height: 10,
    marginTop: 7,
    width: 10,
  },
  pointText: {
    color: palette.ink,
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
  },
  softTitle: {
    color: palette.ink,
    fontSize: 20,
    fontWeight: '800',
    lineHeight: 25,
    marginTop: spacing.sm,
  },
  softBody: {
    color: palette.muted,
    fontSize: 15,
    lineHeight: 22,
    marginTop: spacing.sm,
  },
});

