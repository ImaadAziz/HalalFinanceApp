import { calculatePortfolioHealth } from '@/src/features/portfolio/scoring';
import type {
  BudgetCategory,
  InsightItem,
  PortfolioHolding,
  SavingsGoal,
  TransactionItem,
  UserProfile,
} from '@/src/types/finance';

export const currentUser: UserProfile = {
  name: 'Imaan Ahmed',
  city: 'Chicago, IL',
  linkedAccounts: 3,
  methodology: 'AAOIFI',
};

export const dashboardSummary = {
  monthlySpend: 3240,
  monthlyBudget: 4100,
  spendDeltaLabel: '18% under budget',
  zakatEstimate: 612,
  savingsPace: 74,
};

export const budgetCategories: BudgetCategory[] = [
  { id: 'essentials', name: 'Essentials', spent: 1450, limit: 1850 },
  { id: 'giving', name: 'Sadaqah & giving', spent: 230, limit: 480 },
  { id: 'travel', name: 'Travel', spent: 520, limit: 840 },
  { id: 'dining', name: 'Dining', spent: 340, limit: 370 },
];

export const transactions: TransactionItem[] = [
  {
    id: 'tx-grocery',
    merchant: 'Fresh Market',
    category: 'Groceries',
    dateLabel: 'March 13',
    amount: -84,
  },
  {
    id: 'tx-giving',
    merchant: 'LaunchGood',
    category: 'Sadaqah',
    dateLabel: 'March 12',
    amount: -50,
  },
  {
    id: 'tx-brokerage',
    merchant: 'Brokerage transfer',
    category: 'Investing',
    dateLabel: 'March 12',
    amount: -200,
    status: 'questionable',
  },
  {
    id: 'tx-utilities',
    merchant: 'City Utilities',
    category: 'Utilities',
    dateLabel: 'March 10',
    amount: -126,
    status: 'recurring',
  },
];

export const holdings: PortfolioHolding[] = [
  {
    id: 'msft',
    ticker: 'MSFT',
    name: 'Microsoft',
    marketValue: 5800,
    status: 'halal',
    lastScreenedAt: '2026-03-13',
  },
  {
    id: 'nvda',
    ticker: 'NVDA',
    name: 'NVIDIA',
    marketValue: 4200,
    status: 'questionable',
    lastScreenedAt: '2026-03-13',
  },
  {
    id: 'ko',
    ticker: 'KO',
    name: 'Coca-Cola',
    marketValue: 2100,
    status: 'non-halal',
    lastScreenedAt: '2026-03-11',
  },
  {
    id: 'etf',
    ticker: 'XYZ',
    name: 'Legacy ETF',
    marketValue: 1600,
    status: 'unknown',
    lastScreenedAt: '2026-03-01',
  },
];

export const savingsGoals: SavingsGoal[] = [
  {
    id: 'emergency',
    name: 'Emergency fund',
    saved: 8200,
    target: 10000,
    monthlyContribution: 650,
    note: '4 months target',
  },
  {
    id: 'umrah',
    name: 'Umrah 2027',
    saved: 3680,
    target: 8000,
    monthlyContribution: 420,
    note: 'Family travel fund',
  },
];

export const insights: InsightItem[] = [
  {
    id: 'friday-spend',
    title: 'Friday spending is trending lower',
    summary: 'Mindful spending reminders reduced impulse purchases by 19% this month.',
    action: 'Keep the reminder active before Jumu’ah.',
    tone: 'emerald',
  },
  {
    id: 'budget-shift',
    title: 'Dining is close to the cap',
    summary: 'Move $120 from dining to your Umrah fund to stay aligned with both goals.',
    action: 'Rebalance this month’s budget.',
    tone: 'gold',
  },
  {
    id: 'portfolio-risk',
    title: 'Two holdings need a halal review',
    summary: 'Questionable and unknown positions now account for a meaningful share of your portfolio.',
    action: 'Refresh screening before your next contribution.',
    tone: 'rose',
  },
];

export const portfolioHealth = calculatePortfolioHealth(holdings);

