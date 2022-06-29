import React, { FC } from 'react';
import { PressableProps } from 'react-native';

import { Container } from './styles';

import { Text } from '@/components/Typography/Text';
interface IButtonProps extends PressableProps {
  label: string;
}

const Button: FC<IButtonProps> = ({ label, ...rest }) => (
  <Container {...rest}>
    <Text weight="medium" size="xl" tertiary>
      {label}
    </Text>
  </Container>
);

export default Button;
