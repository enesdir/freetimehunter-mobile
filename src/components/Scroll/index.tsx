import React, { ReactNode } from 'react';
import { ScrollViewProps } from 'react-native';

import { StyledScrollView } from './styles';
interface ScrollProps extends ScrollViewProps {
  children: ReactNode;
}

const Scroll = ({ children, ...rest }: ScrollProps): JSX.Element => (
  <StyledScrollView
    keyboardShouldPersistTaps="handled"
    showsVerticalScrollIndicator={false}
    {...rest}
  >
    {children}
  </StyledScrollView>
);

export default Scroll;
