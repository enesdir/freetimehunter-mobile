import { tint } from 'polished';
import styled, { css } from 'styled-components/native';

export const ButtonContainer = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    aspect-ratio: 5.6;
    width: 100%;
    border-radius: 16.25px;
    background-color: ${tint(0.1, theme.colors.secondaryBackground)};
    overflow: hidden;
  `}
`;
