import { tint } from 'polished';
import styled, { css } from 'styled-components/native';

export const LabelContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SwitchCircleInner = styled.View`
  ${({ theme }) => css`
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    height: ${theme.utils.size(26)};
    width: ${theme.utils.size(70)};
    background-color: ${tint(0.1, theme.colors.background)};
    box-shadow: 0px 20px 20px ${theme.colors.background};
    position: relative;
  `}
`;

export const SwitchButtonContainer = styled.View`
  align-items: center;
`;
