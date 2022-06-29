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
  ${({ theme, weight = 'regular', size = 'xl', primary, secondary, warning, tertiary }) => css`
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
    ${warning &&
    css`
      color: ${theme.colors.text};
    `}
    ${tertiary &&
    css`
      color: ${theme.colors.background};
      line-height: ${theme.gaps.lg};
    `}
  `}
`;

export const LargeText = styled(Text)`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes['3xl']};
  `}
`;
export const Title = styled(Text).attrs(() => ({ weight: 'bold', size: '6xl' }))`
  ${({ theme }) => css`
    line-height: ${theme.gaps['5xl']};
    text-align: center;
    margin-bottom: 20px;
    width: 100%;
  `}
`;
