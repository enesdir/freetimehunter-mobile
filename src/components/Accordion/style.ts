import styled, { css } from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
  flex-grow: 1;
`;

export const HeadingContainer = styled.View`
  ${({ theme }) => css`
    justify-content: 'space-between';
  `}
`;

export const Card = styled.View`
  flex-grow: 1;
`;
export const SubCategoriesList = styled.View`
  margin-top: ${({ theme }) => theme.gaps.xs};
`;

export const Divider = styled.View`
  border-bottom-color: 'grey';
  width: '100%';
`;
