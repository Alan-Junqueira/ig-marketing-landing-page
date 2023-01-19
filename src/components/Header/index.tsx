import { CaretDown, ArrowCircleRight } from 'phosphor-react';

import {
  HeaderBotton,
  HeaderBottonInfo,
  HeaderBoxLogos,
  HeaderContainer,
  HeaderTop,
  HeaderTopNav
} from './styled';

import logoChaseImage from '/assets/images/logo-chase.svg';
import logoAsanaImage from '/assets/images/logo-asana.svg';
import logoGoogleImage from '/assets/images/logo-google.svg';
import logoBuzzFeedImage from '/assets/images/logo-buzzfeed.svg';
import logoTogglImage from '/assets/images/logo-toggl.svg';
import logoWalmartImage from '/assets/images/logo-walmart.svg';
import { HeaderAsideInfo } from './components/HeaderAsideInfo';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTop>
        <HeaderTopNav>
          <span>Besnik.</span>
          <ul>
            <li>
              <a href="">Solution</a>
              <CaretDown weight="bold" />
            </li>
            <li>
              <a href="">Plans</a>
            </li>
            <li>
              <a href="">Resource</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>
          <button>Request Demo</button>
        </HeaderTopNav>
      </HeaderTop>
      <HeaderBotton>
        <HeaderBottonInfo>
          <div className="header-aside">
            <HeaderAsideInfo />
          </div>
          <h1>Tell a better brand story</h1>
          <p>
            Automate the way you search through hashtags and suggested profiles
            to find results 100x faster.
          </p>

          <button>
            Request Demo <ArrowCircleRight weight="bold" />
          </button>
          <span>SOME OF OUR TRUSTED CLIENTS</span>
          <HeaderBoxLogos>
            <img src={logoChaseImage} alt="chase" />
            <img src={logoAsanaImage} alt="asana" />
            <img src={logoGoogleImage} alt="google" />
            <img src={logoBuzzFeedImage} alt="buzzfeed" />
            <img src={logoTogglImage} alt="toggl" />
            <img src={logoWalmartImage} alt="walmart" />
          </HeaderBoxLogos>
        </HeaderBottonInfo>
      </HeaderBotton>
    </HeaderContainer>
  );
};
