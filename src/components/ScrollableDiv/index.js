import styled from 'styled-components';

export const ScrollableDiv = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  min-width: ${props => props.width}px;
  min-height: ${props => props.height}px;
  overflow: scroll;
`;

export default ScrollableDiv;
