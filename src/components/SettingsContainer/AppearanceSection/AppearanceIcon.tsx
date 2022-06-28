import React, { FC } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useAppearance } from '@/providers/AppearanceProvider';
import { useTheme } from 'styled-components';
import { deviceDimensions } from '@/utils/device-dimensions';

type AppearanceIconsProps = {
  size: number;
};

const AppearanceIcon: FC<AppearanceIconsProps> = ({ size }): JSX.Element => {
  const theme = useTheme();
  const { appearance } = useAppearance();
  const iconSize = deviceDimensions(size);
  return (
    <Ionicons
      name={appearance === 'light' ? 'sunny' : 'moon'}
      color={appearance === 'light' ? theme.colors.orange : theme.colors.blue}
      size={iconSize}
    />
  );
};

export default AppearanceIcon;
