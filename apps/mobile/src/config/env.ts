const placeholderUrl = 'https://placeholder.supabase.co';
const placeholderKey = 'placeholder-anon-key';

export const env = {
  supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL ?? placeholderUrl,
  supabasePublishableKey:
    process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? placeholderKey,
  plaidEnv: process.env.EXPO_PUBLIC_PLAID_ENV ?? 'sandbox',
} as const;

export const hasSupabaseConfig =
  env.supabaseUrl !== placeholderUrl &&
  env.supabasePublishableKey !== placeholderKey;

