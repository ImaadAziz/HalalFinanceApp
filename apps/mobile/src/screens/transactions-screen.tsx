import { StyleSheet, Text, View } from 'react-native';

import { Card } from '@/src/components/ui/card';
import { AppScreen } from '@/src/components/ui/screen';
import { StatusChip } from '@/src/components/ui/status-chip';
import { holdingStatusMeta } from '@/src/features/portfolio/scoring';
import { transactions } from '@/src/mocks/finance';
import { formatCurrency } from '@/src/lib/format';
import { palette, spacing } from '@/src/theme/tokens';

export default function TransactionsScreen() {
  return (
    <AppScreen>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>Transactions</Text>
        <Text style={styles.title}>Recent activity</Text>
        <Text style={styles.subtitle}>
          Sample synced activity with room for merchant rules, search, and category editing.
        </Text>
      </View>

      <Card tone="soft">
        <Text style={styles.filterText}>Filters: all, recurring, needs review, zakatable</Text>
      </Card>

      <View style={styles.list}>
        {transactions.map((transaction) => (
          <Card key={transaction.id}>
            <View style={styles.row}>
              <View style={styles.left}>
                <Text style={styles.merchant}>{transaction.merchant}</Text>
                <Text style={styles.meta}>
                  {transaction.category} · {transaction.dateLabel}
                </Text>
              </View>
              <View style={styles.right}>
                <Text style={styles.amount}>{formatCurrency(transaction.amount)}</Text>
                {transaction.status && transaction.status !== 'recurring' ? (
                  <StatusChip
                    label={holdingStatusMeta[transaction.status].label}
                    tone={holdingStatusMeta[transaction.status].tone}
                  />
                ) : null}
                {transaction.status === 'recurring' ? (
                  <StatusChip label="Recurring" tone="sage" />
                ) : null}
              </View>
            </View>
          </Card>
        ))}
      </View>
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
  filterText: {
    color: palette.muted,
    fontSize: 14,
    fontWeight: '700',
  },
  list: {
    gap: spacing.md,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
    paddingRight: spacing.md,
  },
  merchant: {
    color: palette.ink,
    fontSize: 18,
    fontWeight: '800',
  },
  meta: {
    color: palette.muted,
    fontSize: 14,
    marginTop: spacing.xs,
  },
  right: {
    alignItems: 'flex-end',
    gap: spacing.xs,
  },
  amount: {
    color: palette.ink,
    fontSize: 15,
    fontWeight: '700',
  },
});

