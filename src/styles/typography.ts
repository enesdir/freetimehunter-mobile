import { SizesRecordType } from '@/types/typography';
import { readonly } from '@/utils/readonly';
import { size } from '@/utils/styleSizeHelpers';

const fontSizes: SizesRecordType = {
  xs: size(6),
  sm: size(10),
  md: size(12),
  lg: size(14),
  xl: size(16),
  '2xl': size(22),
  '3xl': size(24),
  '4xl': size(28),
  '5xl': size(32),
  '6xl': size(36),
};

export const fonts = {
  sizes: fontSizes,
  family: {
    bold: 'poppinsSemiBold',
    regular: 'poppinsRegular',
    medium: 'poppinsMedium',
  },
};
