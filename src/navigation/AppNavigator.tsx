import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FC } from 'react';

import { TabStackParams } from '../types/navigation';

import { screenDefaultOptions, tabBarDefaultOptions } from './options';

import { useLanguage } from '@/providers/LocalizationProvider';
import Tasks from '@/screens/Tasks';
import UserTasks from '@/screens/UserTasks';

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const { Navigator, Screen } = createBottomTabNavigator<TabStackParams>();

const AppNavigator: FC = () => {
  const { translate } = useLanguage();
  return (
    <Navigator screenOptions={tabBarDefaultOptions} initialRouteName="Tasks">
      <Screen
        component={Tasks}
        name="Tasks"
        options={{ ...screenDefaultOptions, title: translate('tasks.headerTitle') }}
      />
      <Screen
        component={UserTasks}
        name="UserTasks"
        options={{ ...screenDefaultOptions, title: translate('userTasks.headerTitle') }}
      />
    </Navigator>
  );
};

export default AppNavigator;
