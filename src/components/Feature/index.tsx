import { ArrowCircleRight } from 'phosphor-react';
import React from 'react';
import { FeatureContainer, FeatureContent } from './styled';

import phoneHand from '/assets/images/phone-hand.png';
import profileWoman from '/assets/images/profile-woman.png';
import emojiHeart from '/assets/images/emoji-heart.svg';
import { InfoCard } from '../InfoCard';

export const Feature = () => {
  return (
    <FeatureContainer id="feature">
      <FeatureContent>
        <h2>Solutions for every need</h2>
        <p>
          Join thousands of marketers and entrepreneurs for a 2-day event at the
          forefront of social commerce.
        </p>
        <div>
          <InfoCard
            color="purple"
            description="Create infinite pieces of content with our influencer product.
            Build,streamline,manage large-scale influencer programs"
            title="Influencer marketing"
            type="Influencer"
          />
          <div>
            <div className="profile-bars">
              <img src={profileWoman} alt="" />
              <div className="bars">
                <div className="bar-1"></div>
                <div className="bar-2"></div>
                <div className="bar-3"></div>
              </div>
            </div>
            <img src={phoneHand} alt="" />
            <span>
              <img src={emojiHeart} alt="" />
              <strong>23.8k</strong>
              Likes
            </span>
          </div>
        </div>
      </FeatureContent>
    </FeatureContainer>
  );
};
