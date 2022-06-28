import React, { ReactNode } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import Scroll from '@/components/Scroll';

import { Content } from '@/components/Content';

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
