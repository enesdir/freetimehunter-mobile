import styled, { css } from 'styled-components/native';
import { tint } from 'polished';

type ButtonProps = { primary?: boolean };
type LabelProps = { primary?: boolean };

export const Container = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    aspect-ratio: 5.6;
    width: 100%;
    border-radius: 16.25px;
    background-color: ${tint(0.1, theme.colors.background)};
    overflow: hidden;
    margin-top: 20%;
  `}
`;

export const Button = styled.Pressable<ButtonProps>`
  ${({ primary, theme }) => css`
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
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
