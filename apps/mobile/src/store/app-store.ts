import { create } from 'zustand';

type AppStore = {
  onboardingComplete: boolean;
  screeningMethodology: 'AAOIFI';
  setOnboardingComplete: (value: boolean) => void;
  setScreeningMethodology: (value: 'AAOIFI') => void;
};

export const useAppStore = create<AppStore>((set) => ({
  onboardingComplete: false,
  screeningMethodology: 'AAOIFI',
  setOnboardingComplete: (value) => set({ onboardingComplete: value }),
  setScreeningMethodology: (value) => set({ screeningMethodology: value }),
}));

