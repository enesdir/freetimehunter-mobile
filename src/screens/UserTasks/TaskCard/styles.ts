import { shade, tint } from 'polished';
import { TextProps } from 'react-native';
import styled, { css } from 'styled-components/native';

import { Colors } from '@/styles/colors';

type PriorityIndicatorProps = {
  level: number;
};

const priorityColors: { [name: number]: string } = {
  0: Colors.common.green,
  1: Colors.common.yellow,
  2: Colors.common.red,
};

export const Container = styled.View`
  ${({ theme }) => css`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${tint(0.1, theme.colors.background)};
    border-radius: ${theme.gaps.sm};
    padding-left: ${theme.gaps.sm};
    aspect-ratio: 8.6;
    width: 100%;
    overflow: hidden;
  `}
`;

export const CheckBox = styled.Pressable`
  ${({ theme }) => css`
    border: 2px solid ${tint(0.2, theme.colors.background)};
    border-radius: ${theme.gaps.lg};
    aspect-ratio: 1;
    height: 57%;
  `}
`;

export const Title = styled.Text.attrs(
  (): TextProps => ({
    numberOfLines: 1,
    style: {
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
  }),
)`
  ${({ theme }) => css`
    flex: 1;
    font-family: ${theme.fonts.family.regular};
    font-size: ${theme.fonts.sizes.lg};
    line-height: ${theme.gaps.xl};
    color: ${shade(0.4, theme.colors.text)};
    margin-left: ${theme.gaps.lg};
  `}
`;

export const PriorityIndicator = styled.View<PriorityIndicatorProps>`
  background-color: ${({ level }) => priorityColors[level]};
  height: 100%;
  width: ${({ theme }) => theme.gaps.xs};
`;
