import styled from 'styled-components';

export const GraphicHorizontalLineContainer = styled.span`
  display: flex;
  align-items: flex-end;
  gap: 1rem;

  font-family: 'Inter';
  font-size: 1rem;
  line-height: 1.2rem;

  color: ${(props) => props.theme.colors['gray-700']};

  div {
    height: 1px;
    width: 100%;
    background-color: ${(props) => props.theme.colors['white-400']};
    margin-bottom: 0.4rem;
  }
`;
