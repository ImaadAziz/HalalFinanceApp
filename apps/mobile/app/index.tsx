import { Redirect } from 'expo-router';

import { useAppStore } from '@/src/store/app-store';

export default function IndexRoute() {
  const onboardingComplete = useAppStore((state) => state.onboardingComplete);

  return <Redirect href={onboardingComplete ? '/(tabs)' : '/onboarding'} />;
}
