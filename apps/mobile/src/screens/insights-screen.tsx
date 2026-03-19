import { StyleSheet, Text, View } from 'react-native';

import { Card } from '@/src/components/ui/card';
import { AppScreen } from '@/src/components/ui/screen';
import { StatusChip } from '@/src/components/ui/status-chip';
import { holdingStatusMeta } from '@/src/features/portfolio/scoring';
import { insights, portfolioHealth } from '@/src/mocks/finance';
import { palette, spacing } from '@/src/theme/tokens';

export default function InsightsScreen() {
  return (
    <AppScreen>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>Insights</Text>
        <Text style={styles.title}>Weekly review</Text>
        <Text style={styles.subtitle}>
          This is the first layer of guidance on top of budgets, transactions, and portfolio status.
        </Text>
      </View>

      <View style={styles.stack}>
        {insights.map((insight) => (
          <Card key={insight.id} tone={insight.tone === 'emerald' ? 'accent' : insight.tone === 'gold' ? 'warm' : 'soft'}>
            <Text style={styles.insightTitle}>{insight.title}</Text>
            <Text style={styles.insightSummary}>{insight.summary}</Text>
            <Text style={styles.insightAction}>{insight.action}</Text>
          </Card>
        ))}
      </View>

      <Card>
        <Text style={styles.eyebrow}>Portfolio flags</Text>
        <View style={styles.flagStack}>
          {portfolioHealth.flaggedHoldings.map((holding) => (
            <View key={holding.id} style={styles.flagRow}>
              <View>
                <Text style={styles.flagTicker}>{holding.ticker}</Text>
                <Text style={styles.flagName}>{holding.name}</Text>
              </View>
              <StatusChip
                label={holdingStatusMeta[holding.status].label}
                tone={holdingStatusMeta[holding.status].tone}
              />
            </View>
          ))}
        </View>
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
  stack: {
    gap: spacing.md,
  },
  insightTitle: {
    color: palette.ink,
    fontSize: 22,
    fontWeight: '800',
  },
  insightSummary: {
    color: palette.ink,
    fontSize: 14,
    lineHeight: 20,
    marginTop: spacing.sm,
  },
  insightAction: {
    color: palette.emerald,
    fontSize: 14,
    fontWeight: '700',
    marginTop: spacing.md,
  },
  flagStack: {
    gap: spacing.md,
    marginTop: spacing.lg,
  },
  flagRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flagTicker: {
    color: palette.ink,
    fontSize: 18,
    fontWeight: '800',
  },
  flagName: {
    color: palette.muted,
    fontSize: 14,
    marginTop: spacing.xs,
  },
});
