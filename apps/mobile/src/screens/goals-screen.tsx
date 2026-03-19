import { StyleSheet, Text, View } from 'react-native';

import { Card } from '@/src/components/ui/card';
import { ProgressBar } from '@/src/components/ui/progress-bar';
import { AppScreen } from '@/src/components/ui/screen';
import { savingsGoals } from '@/src/mocks/finance';
import { formatCurrency } from '@/src/lib/format';
import { palette, spacing } from '@/src/theme/tokens';

export default function GoalsScreen() {
  return (
    <AppScreen>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>Savings goals</Text>
        <Text style={styles.title}>Save with intention</Text>
        <Text style={styles.subtitle}>
          Track meaningful milestones like emergency savings and Umrah instead of generic buckets.
        </Text>
      </View>

      <View style={styles.goalStack}>
        {savingsGoals.map((goal) => {
          const progress = goal.saved / goal.target;

          return (
            <Card key={goal.id}>
              <View style={styles.goalHeader}>
                <View>
                  <Text style={styles.goalName}>{goal.name}</Text>
                  <Text style={styles.goalNote}>{goal.note}</Text>
                </View>
                <Text style={styles.goalPercent}>{Math.round(progress * 100)}%</Text>
              </View>
              <View style={styles.progressWrap}>
                <ProgressBar progress={progress} color={goal.id === 'umrah' ? palette.gold : palette.emerald} />
              </View>
              <View style={styles.goalFooter}>
                <Text style={styles.goalAmount}>
                  {formatCurrency(goal.saved)} of {formatCurrency(goal.target)}
                </Text>
                <Text style={styles.goalContribution}>
                  {formatCurrency(goal.monthlyContribution)}/mo
                </Text>
              </View>
            </Card>
          );
        })}
      </View>

      <Card tone="warm">
        <Text style={styles.cardEyebrow}>Planner note</Text>
        <Text style={styles.planTitle}>You can finish Umrah earlier with one budget change.</Text>
        <Text style={styles.planBody}>
          Redirect a small amount from dining and use the Portfolio Health screen to review
          whether fresh contributions should go toward investing or savings first.
        </Text>
      </Card>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  header: {
    gap: spacing.xs,
  },
  eyebrow: {
    color: palette.emerald,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  title: {
    color: palette.ink,
    fontSize: 30,
    fontWeight: '800',
  },
  subtitle: {
    color: palette.muted,
    fontSize: 15,
    lineHeight: 22,
  },
  goalStack: {
    gap: spacing.md,
  },
  goalHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  goalName: {
    color: palette.ink,
    fontSize: 22,
    fontWeight: '800',
  },
  goalNote: {
    color: palette.muted,
    fontSize: 14,
    marginTop: spacing.xs,
  },
  goalPercent: {
    color: palette.emerald,
    fontSize: 16,
    fontWeight: '800',
  },
  progressWrap: {
    marginTop: spacing.lg,
  },
  goalFooter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.md,
  },
  goalAmount: {
    color: palette.ink,
    fontSize: 14,
    fontWeight: '700',
  },
  goalContribution: {
    color: palette.muted,
    fontSize: 14,
  },
  cardEyebrow: {
    color: palette.emerald,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  planTitle: {
    color: palette.ink,
    fontSize: 22,
    fontWeight: '800',
    marginTop: spacing.sm,
  },
  planBody: {
    color: palette.muted,
    fontSize: 14,
    lineHeight: 20,
    marginTop: spacing.sm,
  },
});
