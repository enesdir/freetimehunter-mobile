import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { RouteProp, NavigatorScreenParams } from '@react-navigation/native';

export type TabStack = 'Tasks' | 'UserTasks';
export type CommonStack = 'Settings' | 'Support';
export type OnboardStack = 'Introduction' | CommonStack;

// Implement auth later
export type OnboardStackParams = {
  [key in OnboardStack]: undefined;
};

export type TabStackParams = {
  [key in TabStack]: undefined;
};

//export type RootStackParams = AuthStackParams & TabsParams;

export type TabScreenOptions = (props: {
  route: RouteProp<TabStackParams>;
}) => BottomTabNavigationOptions;

export type RootStackParams = {
  App: NavigatorScreenParams<TabStackParams> | undefined;
  Onboard: NavigatorScreenParams<OnboardStackParams> | undefined;
};
