import { ScrollViewProps, ImageProps } from 'react-native';
import styled, { css } from 'styled-components/native';

export const StyledScrollView = styled.ScrollView.attrs(
  (): ScrollViewProps => ({
    contentContainerStyle: {
      flex: 1,
      justifyContent: 'flex-start',
    },
  }),
)`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
    padding: ${theme.gaps.xl};
  `}
`;
