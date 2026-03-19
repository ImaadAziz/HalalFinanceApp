import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '@/src/components/ui/button';
import { Card } from '@/src/components/ui/card';
import { AppScreen } from '@/src/components/ui/screen';
import { SectionHeader } from '@/src/components/ui/section-header';
import { StatusChip } from '@/src/components/ui/status-chip';
import { holdingStatusMeta } from '@/src/features/portfolio/scoring';
import { portfolioHealth } from '@/src/mocks/finance';
import { formatCurrency } from '@/src/lib/format';
import { palette, spacing } from '@/src/theme/tokens';

export default function InvestScreen() {
  const router = useRouter();

  return (
    <AppScreen>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>Halal investing</Text>
        <Text style={styles.title}>Portfolio Health Score</Text>
        <Text style={styles.subtitle}>
          A portfolio-level snapshot of how much of the current allocation is halal, questionable,
          non-halal, or still unknown.
        </Text>
      </View>

      <LinearGradient colors={['#f2dfb0', '#d3e5d8']} style={styles.scoreCard}>
        <View>
          <Text style={styles.cardEyebrow}>Overall health</Text>
          <Text style={styles.scoreValue}>{portfolioHealth.score}/100</Text>
        </View>
        <StatusChip label={portfolioHealth.band} tone="gold" />
      </LinearGradient>

      <SectionHeader title="Portfolio mix" />
      <View style={styles.statusGrid}>
        {portfolioHealth.byStatus.map((bucket) => {
          const meta = holdingStatusMeta[bucket.status];

          return (
            <Card key={bucket.status} style={styles.statusCard}>
              <StatusChip label={meta.label} tone={meta.tone} />
              <Text style={styles.bucketValue}>{bucket.percentage}%</Text>
              <Text style={styles.bucketMeta}>{bucket.count} holdings</Text>
            </Card>
          );
        })}
      </View>

      <SectionHeader title="Holdings needing attention" actionLabel="Insights" onPressAction={() => router.push('/insights')} />
      <Card>
        <View style={styles.holdingStack}>
          {portfolioHealth.flaggedHoldings.map((holding) => {
            const meta = holdingStatusMeta[holding.status];

            return (
              <View key={holding.id} style={styles.holdingRow}>
                <View>
                  <Text style={styles.holdingTicker}>{holding.ticker}</Text>
                  <Text style={styles.holdingName}>{holding.name}</Text>
                </View>
                <View style={styles.holdingRight}>
                  <Text style={styles.holdingValue}>{formatCurrency(holding.marketValue)}</Text>
                  <StatusChip label={meta.label} tone={meta.tone} />
                </View>
              </View>
            );
          })}
        </View>
      </Card>

      <Card tone="soft">
        <Text style={styles.cardEyebrow}>Methodology</Text>
        <Text style={styles.methodTitle}>AAOIFI-based screening placeholder</Text>
        <Text style={styles.methodBody}>
          Wire this screen to live screening data next. The local scoring engine is already in
          place, so replacing sample holdings with Supabase-backed data is straightforward.
        </Text>
      </Card>

      <Button label="Open insights" tone="secondary" onPress={() => router.push('/insights')} />
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
  scoreCard: {
    alignItems: 'center',
    borderRadius: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: spacing.xl,
  },
  cardEyebrow: {
    color: palette.emerald,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  scoreValue: {
    color: palette.ink,
    fontSize: 36,
    fontWeight: '800',
    marginTop: spacing.sm,
  },
  statusGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
  },
  statusCard: {
    flexBasis: '47%',
    gap: spacing.sm,
  },
  bucketValue: {
    color: palette.ink,
    fontSize: 24,
    fontWeight: '800',
    marginTop: spacing.sm,
  },
  bucketMeta: {
    color: palette.muted,
    fontSize: 14,
  },
  holdingStack: {
    gap: spacing.md,
  },
  holdingRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  holdingTicker: {
    color: palette.ink,
    fontSize: 18,
    fontWeight: '800',
  },
  holdingName: {
    color: palette.muted,
    fontSize: 14,
    marginTop: spacing.xs,
  },
  holdingRight: {
    alignItems: 'flex-end',
    gap: spacing.xs,
  },
  holdingValue: {
    color: palette.ink,
    fontSize: 15,
    fontWeight: '700',
  },
  methodTitle: {
    color: palette.ink,
    fontSize: 22,
    fontWeight: '800',
    marginTop: spacing.sm,
  },
  methodBody: {
    color: palette.muted,
    fontSize: 14,
    lineHeight: 20,
    marginTop: spacing.sm,
  },
});
