import styled from 'styled-components';

interface IGraphicVerticalLineContainer {
  heightpx: number
}

export const GraphicVerticalLineContainer = styled.div<IGraphicVerticalLineContainer>`
  width: .625rem;
  height: ${props => props.heightpx}rem;
  background-color: ${props => props.theme.colors['dark-blue-500']};
  border-radius: 8px 8px 0 0 ;
`;