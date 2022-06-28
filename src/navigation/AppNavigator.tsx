import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserTasks from '@/screens/UserTasks';
import Tasks from '@/screens/Tasks';
import { TabStackParams } from '../types/navigation';
import { FC } from 'react';

import { screenDefaultOptions, tabBarDefaultOptions } from './options';

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const { Navigator, Screen } = createBottomTabNavigator<TabStackParams>();

const AppNavigator: FC = () => (
  <Navigator screenOptions={tabBarDefaultOptions} initialRouteName="Tasks">
    <Screen
      component={Tasks}
      name="Tasks"
      options={{ ...screenDefaultOptions, title: 'Tarefas' }}
    />
    <Screen component={UserTasks} name="UserTasks" />
  </Navigator>
);

export default AppNavigator;
