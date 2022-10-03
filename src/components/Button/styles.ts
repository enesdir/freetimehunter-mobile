import styled, { css } from 'styled-components/native';

export type ButtonSize = 'full' | 'semi' | 'semiWidth' | 'semiHeight';
export interface StyledButtonProps {
  primary?: boolean;
  secondary?: boolean;
  warning?: boolean;
  tertiary?: boolean;
  buttonSize?: ButtonSize;
}

export const StyledButton = styled.Pressable<StyledButtonProps>`
  ${({ theme, primary = true, secondary, warning, tertiary, buttonSize = 'full' }) => css`
    width: 100%;
    height: 100%;
    border-radius: ${theme.gaps.lg};
    justify-content: center;
    align-items: center;
    ${primary &&
    css`
      background-color: ${theme.colors.secondary};
    `}
    ${secondary &&
    css`
      background-color: 'transparent';
    `}
    ${tertiary &&
    css`
      background-color: ${theme.colors.brand};
    `}
    ${warning &&
    css`
      background-color: ${theme.colors.text};
    `}
    ${buttonSize === 'full' &&
    css`
      width: 100%;
      height: 100%;
    `}
    ${buttonSize === 'semi' &&
    css`
      width: 50%;
      height: 50%;
    `}
    ${buttonSize === 'semiWidth' &&
    css`
      width: 50%;
      height: 100%;
    `}
    ${buttonSize === 'semiHeight' &&
    css`
      width: 100%;
      height: 50%;
    `}
  `}
`;
