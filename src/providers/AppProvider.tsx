import { ReactNode } from 'react';

import { AppearanceProvider } from './AppearanceProvider';
import { LocalizationProvider } from './LocalizationProvider';
import { SettingsProvider } from './SettingsProvider';

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <AppearanceProvider>
      <LocalizationProvider>
        <SettingsProvider>{children}</SettingsProvider>
      </LocalizationProvider>
    </AppearanceProvider>
  );
}

export default AppProvider;
