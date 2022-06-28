import styled, { css } from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
  `}
`;

export const Divider = styled.View`
  ${({ theme }) => css`
    height: ${theme.gaps.xs};
  `}
`;

export const Fab = styled.Pressable`
  ${({ theme }) => css`
    position: absolute;
    bottom: ${theme.gaps.lg};
    right: ${theme.gaps.lg};
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primary};
    border-radius: 28px;
    height: 56px;
    width: 56px;
    overflow: hidden;
  `}
`;

export const AddIcon = styled(Ionicons).attrs({
  // color: ${theme.colors.background} ,
  name: 'add',
  size: 34,
})``;
