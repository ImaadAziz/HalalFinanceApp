import { ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { AppProviders } from '@/src/providers/app-providers';
import { navigationTheme } from '@/src/theme/navigation-theme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppProviders>
        <ThemeProvider value={navigationTheme}>
          <Stack
            screenOptions={{
              contentStyle: { backgroundColor: navigationTheme.colors.background },
              headerTintColor: navigationTheme.colors.text,
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: navigationTheme.colors.background,
              },
              headerTitleStyle: {
                fontSize: 18,
                fontWeight: '700',
              },
            }}>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="transactions" options={{ title: 'Transactions' }} />
            <Stack.Screen name="insights" options={{ title: 'Insights' }} />
          </Stack>
          <StatusBar style="dark" />
        </ThemeProvider>
      </AppProviders>
    </GestureHandlerRootView>
  );
}
