import { Ionicons } from '@expo/vector-icons';

import type { Tabs } from '@/types/navigation';

type TabBarIcons = {
  [screenName in Tabs]: {
    onFocusIcon: keyof typeof Ionicons.glyphMap;
    onBlurIcon: keyof typeof Ionicons.glyphMap;
  };
};

export const tabBarIcons: TabBarIcons = {
  Tasks: {
    onFocusIcon: 'checkmark-done-circle',
    onBlurIcon: 'checkmark-done-circle-outline',
  },
  UserTasks: {
    onFocusIcon: 'person-circle',
    onBlurIcon: 'person-circle-outline',
  },
};
