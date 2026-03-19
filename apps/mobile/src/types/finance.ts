export type HoldingStatus = 'halal' | 'questionable' | 'non-halal' | 'unknown';

export type BudgetCategory = {
  id: string;
  name: string;
  spent: number;
  limit: number;
};

export type TransactionItem = {
  id: string;
  merchant: string;
  category: string;
  dateLabel: string;
  amount: number;
  status?: HoldingStatus | 'recurring';
};

export type PortfolioHolding = {
  id: string;
  ticker: string;
  name: string;
  marketValue: number;
  status: HoldingStatus;
  lastScreenedAt: string;
};

export type SavingsGoal = {
  id: string;
  name: string;
  saved: number;
  target: number;
  monthlyContribution: number;
  note: string;
};

export type InsightItem = {
  id: string;
  title: string;
  summary: string;
  action: string;
  tone: 'emerald' | 'gold' | 'rose';
};

export type UserProfile = {
  name: string;
  city: string;
  linkedAccounts: number;
  methodology: 'AAOIFI';
};

