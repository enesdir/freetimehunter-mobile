import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Introduction from '@/screens/Introduction';
import { OnboardStackParams } from '../types/navigation';
import { FC } from 'react';
import Support from '@/screens/Support';
import { useLanguage } from '@/providers/LocalizationProvider';
import Settings from '@/screens/Settings';

const { Navigator, Screen } = createNativeStackNavigator<OnboardStackParams>();

const OnboardNavigator: FC = () => {
  const { translate } = useLanguage();
  return (
    <Navigator
      initialRouteName="Introduction"
      screenOptions={{
        headerShadowVisible: false,
        title: '',
      }}
    >
      <Screen component={Introduction} name="Introduction" options={{ headerShown: false }} />
      <Screen
        component={Support}
        name="Support"
        options={{ headerShown: true, headerTitle: translate('support.headerTitle') }}
      />
      <Screen
        component={Settings}
        name="Settings"
        options={{ headerShown: true, headerTitle: translate('settings.headerTitle') }}
      />
    </Navigator>
  );
};

export default OnboardNavigator;
