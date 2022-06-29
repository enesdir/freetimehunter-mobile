import { Ionicons } from '@expo/vector-icons';
import React from 'react';

import type { TabStack } from '@/types/navigation';

import { tabBarIcons } from '@/navigation/constants';

export type TabBarIconProps = {
  color?: string;
  size?: number;
  routeName: TabStack;
  focused: boolean;
};

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
export default function TabBarIcon({ routeName, focused, color, size }: TabBarIconProps) {
  const { onFocusIcon, onBlurIcon } = tabBarIcons[routeName];
  const iconName = focused ? onFocusIcon : onBlurIcon;

  return <Ionicons name={iconName} color={color} size={size} />;
}
