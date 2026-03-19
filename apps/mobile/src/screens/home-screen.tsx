import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Card } from '@/src/components/ui/card';
import { ProgressBar } from '@/src/components/ui/progress-bar';
import { AppScreen } from '@/src/components/ui/screen';
import { SectionHeader } from '@/src/components/ui/section-header';
import { StatusChip } from '@/src/components/ui/status-chip';
import { dashboardSummary, currentUser, insights, portfolioHealth } from '@/src/mocks/finance';
import { formatCurrency } from '@/src/lib/format';
import { palette, radius, spacing } from '@/src/theme/tokens';

export default function HomeScreen() {
  const router = useRouter();
  const budgetProgress = dashboardSummary.monthlySpend / dashboardSummary.monthlyBudget;

  return (
    <AppScreen>
      <View style={styles.header}>
        <View>
          <Text style={styles.eyebrow}>Dashboard</Text>
          <Text style={styles.title}>Assalamu alaikum, {currentUser.name.split(' ')[0]}</Text>
          <Text style={styles.subtitle}>
            Build financial clarity across spending, halal investing, and long-term goals.
          </Text>
        </View>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>IM</Text>
        </View>
      </View>

      <LinearGradient colors={[palette.emerald, '#20473b']} style={styles.hero}>
        <View style={styles.heroRow}>
          <Text style={styles.heroEyebrow}>Spending overview</Text>
          <Text style={styles.heroDelta}>{dashboardSummary.spendDeltaLabel}</Text>
        </View>
        <Text style={styles.heroAmount}>{formatCurrency(dashboardSummary.monthlySpend)}</Text>
        <Text style={styles.heroCaption}>
          of {formatCurrency(dashboardSummary.monthlyBudget)} planned for March
        </Text>
        <ProgressBar color={palette.gold} progress={budgetProgress} />
      </LinearGradient>

      <View style={styles.twoUp}>
        <Card style={styles.statCard}>
          <Text style={styles.cardEyebrow}>Zakat estimate</Text>
          <Text style={styles.cardValue}>{formatCurrency(dashboardSummary.zakatEstimate)}</Text>
          <Text style={styles.cardNote}>Snapshot refreshed from current balances.</Text>
        </Card>
        <Card style={styles.statCard}>
          <Text style={styles.cardEyebrow}>Savings pace</Text>
          <Text style={styles.cardValue}>{dashboardSummary.savingsPace}%</Text>
          <Text style={styles.cardNote}>For your Umrah goal and emergency fund.</Text>
        </Card>
      </View>

      <Card tone="warm">
        <View style={styles.healthHeader}>
          <View>
            <Text style={styles.cardEyebrow}>Halal Portfolio Health Score</Text>
            <Text style={styles.healthScore}>{portfolioHealth.score}/100</Text>
          </View>
          <StatusChip label={portfolioHealth.band} tone="gold" />
        </View>
        <Text style={styles.healthBody}>
          Weighted by market value so users can quickly see how much of the portfolio is clearly
          halal, questionable, or needs attention.
        </Text>
        <View style={styles.breakdownStack}>
          {portfolioHealth.byStatus.map((bucket) => (
            <View key={bucket.status} style={styles.breakdownRow}>
              <Text style={styles.breakdownLabel}>{bucket.status}</Text>
              <Text style={styles.breakdownValue}>{bucket.percentage}%</Text>
            </View>
          ))}
        </View>
      </Card>

      <SectionHeader title="Quick actions" />
      <View style={styles.quickGrid}>
        <QuickLink label="Transactions" onPress={() => router.push('/transactions')} />
        <QuickLink label="Insights" onPress={() => router.push('/insights')} />
        <QuickLink label="Invest" onPress={() => router.push('/(tabs)/invest')} />
        <QuickLink label="Goals" onPress={() => router.push('/(tabs)/goals')} />
      </View>

      <Card>
        <Text style={styles.cardEyebrow}>Weekly insight</Text>
        <Text style={styles.insightTitle}>{insights[0]?.title}</Text>
        <Text style={styles.cardNote}>{insights[0]?.summary}</Text>
      </Card>
    </AppScreen>
  );
}

function QuickLink({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.quickLink, pressed && styles.quickLinkPressed]}>
      <Text style={styles.quickLabel}>{label}</Text>
      <Text style={styles.quickMeta}>Open</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    fontSize: 28,
    fontWeight: '800',
    lineHeight: 34,
    marginTop: spacing.xs,
  },
  subtitle: {
    color: palette.muted,
    fontSize: 15,
    lineHeight: 22,
    marginTop: spacing.xs,
    maxWidth: 280,
  },
  avatar: {
    alignItems: 'center',
    backgroundColor: palette.emerald,
    borderRadius: radius.pill,
    height: 48,
    justifyContent: 'center',
    width: 48,
  },
  avatarText: {
    color: palette.white,
    fontSize: 15,
    fontWeight: '800',
  },
  hero: {
    borderRadius: radius.xl,
    gap: spacing.sm,
    padding: spacing.xl,
  },
  heroRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heroEyebrow: {
    color: '#deece5',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  heroDelta: {
    color: palette.white,
    fontSize: 12,
    fontWeight: '700',
  },
  heroAmount: {
    color: palette.white,
    fontSize: 34,
    fontWeight: '800',
  },
  heroCaption: {
    color: '#e7f3eb',
    fontSize: 15,
    marginBottom: spacing.xs,
  },
  twoUp: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  statCard: {
    flex: 1,
  },
  cardEyebrow: {
    color: palette.emerald,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  cardValue: {
    color: palette.ink,
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 29,
    marginTop: spacing.sm,
  },
  cardNote: {
    color: palette.muted,
    fontSize: 14,
    lineHeight: 20,
    marginTop: spacing.xs,
  },
  healthHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  healthScore: {
    color: palette.ink,
    fontSize: 30,
    fontWeight: '800',
    marginTop: spacing.sm,
  },
  healthBody: {
    color: palette.ink,
    fontSize: 15,
    lineHeight: 22,
    marginTop: spacing.md,
  },
  breakdownStack: {
    gap: spacing.sm,
    marginTop: spacing.lg,
  },
  breakdownRow: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.45)',
    borderRadius: radius.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  breakdownLabel: {
    color: palette.ink,
    fontSize: 14,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  breakdownValue: {
    color: palette.ink,
    fontSize: 14,
    fontWeight: '800',
  },
  quickGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
  },
  quickLink: {
    backgroundColor: palette.surface,
    borderColor: palette.line,
    borderRadius: radius.lg,
    borderWidth: 1,
    minWidth: '47%',
    padding: spacing.lg,
  },
  quickLinkPressed: {
    opacity: 0.88,
  },
  quickLabel: {
    color: palette.ink,
    fontSize: 16,
    fontWeight: '800',
  },
  quickMeta: {
    color: palette.emerald,
    fontSize: 13,
    fontWeight: '700',
    marginTop: spacing.xs,
  },
  insightTitle: {
    color: palette.ink,
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 27,
    marginTop: spacing.sm,
  },
});

