import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '@/src/components/ui/button';
import { Card } from '@/src/components/ui/card';
import { ProgressBar } from '@/src/components/ui/progress-bar';
import { AppScreen } from '@/src/components/ui/screen';
import { SectionHeader } from '@/src/components/ui/section-header';
import { budgetCategories, dashboardSummary } from '@/src/mocks/finance';
import { formatCurrency } from '@/src/lib/format';
import { palette, radius, spacing } from '@/src/theme/tokens';

export default function BudgetScreen() {
  const router = useRouter();

  return (
    <AppScreen>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>Budget tracker</Text>
        <Text style={styles.title}>March budget</Text>
        <Text style={styles.subtitle}>Steady progress with a couple of categories nearing their cap.</Text>
      </View>

      <Card tone="accent">
        <Text style={styles.cardEyebrow}>Monthly spend</Text>
        <Text style={styles.totalValue}>
          {formatCurrency(dashboardSummary.monthlySpend)} /{' '}
          {formatCurrency(dashboardSummary.monthlyBudget)}
        </Text>
        <Text style={styles.note}>Keep dining in check and redirect the difference to Umrah.</Text>
        <View style={styles.progressWrap}>
          <ProgressBar progress={dashboardSummary.monthlySpend / dashboardSummary.monthlyBudget} />
        </View>
      </Card>

      <SectionHeader title="Category pacing" actionLabel="Transactions" onPressAction={() => router.push('/transactions')} />

      <View style={styles.categoryStack}>
        {budgetCategories.map((category) => {
          const progress = category.spent / category.limit;
          const color =
            progress >= 0.9 ? palette.rose : progress >= 0.7 ? palette.gold : palette.emerald;

          return (
            <Card key={category.id} style={styles.categoryCard}>
              <View style={styles.categoryRow}>
                <View>
                  <Text style={styles.categoryName}>{category.name}</Text>
                  <Text style={styles.categoryMeta}>
                    {formatCurrency(category.spent)} of {formatCurrency(category.limit)}
                  </Text>
                </View>
                <Text style={styles.categoryPercent}>{Math.round(progress * 100)}%</Text>
              </View>
              <View style={styles.progressWrap}>
                <ProgressBar color={color} progress={progress} />
              </View>
            </Card>
          );
        })}
      </View>

      <Card tone="warm">
        <Text style={styles.cardEyebrow}>Recommended move</Text>
        <Text style={styles.recoTitle}>Shift $120 from dining into your Umrah goal.</Text>
        <Text style={styles.note}>
          That keeps this month under budget and pulls your goal completion a few weeks closer.
        </Text>
      </Card>

      <Button label="Review recent transactions" tone="secondary" onPress={() => router.push('/transactions')} />
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
  cardEyebrow: {
    color: palette.emerald,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  totalValue: {
    color: palette.ink,
    fontSize: 28,
    fontWeight: '800',
    marginTop: spacing.sm,
  },
  note: {
    color: palette.muted,
    fontSize: 14,
    lineHeight: 20,
    marginTop: spacing.xs,
  },
  progressWrap: {
    marginTop: spacing.md,
  },
  categoryStack: {
    gap: spacing.md,
  },
  categoryCard: {
    gap: spacing.sm,
  },
  categoryRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryName: {
    color: palette.ink,
    fontSize: 18,
    fontWeight: '800',
  },
  categoryMeta: {
    color: palette.muted,
    fontSize: 14,
    marginTop: spacing.xs,
  },
  categoryPercent: {
    backgroundColor: palette.surfaceMuted,
    borderRadius: radius.pill,
    color: palette.ink,
    fontSize: 13,
    fontWeight: '800',
    overflow: 'hidden',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
  recoTitle: {
    color: palette.ink,
    fontSize: 22,
    fontWeight: '800',
    marginTop: spacing.sm,
  },
});
