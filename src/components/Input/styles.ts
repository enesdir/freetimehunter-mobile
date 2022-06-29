import { shade, tint } from 'polished';
import { TextInputProps } from 'react-native';
import styled, { css } from 'styled-components/native';

interface IStyledTextInputProps {
  focused?: boolean;
}

export const StyledTextInput = styled.TextInput.attrs(
  ({ theme }): TextInputProps => ({
    placeholderTextColor: shade(0.4, theme.colors.text),
    selectionColor: theme.colors.primary,
    textAlign: 'left',
  }),
)<IStyledTextInputProps>`
  ${({ theme, focused }) => css`
    font-family: ${theme.fonts.family.medium};
    font-size: ${theme.fonts.sizes.sm};
    line-height: ${theme.gaps.lg};
    color: ${theme.colors.text};
    background-color: ${tint(0.1, theme.colors.background)};
    border-radius: 12px;
    border: 1px solid ${tint(0.2, focused ? theme.colors.primary : theme.colors.background)};
    padding-left: 16px;
    width: 100%;
    aspect-ratio: 6.06;
  `}
`;
