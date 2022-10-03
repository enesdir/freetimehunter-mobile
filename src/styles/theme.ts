import { Colors } from './colors';
import { gaps } from './gaps';
import { fonts } from './typography';

import { readonly } from '@/utils/readonly';
import { parseSize, size } from '@/utils/styleSizeHelpers';

const light = {
  colors: {
    ...Colors.common,
    background: Colors.light.background,
    secondaryBackground: Colors.light.secondaryBackground,
    primary: Colors.light.primary,
    secondary: Colors.light.secondary,
    brand: Colors.light.brand,
    text: Colors.light.text,
  },
  fonts,
  gaps,
  utils: {
    parseSize,
    size,
    readonly,
  },
};

const dark = {
  colors: {
    ...Colors.common,
    background: Colors.dark.background,
    secondaryBackground: Colors.dark.secondaryBackground,
    primary: Colors.dark.primary,
    secondary: Colors.dark.secondary,
    brand: Colors.dark.brand,
    text: Colors.dark.text,
  },
  fonts,
  gaps,
  utils: {
    parseSize,
    size,
    readonly,
  },
};
/**
 * Styles Guide @constant {object}
 * @readonly
 * @description UX-based project style guide used to extend the
 * @type {DefaultTheme} type from the @module styled-components library.
 */
export const themes = readonly({
  dark,
  light,
});
