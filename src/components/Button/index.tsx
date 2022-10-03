import React, { FC } from 'react';
import { PressableProps } from 'react-native';

import { StyledButton, StyledButtonProps } from './styles';

import { Text } from '@/components/Typography/Text';

type IButtonProps = PressableProps & StyledButtonProps;

const Button: FC<IButtonProps> = ({
  children,
  primary,
  secondary,
  tertiary,
  warning,
  buttonSize,
  ...rest
}) => {
  return (
    <StyledButton
      primary={primary}
      secondary={secondary}
      tertiary={tertiary}
      buttonSize={buttonSize}
      {...rest}
    >
      <Text
        weight="medium"
        size="xl"
        tertiary={tertiary}
        primary={primary}
        secondary={primary}
        warning={warning}
      >
        {children}
      </Text>
    </StyledButton>
  );
};

export default Button;
