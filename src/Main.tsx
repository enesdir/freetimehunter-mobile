import { RootNavigator } from '@/navigation';

import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import { useAppearance } from '@/providers/AppearanceProvider';
import { getNavigationTheme } from '@/styles/designSystem';

const Main: FC = () => {
  const { appearance } = useAppearance();
  return (
    <>
      <StatusBar translucent style={appearance} />
      <NavigationContainer theme={getNavigationTheme(appearance)}>
        <RootNavigator />
      </NavigationContainer>
    </>
  );
};
export default Main;
