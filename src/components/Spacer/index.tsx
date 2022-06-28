import styled from 'styled-components/native';

interface SpaceProps {
  size: number;
  horizontal?: boolean;
}

const Spacer = styled.View<SpaceProps>`
  ${({ theme, horizontal, size }) =>
    horizontal ? `width: ${theme.utils.size(size / 4)}` : `height: ${theme.utils.size(size / 4)}`}
`;

export default Spacer;
