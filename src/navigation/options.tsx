import { Platform } from 'react-native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { colors } from '@/styles/color';
import { fonts } from '@/styles/typography';
import type { TabScreenOptions } from '@/types/navigation';
import TabBarIcon from '@/components/TabBarIcon';

export const tabBarDefaultOptions: TabScreenOptions = ({ route }) => ({
  headerTitleAlign: 'center',
  headerShadowVisible: false,
  headerTitleStyle: {
    fontFamily: fonts.family.bold,
    fontSize: 16,
    lineHeight: 24,
  },
  tabBarShowLabel: false,
  tabBarIcon: ({ color, focused, size }) => (
    <TabBarIcon routeName={route.name} focused={focused} size={size} color={color} />
  ),
});

export const screenDefaultOptions = (): NativeStackNavigationOptions => ({
  headerShadowVisible: false,
  headerTintColor: colors.primary,
  orientation: 'portrait',

  // this setup makes large title work on iOS
  ...Platform.select({
    ios: {
      headerLargeTitle: true,
      headerTransparent: true,
    },
  }),
});
