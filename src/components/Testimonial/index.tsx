import { CaretLeft, CaretRight } from 'phosphor-react';
import React from 'react';
import { TestimonialContainer, TestimonialContent } from './styled';

import logoFTestimonial from '/assets/images/logo-f-testimonial.svg';
import testimonialProfile from '/assets/images/testimonial-profile.png';

export const Testimonial = () => {
  return (
    <TestimonialContainer>
      <TestimonialContent>
        <h2>Happy Clients</h2>
        <p>
          The Marketing Accountability Standards Board (MASB) endorses the
          definitions, purposes, and constructs of classes
        </p>
        <div>
          <div className="quotation">
            <img src={logoFTestimonial} alt="" />
            <blockquote>
              <q>
                Not weekly or monthly like other sites out there. This ensures
                that we offer prospective homebuyers and investors with the
                freshest- hottest deals on the Internet.
              </q>
              <div className="quotation-owner">
                <div>
                  <h3>Rowhan Smith</h3>
                  <span>CEO, Foreclosure</span>
                </div>
                <div className='quotation-pagination'>
                  <button>
                    <CaretLeft />
                  </button>
                  <button>
                    <CaretRight />
                  </button>
                </div>
              </div>
            </blockquote>
          </div>
          <img src={testimonialProfile} alt="" />
        </div>
      </TestimonialContent>
    </TestimonialContainer>
  );
};
