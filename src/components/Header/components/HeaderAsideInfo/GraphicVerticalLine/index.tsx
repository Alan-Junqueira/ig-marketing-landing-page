import { GraphicVerticalLineContainer } from './styled';

type GraphicVerticalLineProps = {
  heigthpx: number;
};

export const GraphicVerticalLine = ({ heigthpx }: GraphicVerticalLineProps) => {
  return (
    <GraphicVerticalLineContainer
      heightpx={heigthpx}
    ></GraphicVerticalLineContainer>
  );
};
