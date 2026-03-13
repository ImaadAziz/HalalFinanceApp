# Halal Finance Manager

Mobile-first halal personal finance app for Muslim professionals who want to budget, track spending, monitor halal investments, calculate zakat, and build savings with confidence.

## Recommended Stack

For this app, I recommend an MVP stack that is fast to ship but still clean enough to scale:

- Mobile app: Expo + React Native + TypeScript + Expo Router
- Server state: TanStack Query
- Client state: Zustand
- Forms and validation: React Hook Form + Zod
- Backend: Supabase
- Database: Postgres
- Auth: Supabase Auth
- Server logic: Supabase Edge Functions
- Banking and investment aggregation: Plaid
- Market and reference data: Polygon or Financial Modeling Prep
- Mobile builds: Expo EAS

## Why This Stack

- `Expo` is the best fit for a mobile-first MVP because it speeds up local development, native builds, and release workflows.
- `TypeScript` keeps product logic, screening rules, and scoring models safer as the app grows.
- `TanStack Query` is a strong fit for syncing transactions, holdings, goals, and analytics from APIs.
- `Supabase` gives us Postgres, auth, storage, and server-side functions without forcing us to build an entire backend from scratch on day one.
- `Plaid` is the most practical way to pull account, transaction, and investment account data into a consumer fintech MVP.
- A separate market/reference provider is still useful because Plaid is not meant to be the only source of deep stock fundamentals or screening data.

## Product Scope

Core MVP features:

- Onboarding
- Dashboard
- Budget tracker
- Transactions
- Halal stock screener
- Savings goals
- Insights
- Profile and settings
- Spending overview
- Zakat calculator
- Halal Portfolio Health Score

## Halal Portfolio Health Score

This feature gives users a quick view of how healthy their investment portfolio is from a halal-compliance perspective.

What it should show:

- Overall score from `0-100`
- Percent of portfolio value that is `halal`
- Percent that is `questionable`
- Percent that is `non-halal`
- Percent that is `unknown` or `needs refresh`
- Number of holdings in each category
- Top positions dragging down the score
- Last screening date

Suggested first-pass scoring model:

- `halal` holding weight = `1.0`
- `questionable` holding weight = `0.5`
- `unknown` holding weight = `0.25`
- `non-halal` holding weight = `0.0`
- Score = weighted average by market value, converted to `0-100`

Important product note:

- The score should be presented as a decision-support metric, not a fatwa or investment recommendation.
- Screening methodology should be visible and configurable later, such as `AAOIFI` or another approved ruleset.

## Suggested Architecture

Mobile app:

- Expo app with route groups for `auth`, `tabs`, and `modals`
- Shared design tokens for colors, spacing, type, and cards
- Query hooks for budgets, transactions, holdings, screenings, goals, and insights

Backend:

- Supabase Postgres for users, transactions, holdings, budgets, goals, screenings, and score snapshots
- Supabase Auth for mobile sign-in
- Edge Functions for:
  - Plaid token exchange and webhook handling
  - transaction sync
  - holdings sync
  - halal screening calculations
  - zakat calculations
  - portfolio health score recalculation

Data model highlights:

- `users`
- `accounts`
- `transactions`
- `budgets`
- `budget_categories`
- `holdings`
- `securities`
- `screening_results`
- `portfolio_scores`
- `savings_goals`
- `zakat_snapshots`
- `insight_events`

## MVP Development Order

1. App shell, auth, navigation, and design system
2. Budgeting and transactions
3. Savings goals and dashboard summaries
4. Plaid account linking
5. Halal stock screener
6. Halal Portfolio Health Score
7. Zakat calculator
8. Insights and polish

## Docs

- Product requirements: [docs/PRD.md](./docs/PRD.md)

## References

These recommendations were checked against current official docs:

- [Expo docs](https://docs.expo.dev/)
- [Expo create-app tutorial](https://docs.expo.dev/tutorial/create-your-first-app)
- [Expo new architecture guide](https://docs.expo.dev/guides/new-architecture)
- [TanStack Query docs](https://tanstack.com/query/docs)
- [TanStack Query React Native guide](https://tanstack.com/query/v4/docs/react/react-native)
- [Zod docs](https://zod.dev/)
- [Supabase docs](https://supabase.com/docs)
- [Supabase Edge Functions docs](https://supabase.com/docs/guides/functions)
- [NestJS docs](https://docs.nestjs.com/guides/enterprise)
- [Plaid Auth docs](https://plaid.com/docs/auth/)
- [Plaid Investments docs](https://plaid.com/docs/investments/)
- [Polygon docs](https://polygon.io/docs/)

## Trust and Compliance Notes

- This app should clearly state that it is not financial, legal, or religious advice.
- Halal screening methodology must be transparent.
- Sensitive financial data should be encrypted, minimized, and access-controlled.
- Any production launch should include a security review, privacy policy, and terms before public release.
