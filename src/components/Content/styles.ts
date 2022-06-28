import styled, { css } from 'styled-components/native';

export const Content = styled.View`
  ${({ theme }) => css`
    flex: 1;
    padding: 0 ${theme.gaps.lg} 0;
    background-color: ${theme.colors.background};
  `}
`;
