import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';
import { tint } from 'polished';

import { Colors } from './colors';
import { AppearanceType } from '../types/ui';

export const getNavigationTheme = (appearance: AppearanceType): Theme => {
  // for more information - https://reactnavigation.org/docs/themes
  const MyDefaultTheme: Theme = {
    dark: false,
    colors: {
      ...DefaultTheme.colors,
      primary: Colors.light.primary,
      background: Colors.light.background,
      card: tint(0.1, Colors.light.background),
      text: Colors.light.text,
      // border: Colors.,
      notification: Colors.light.primary,
    },
  };

  const MyDarkTheme: Theme = {
    dark: true,
    colors: {
      ...DarkTheme.colors,
      primary: Colors.dark.primary,
      background: Colors.dark.background,
      card: tint(0.1, Colors.dark.background),
      text: Colors.dark.text,
      // border: Colors.,
      notification: Colors.dark.primary,
    },
  };

  switch (appearance) {
    case 'dark':
      return MyDarkTheme;
    case 'light':
      return MyDefaultTheme;
  }
};
