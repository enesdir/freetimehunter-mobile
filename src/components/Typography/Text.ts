import { shade } from 'polished';
import styled, { css } from 'styled-components/native';

import { FontWeightType, SizesType } from '@/types/typography';

export interface StyledTextProps {
  weight?: FontWeightType;
  size?: SizesType;
  primary?: boolean;
  secondary?: boolean;
  warning?: boolean;
  tertiary?: boolean;
}

export const Text = styled.Text<StyledTextProps>`
  ${({ theme, weight = 'regular', size = 'xl', primary, secondary, tertiary, warning }) => css`
    color: ${theme.colors.text};
    font-family: ${theme.fonts.family[weight]};
    font-size: ${theme.fonts.sizes[size]};
    line-height: ${theme.gaps.xl};
    ${primary &&
    css`
      color: ${theme.colors.text};
    `}
    ${secondary &&
    css`
      color: ${shade(0.5, theme.colors.text)};
    `}
    ${tertiary &&
    css`
      color: ${theme.colors.background};
    `}
    ${warning &&
    css`
      color: ${theme.colors.red};
    `}
  `}
`;
