# Product Requirements Document

## Product Name

Halal Finance Manager

## Product Summary

Halal Finance Manager is a mobile-first fintech app that helps Muslim professionals manage their finances in a way that aligns with Islamic values. The product combines budgeting, transaction review, halal investment screening, savings goals, zakat support, and portfolio-level compliance health into one calm and trustworthy experience.

## Problem

Most finance apps help users optimize money, but they do not help Muslim users answer a more important question:

"Is the way I earn, spend, save, and invest aligned with my values?"

Users often need multiple tools to:

- budget monthly spending
- track transactions
- review investment holdings
- screen stocks for halal compliance
- estimate zakat
- decide which holdings need attention

That creates friction, confusion, and low trust.

## Vision

Build the most practical halal personal finance companion for everyday Muslims, starting with a clean MVP that makes budgeting and halal investing easier to understand and act on.

## Target Users

Primary user:

- Muslim professionals with income, savings, and beginner-to-intermediate investing activity

Secondary users:

- Muslim couples or families managing goals together
- Young professionals building first halal portfolios
- Users who already use traditional budgeting apps but want halal-aware financial guidance

## Goals

- Help users understand their spending clearly
- Help users stay on budget
- Help users identify whether investments are halal, questionable, or non-halal
- Help users estimate zakat using app-linked data
- Help users save toward meaningful goals
- Help users see portfolio-level halal health, not just single-stock screening results

## Non-Goals For MVP

- Direct brokerage execution
- Tax filing
- Full accounting workflows
- Scholar marketplace
- Full family or household role management
- International market support beyond the first supported region

## Design Principles

- Modern fintech
- Minimal
- Trustworthy but warm
- Soft greens, cream, and gold accents
- Rounded UI elements
- Clean typography
- Calm over noisy
- Guidance over judgment

## Success Metrics

Product success metrics for the MVP:

- 7-day onboarding completion rate
- Weekly active users
- Budget creation rate
- Plaid account-link completion rate
- Number of holdings screened
- Number of users who return to review portfolio health
- Savings goal adoption
- Zakat calculator usage

## Recommended Tech Stack

Recommended MVP stack:

- Mobile: Expo + React Native + TypeScript + Expo Router
- Server state: TanStack Query
- Client state: Zustand
- Validation: Zod
- Forms: React Hook Form
- Backend: Supabase
- Database: Postgres
- Auth: Supabase Auth
- Server functions: Supabase Edge Functions
- Aggregation: Plaid
- Market and security data: Polygon or Financial Modeling Prep

Reasoning:

- This stack is fast for a solo founder or small team.
- It supports iOS and Android from one codebase.
- It keeps product data relational and queryable in Postgres.
- It gives enough backend structure for secure business logic without forcing a full microservice architecture on day one.
- It leaves room to move complex screening or scoring logic into a dedicated API later if needed.

## Core Product Modules

### 1. Onboarding

Purpose:

- Explain product value clearly
- Set trust expectations
- Capture basic user intent and setup preferences

Requirements:

- Intro slides for budgeting, halal investing, zakat, and goals
- Account creation and login
- Optional preference setup
- Optional compliance methodology selection placeholder

Success criteria:

- User completes onboarding in under 3 minutes

### 2. Dashboard

Purpose:

- Give users a fast overview of financial health

Requirements:

- Current month spending summary
- Budget progress snapshot
- Savings goal progress
- Zakat reminder or estimate
- Portfolio Health Score preview
- Quick actions

### 3. Budget Tracker

Purpose:

- Help users set and monitor spending plans

Requirements:

- Monthly budget total
- Category budgets
- Category progress bars
- Over-budget alerts
- Manual or synced transaction rollups

### 4. Transactions

Purpose:

- Let users review activity clearly and correct categorization

Requirements:

- Transaction list with search and filters
- Merchant, amount, date, account
- Category tagging
- Recurring transaction markers
- Compliance review flags for suspicious investment-related activity

### 5. Halal Stock Screener

Purpose:

- Screen individual stocks for halal compliance

Requirements:

- Search by ticker or company name
- Screening result badge:
  - halal
  - questionable
  - non-halal
  - unknown
- Reasoning breakdown
- Business activity notes
- Financial ratio notes
- Last-updated timestamp

Important note:

- Screening methodology must be clearly attributed and versioned.

### 6. Savings Goals

Purpose:

- Help users save with intention

Requirements:

- Create named goals
- Track current saved amount
- Show projected completion date
- Suggest contribution adjustments
- Support goals like emergency fund, Umrah, Hajj, home, debt payoff

### 7. Insights

Purpose:

- Turn raw data into clear guidance

Requirements:

- Weekly or monthly spending insights
- Budget risk warnings
- Savings nudges
- Zakat reminders
- Portfolio warnings when questionable holdings rise

