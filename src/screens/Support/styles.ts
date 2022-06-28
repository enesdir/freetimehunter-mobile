import styled, { css } from 'styled-components/native';
import { ScrollViewProps, ImageProps } from 'react-native';
type ButtonProps = { primary?: boolean };
type LabelProps = { primary?: boolean };

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.regular};
    font-size: ${theme.fonts.sizes.xl};
    line-height: ${theme.gaps.xl};
    color: ${theme.colors.text};
  `}
`;
export const Button = styled.Pressable<ButtonProps>`
  ${({ primary, theme }) => css`
    align-items: center;
    justify-content: center;
    width: 40%;
    height: 10%;
    border-radius: ${theme.gaps.lg};
    background-color: ${primary ? theme.colors.text : 'transparent'};
  `}
`;

export const Label = styled.Text<LabelProps>`
  ${({ primary, theme }) => css`
    font-family: ${theme.fonts.family.medium};
    font-size: ${theme.fonts.sizes.xl};
    line-height: ${theme.gaps.xl};
    color: ${primary ? theme.colors.background : theme.colors.text};
  `}
`;
