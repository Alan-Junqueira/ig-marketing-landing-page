import { GridFour, DownloadSimple } from 'phosphor-react';

import { InfoHeaderContainer } from './styled';

import instagramLogo from '/assets/images/logo-instagram.svg';

type InfoHeaderProps = {
  span: string;
};

export const InfoHeader = ({ span }: InfoHeaderProps) => {
  return (
    <InfoHeaderContainer>
      <img src={instagramLogo} alt="instagram" />
      <span>{span}</span>
      <div>
        <GridFour weight="bold" />
      </div>
      <div>
        <DownloadSimple weight="bold" />
      </div>
    </InfoHeaderContainer>
  );
};
