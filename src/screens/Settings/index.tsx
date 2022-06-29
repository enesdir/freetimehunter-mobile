import { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import SettingsContainer from '@/components/SettingsContainer';

const Settings: FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SettingsContainer />
    </SafeAreaView>
  );
};

export default Settings;
