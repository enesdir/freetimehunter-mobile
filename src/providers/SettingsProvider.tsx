import { useEffect, useState, ReactNode, useCallback, useMemo } from 'react';
import { loadObject, saveObject, loadString, saveString } from '@/utils/storage';
import { createCtx } from './createCtx';

type SettingsProviderProps = {
  children: ReactNode;
};

type SettingsContextData = {
  isDisabledOnboard: boolean | null;
  setDisableOnboard: () => Promise<void>;
};
const [useCtx, Provider] = createCtx<SettingsContextData>();

function SettingsProvider({ children }: SettingsProviderProps) {
  const [isDisabledOnboard, setIsDisabledOnboard] = useState<boolean | null>(null);

  const getStoredDisableOnboard = useCallback(async () => {
    try {
      const storageSettings = await loadString('ISDISABLEONBOARD_VALUE');
      if (storageSettings === null) {
        setIsDisabledOnboard(false);
      } else {
        setIsDisabledOnboard(true);
      }
    } catch (error) {
      __DEV__ && console.log('Error: Getting store settings');
    }
  }, []);

  const setStoredDisableOnboard = useCallback(async (setting: any) => {
    try {
      await saveString('ISDISABLEONBOARD_VALUE', setting);
    } catch (error) {
      __DEV__ && console.log('Error: Set store settings');
    }
  }, []);

  const setDisableOnboard = useCallback(async () => {
    setIsDisabledOnboard(true);
    setStoredDisableOnboard('true');
  }, [setStoredDisableOnboard]);

  useEffect(() => {
    getStoredDisableOnboard();
  }, []);

  const contextValue = useMemo(() => {
    return {
      isDisabledOnboard,
      setDisableOnboard,
    };
  }, [isDisabledOnboard, setDisableOnboard]);

  return <Provider value={contextValue}>{children}</Provider>;
}

export { useCtx as useSettings, SettingsProvider };
