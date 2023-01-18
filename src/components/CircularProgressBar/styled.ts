import styled, { css } from 'styled-components';

interface ICircularProgressContainer {
  percentage: number;
  percentageDegree: number;
  size: number;
}

export const CircularProgressContainer = styled.div<ICircularProgressContainer>`
  position: relative;
  display: block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;

  border-radius: 50%;

  background: linear-gradient(
      to ${(props) => (props.percentage < 51 ? 'right' : 'left')},
      ${(props) => (props.percentage < 51 ? '#F5F5F5' : '#DE2879')} 50%,
      transparent 50%,
      transparent
    ),
    linear-gradient(
      ${(props) => props.percentageDegree}deg,
      #de2879 50%,
      #f5f5f5 50%
    );
  box-shadow: 0px 21.621px 40px rgba(0, 0, 0, 0.1);

  &::before {
    position: absolute;
    align-items: center;
    background-color: #fff;
    border-radius: 50%;
    content: '${(props) => props.percentage}%';
    display: inline-flex;
    font-size: ${props => props.theme.fontSize.base};;
    height: 100%;
    justify-content: center;
    transform: scale(0.8);
    width: 100%;
  }
`;
