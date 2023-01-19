import { GridFour, DownloadSimple } from 'phosphor-react';
import { GraphicHorizontalLine } from './GraphicHorizontalLine';
import { GraphicVerticalLine } from './GraphicVerticalLine';
import { InfoHeader } from './InfoHeader';

import {
  HeaderAsideCircularProgressBar,
  HeaderAsideInfoContainer,
  HeaderAsideFollowerGrowth,
  HeaderAsideYourGrouth,
  HeaderAsideInfoGraphic,
  VerticalLines,
  HeaderAsideFollowerGrowthCard,
  HeaderAsideEmojiCard
} from './styled';

import progressBar from '/assets/images/progress-bar.svg';
import emojiHeart from '/assets/images/emoji-heart.svg';
import emojiSurprise from '/assets/images/emoji-surprise.svg';
import emojiAngry from '/assets/images/emoji-angry.svg';

export const HeaderAsideInfo = () => {
  return (
    <HeaderAsideInfoContainer>
      <div>
        <HeaderAsideYourGrouth>
          <h3>Amanda M. Data</h3>
          <div>
            <span>Your Growth</span>
            <strong>3,000</strong>
          </div>
        </HeaderAsideYourGrouth>
        <HeaderAsideFollowerGrowth>
          <InfoHeader span="Follower Growth" />
          <span className="new-followers">
            <strong>16.2k </strong>New Followers
          </span>
          <HeaderAsideInfoGraphic>
            <GraphicHorizontalLine number="8" />
            <GraphicHorizontalLine number="6" />
            <GraphicHorizontalLine number="4" />
            <GraphicHorizontalLine number="2" />
            <VerticalLines>
              <GraphicVerticalLine heigthpx={7.8} />
              <GraphicVerticalLine heigthpx={4.6} />
              <GraphicVerticalLine heigthpx={15} />
              <GraphicVerticalLine heigthpx={7} />
              <GraphicVerticalLine heigthpx={7.7} />
              <GraphicVerticalLine heigthpx={10.2} />
              <GraphicVerticalLine heigthpx={12.7} />
              <GraphicVerticalLine heigthpx={7.1} />
              <GraphicVerticalLine heigthpx={14.9} />
            </VerticalLines>
          </HeaderAsideInfoGraphic>
        </HeaderAsideFollowerGrowth>
      </div>

      <div>
        <HeaderAsideCircularProgressBar>
          <InfoHeader span="Media Type" />
          <div className="progress-bar">
            <span>72.3% of the media for #sunrise are photos.</span>
            <img src={progressBar} alt="Barra de progresso" />
          </div>
        </HeaderAsideCircularProgressBar>
        <HeaderAsideFollowerGrowthCard>
          <span>14k</span>
          <div>
            <span>Follower Growth</span>
            <div className="full"></div>
            <div className="partial"></div>
          </div>
        </HeaderAsideFollowerGrowthCard>
        <HeaderAsideEmojiCard>
          <img src={emojiSurprise} alt="surprise" />
          <img src={emojiAngry} alt="angry" />
          <img src={emojiHeart} alt="heart" />
        </HeaderAsideEmojiCard>
      </div>
    </HeaderAsideInfoContainer>
  );
};
