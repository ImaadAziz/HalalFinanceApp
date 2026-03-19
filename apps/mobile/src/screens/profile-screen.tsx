import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '@/src/components/ui/button';
import { Card } from '@/src/components/ui/card';
import { AppScreen } from '@/src/components/ui/screen';
import { env, hasSupabaseConfig } from '@/src/config/env';
import { currentUser } from '@/src/mocks/finance';
import { useAppStore } from '@/src/store/app-store';
import { palette, radius, spacing } from '@/src/theme/tokens';

const settings = [
  ['Methodology', currentUser.methodology],
  ['Linked accounts', String(currentUser.linkedAccounts)],
  ['Biometric login', 'Planned'],
  ['Notifications', 'Weekly insights + zakat'],
] as const;

export default function ProfileScreen() {
  const router = useRouter();
  const setOnboardingComplete = useAppStore((state) => state.setOnboardingComplete);

  return (
    <AppScreen>
      <Card tone="accent">
        <View style={styles.profileRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>IM</Text>
          </View>
          <View>
            <Text style={styles.name}>{currentUser.name}</Text>
            <Text style={styles.city}>{currentUser.city}</Text>
          </View>
        </View>
      </Card>

      <Card>
        <Text style={styles.eyebrow}>Preferences</Text>
        <View style={styles.settingsStack}>
          {settings.map(([label, value]) => (
            <View key={label} style={styles.settingRow}>
              <Text style={styles.settingLabel}>{label}</Text>
              <Text style={styles.settingValue}>{value}</Text>
            </View>
          ))}
        </View>
      </Card>

      <Card tone="soft">
        <Text style={styles.eyebrow}>Developer setup</Text>
        <View style={styles.settingsStack}>
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Supabase</Text>
            <Text style={styles.settingValue}>{hasSupabaseConfig ? 'Configured' : 'Add env vars'}</Text>
          </View>
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Plaid environment</Text>
            <Text style={styles.settingValue}>{env.plaidEnv}</Text>
          </View>
        </View>
      </Card>

      <Button
        label="Replay onboarding"
        tone="secondary"
        onPress={() => {
          setOnboardingComplete(false);
          router.replace('/onboarding');
        }}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  profileRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.md,
  },
  avatar: {
    alignItems: 'center',
    backgroundColor: palette.emerald,
    borderRadius: radius.lg,
    height: 64,
    justifyContent: 'center',
    width: 64,
  },
  avatarText: {
    color: palette.white,
    fontSize: 20,
    fontWeight: '800',
  },
  name: {
    color: palette.ink,
    fontSize: 24,
    fontWeight: '800',
  },
  city: {
    color: palette.muted,
    fontSize: 14,
    marginTop: spacing.xs,
  },
  eyebrow: {
    color: palette.emerald,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  settingsStack: {
    gap: spacing.md,
    marginTop: spacing.lg,
  },
  settingRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  settingLabel: {
    color: palette.muted,
    fontSize: 15,
  },
  settingValue: {
    color: palette.ink,
    fontSize: 15,
    fontWeight: '700',
  },
});

