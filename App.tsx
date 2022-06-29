/* eslint-disable react-native/no-inline-styles */
import { LogBox } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import useCachedResources from '@/hooks/useCachedResources';
import Main from '@/Main';
import { AppProvider } from '@/providers/AppProvider';

LogBox.ignoreLogs(['AsyncStorage has been extracted', 'Setting a timer']);

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppProvider>
        <Main />
      </AppProvider>
    </GestureHandlerRootView>
  );
}
