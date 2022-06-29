import { ScrollViewProps, ImageProps } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView.attrs(
  (): ScrollViewProps => ({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      flex: 1,
    },
  }),
)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 32px 16px 32px;
`;

export const Banner = styled.Image.attrs(
  (): ImageProps => ({
    source: require('@/assets/images/banner.png'),
    resizeMode: 'contain',
  }),
)`
  width: 100%;
  margin-bottom: 20px;
  aspect-ratio: 1.81;
`;
