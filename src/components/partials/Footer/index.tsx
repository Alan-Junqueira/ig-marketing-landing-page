import {
  CaretDown,
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo
} from 'phosphor-react';
import React from 'react';
import { FooterContainer, FooterContent } from './styed';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <div>
          <span>Besnik.</span>
          <nav>
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
          </nav>
          <ul>
            <li>
              <a href="">
                <FacebookLogo />
              </a>
            </li>
            <li>
              <a href="">
                <InstagramLogo />
              </a>
            </li>
            <li>
              <a href="">
                <YoutubeLogo weight="fill" />
              </a>
            </li>
          </ul>
        </div>
        <p>Copyright © 2020 Besnik</p>
      </FooterContent>
    </FooterContainer>
  );
};