### 8. Profile and Settings

Purpose:

- Give users control over preferences and trust settings

Requirements:

- Profile management
- Linked account management
- Notification preferences
- Preferred halal screening methodology
- Zakat reminder settings
- Security settings

### 9. Zakat Calculator

Purpose:

- Help users estimate zakat from tracked data

Requirements:

- Cash and cash-equivalent inputs
- Investment inputs
- Custom manual adjustments
- Nisab reference support
- Estimated zakat due
- Saved snapshots over time

Important note:

- Zakat outputs must be framed as estimates and allow user review.

## New Feature: Halal Portfolio Health Score

### Purpose

Give users a single portfolio-level measure of how aligned their holdings are with halal investing principles.

### User Problem

Users may screen single stocks individually, but still not know whether their overall portfolio is in good shape. They need a quick answer to:

- How much of my portfolio is clearly halal?
- How much is questionable?
- How much needs attention right now?

### User Value

- Easier decision-making
- Higher confidence in portfolio review
- Clear prioritization of what to fix first

### Feature Requirements

Inputs:

- Linked investment accounts
- Holdings with current market value
- Security-level screening status
- Last screening timestamp

Output:

- Overall Health Score from `0-100`
- Portfolio status label:
  - Strong
  - Mixed
  - Needs attention
- Breakdown by value:
  - halal
  - questionable
  - non-halal
  - unknown
- Breakdown by holding count
- Top negative contributors
- Recommended actions
- Last refresh date

### Suggested Score Model

First MVP formula:

- `halal = 1.0`
- `questionable = 0.5`
- `unknown = 0.25`
- `non_halal = 0.0`

Formula:

- `score = round(100 * sum(market_value * status_weight) / total_market_value)`

Example:

- 70 percent halal
- 20 percent questionable
- 10 percent non-halal

Result:

- `score = 70 + 10 + 0 = 80`

### Score Bands

- `85-100`: Strong
- `60-84`: Mixed
- `0-59`: Needs attention

### UX Requirements

On dashboard:

- Show summary card with score and trend

On invest tab:

- Show score details page
- Show stacked allocation bar
- Show holding list grouped by status
- Show actions such as:
  - Review questionable holdings
  - Replace non-halal holdings
  - Refresh stale screenings

### Rules and Trust

- Score must be based on disclosed methodology
- Score is informational, not a fatwa
- User must be able to inspect why a holding is classified a certain way
- If data is stale, the UI should reduce confidence and show that clearly

## Data Model

Recommended first-pass tables:

- `users`
- `institutions`
- `accounts`
- `transactions`
- `transaction_categories`
- `budgets`
- `budget_category_limits`
- `savings_goals`
- `holdings`
- `securities`
- `screening_methods`
- `screening_results`
- `portfolio_score_snapshots`
- `zakat_snapshots`
- `insight_events`

## Integrations

### Plaid

Use for:

- bank account linking
- transaction sync
- investment account linking
- holdings data

### Market and Fundamentals Provider

Use for:

- ticker metadata
- price data
- sector and business metadata
- fundamentals needed for halal screening logic

## Security and Trust Requirements

- Encrypt secrets and sensitive credentials
- Apply strict Row Level Security on user financial data
- Minimize PII stored in the app database
- Use secure token exchange for aggregation providers
- Log screening updates and scoring events for auditability
- Publish a clear disclaimer and methodology page before public launch

## MVP Release Criteria

To be launch-ready, the MVP should have:

- working auth
- onboarding flow
- account linking
- transaction sync
- budget tracking
- individual stock screener
- portfolio health score
- savings goals
- zakat calculator
- basic insights
- privacy policy and terms

## Roadmap

### Phase 1

- App shell
- Navigation
- Auth
- Design system

### Phase 2

- Transactions
- Budgets
- Dashboard

### Phase 3

- Plaid linking
- Holdings sync
- Individual stock screener

### Phase 4

- Halal Portfolio Health Score
- Zakat calculator
- Insights

### Phase 5

- Notifications
- Shared goals
- Web admin panel
- Methodology settings

## Open Questions

- Which halal screening methodology should be the default at launch?
- Will the first release support only U.S. equities?
- Should users be allowed to manually override questionable holdings for personal tracking?
- Do we want a manual-only mode for privacy-sensitive users who do not want to link accounts?

## References

- [Expo docs](https://docs.expo.dev/)
- [TanStack Query docs](https://tanstack.com/query/docs)
- [Zod docs](https://zod.dev/)
- [Supabase docs](https://supabase.com/docs)
- [NestJS docs](https://docs.nestjs.com/guides/enterprise)
- [Plaid Auth docs](https://plaid.com/docs/auth/)
- [Plaid Investments docs](https://plaid.com/docs/investments/)
- [Polygon docs](https://polygon.io/docs/)
