import styled, { css } from 'styled-components/native';

import { Text } from './Text';

export const Title = styled(Text).attrs(() => ({ weight: 'bold', size: '6xl' }))`
  ${({ theme }) => css`
    line-height: ${theme.gaps['5xl']};
    text-align: center;
    margin-bottom: 20px;
    width: 100%;
  `}
`;
