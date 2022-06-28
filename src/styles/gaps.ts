import { readonly } from '@/utils/readonly';
import { size } from '@/utils/styleSizeHelpers';
import { SizesRecordType } from '@/types/typography';
/**
 * Gaps @constant {object}
 * @readonly
 * @description Use for padding, margins, or anything you need to set spaces between elements.
 */
export const gaps: SizesRecordType = readonly({
  xs: size(4),
  sm: size(8),
  md: size(12),
  lg: size(16),
  xl: size(24),
  '2xl': size(32),
  '3xl': size(36),
  '4xl': size(40),
  '5xl': size(42),
  '6xl': size(50),
});
