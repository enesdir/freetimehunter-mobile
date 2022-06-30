import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FC } from 'react';

import AppNavigator from './AppNavigator';
import AuthNavigator from './OnboardNavigator';

import { useSettings } from '@/providers/SettingsProvider';
import { RootStackParams } from '@/types/navigation';

const RootStack = createNativeStackNavigator<RootStackParams>();

const RootNavigator: FC = () => {
  const { isDisabledOnboard } = useSettings();

  if (isDisabledOnboard === null) {
    return null;
  }
  return (
    <RootStack.Navigator initialRouteName={isDisabledOnboard ? 'App' : 'Onboard'}>
      <RootStack.Screen name="Onboard" component={AuthNavigator} options={{ headerShown: false }} />
      <RootStack.Screen name="App" component={AppNavigator} options={{ headerShown: false }} />
    </RootStack.Navigator>
  );
};

export { RootNavigator };
