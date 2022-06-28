import { ReactNode } from 'react';
import { LocalizationProvider } from './LocalizationProvider';
import { SettingsProvider } from './SettingsProvider';
import { AppearanceProvider } from './AppearanceProvider';

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
