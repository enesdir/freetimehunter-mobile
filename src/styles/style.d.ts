import { DefaultTheme } from 'styled-components/native';

import { themes } from './theme';

/**
 * @description Extend the default types of the styled-components theme
 * to add IntelliSense support and get the types in the use of styled-components.
 * @module StyledComponents
 */
declare module 'styled-components' {
  type Theme = typeof themes.light;
  export interface DefaultTheme extends Theme {
    [key: string]: any;
  }
}
