import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.background};
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.regular};
    font-size: ${theme.fonts.sizes.xl};
    line-height: ${theme.gaps.xl};
    color: ${theme.colors.text};
  `}
`;
