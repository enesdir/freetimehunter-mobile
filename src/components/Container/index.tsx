import React, { ReactNode } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { Content } from '@/components/Content';
import Scroll from '@/components/Scroll';

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps): JSX.Element => (
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    enabled
  >
    <Content>
      <Scroll>{children}</Scroll>
    </Content>
  </KeyboardAvoidingView>
);

export default Container;
