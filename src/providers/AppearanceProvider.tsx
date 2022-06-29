import React, { useEffect, useState, ReactNode, useCallback, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';

import { createCtx } from './createCtx';

import { themes } from '@/styles/theme';
import { AppearanceType } from '@/types/ui';
import { loadString, saveString } from '@/utils/storage';

type AppearanceProviderProps = {
  children: ReactNode;
};

type AppearanceContextData = {
  appearance: AppearanceType;
  toggleAppearance: () => Promise<void>;
};

const [useCtx, Provider] = createCtx<AppearanceContextData>();

function AppearanceProvider({ children }: AppearanceProviderProps) {
  const systemTheme = useColorScheme() as AppearanceType;
  const appearanceKeyName = 'APPEARANCE_VALUE';
  const [appearance, setAppearrance] = useState<AppearanceType>(systemTheme);

  const getStoredAppearance = useCallback(async () => {
    try {
      const storageAppearance = await loadString(appearanceKeyName);
      // @ts-expect-error: Let's ignore a compile error
      storageAppearance && setAppearrance(storageAppearance);
    } catch (error) {
      __DEV__ && console.error('Error: Getting store appearance');
    }
  }, []);

  const setStoredAppearance = useCallback(async (theme: AppearanceType) => {
    try {
      await saveString(appearanceKeyName, theme);
    } catch (error) {
      __DEV__ && console.log('Error: Set store settings');
    }
  }, []);

  const toggleAppearance = useCallback(async () => {
    const switchAppearance = appearance === 'light' ? 'dark' : 'light';
    setAppearrance(switchAppearance);
    setStoredAppearance(switchAppearance);
  }, [appearance, setStoredAppearance]);

  // For initial setting color mode from storage
  useEffect(() => {
    getStoredAppearance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contextValue = useMemo(() => {
    return {
      appearance,
      toggleAppearance,
    };
  }, [appearance, toggleAppearance]);

  return (
    <Provider value={contextValue}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <ThemeProvider theme={themes[appearance]}>{children}</ThemeProvider>
      </SafeAreaProvider>
    </Provider>
  );
}

export { useCtx as useAppearance, AppearanceProvider };
