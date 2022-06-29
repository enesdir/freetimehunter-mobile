import { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import SupportContainer from '@/components/SupportContainer';

const Support: FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SupportContainer />
    </SafeAreaView>
  );
};

export default Support;
