import styled from 'styled-components';

export const CommunityContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 4rem;
  padding-bottom: 5.4rem;
`;

export const CommunityContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 14.5rem;

  max-width: 80rem;
  width: 100%;

  > img {
    box-shadow: -8px 30px 80px -25px rgba(82, 82, 82, 0.1);

    max-width: 29rem;
  }
`;
