import styled, { css } from 'styled-components/native';

export const Container = styled.Pressable`
  ${({ theme }) => css`
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.text};
    border-radius: 15px;
    width: 100%;
    aspect-ratio: 6.06;
  `}
`;
