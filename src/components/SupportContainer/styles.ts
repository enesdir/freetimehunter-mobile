import styled, { css } from 'styled-components/native';

export const Content = styled.View`
  height: 100%;
  flex: 1;
`;

export const SectionContainer = styled.View`
  flex: 1;
`;

type ButtonProps = { primary?: boolean };
type LabelProps = { primary?: boolean };

export const Button = styled.Pressable<ButtonProps>`
  ${({ primary, theme }) => css`
    align-items: center;
    justify-content: center;
    width: 100%;
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
