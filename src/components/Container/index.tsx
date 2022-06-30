import React, { ReactNode } from 'react';
import { Platform } from 'react-native';

import { StyledKeyboardAvoidingView } from './styles';

import { Content } from '@/components/Content';
import Scroll from '@/components/Scroll';

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps): JSX.Element => (
  <StyledKeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} enabled>
    <Content>
      <Scroll>{children}</Scroll>
    </Content>
  </StyledKeyboardAvoidingView>
);

export default Container;
