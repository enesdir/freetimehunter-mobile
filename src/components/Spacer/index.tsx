import styled from 'styled-components/native';

interface SpaceProps {
  size: number;
  horizontal?: boolean;
}

const Spacer = styled.View<SpaceProps>`
  ${({ theme, horizontal, size }) =>
    horizontal ? `width: ${theme.utils.size(size)}` : `height: ${theme.utils.size(size)}`}
`;

export default Spacer;
