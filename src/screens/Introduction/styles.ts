import { ScrollViewProps, ImageProps } from 'react-native';
import styled, { css } from 'styled-components/native';

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
