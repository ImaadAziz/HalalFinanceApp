import type { HoldingStatus, PortfolioHolding } from '@/src/types/finance';

export const holdingStatusMeta: Record<
  HoldingStatus,
  { label: string; tone: 'emerald' | 'gold' | 'rose' | 'sage' }
> = {
  halal: { label: 'Halal', tone: 'emerald' },
  questionable: { label: 'Questionable', tone: 'gold' },
  'non-halal': { label: 'Non-halal', tone: 'rose' },
  unknown: { label: 'Unknown', tone: 'sage' },
};

const statusWeights: Record<HoldingStatus, number> = {
  halal: 1,
  questionable: 0.5,
  unknown: 0.25,
  'non-halal': 0,
};

const orderedStatuses: HoldingStatus[] = ['halal', 'questionable', 'non-halal', 'unknown'];

export function getPortfolioBand(score: number) {
  if (score >= 85) {
    return 'Strong';
  }

  if (score >= 60) {
    return 'Mixed';
  }

  return 'Needs attention';
}

export function calculatePortfolioHealth(holdings: PortfolioHolding[]) {
  const totalValue = holdings.reduce((sum, holding) => sum + holding.marketValue, 0);
  const safeTotal = totalValue || 1;

  const score = Math.round(
    (holdings.reduce(
      (sum, holding) => sum + holding.marketValue * statusWeights[holding.status],
      0
    ) /
      safeTotal) *
      100
  );

  const byStatus = orderedStatuses.map((status) => {
    const value = holdings
      .filter((holding) => holding.status === status)
      .reduce((sum, holding) => sum + holding.marketValue, 0);

    return {
      status,
      value,
      percentage: Math.round((value / safeTotal) * 100),
      count: holdings.filter((holding) => holding.status === status).length,
    };
  });

  const flaggedHoldings = [...holdings]
    .filter((holding) => holding.status !== 'halal')
    .sort((left, right) => right.marketValue - left.marketValue);

  const lastScreenedAt = [...holdings]
    .sort(
      (left, right) =>
        Date.parse(right.lastScreenedAt) - Date.parse(left.lastScreenedAt)
    )[0]?.lastScreenedAt;

  return {
    score,
    band: getPortfolioBand(score),
    totalValue,
    byStatus,
    flaggedHoldings,
    lastScreenedAt,
  };
}

