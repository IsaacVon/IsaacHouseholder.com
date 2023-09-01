import React from 'react';

import gitHub from '../assets/socialLinks/gitHub.png';
import gmail from '../assets/socialLinks/gmail.png';
import linkedIn from '../assets/socialLinks/linkedIn.png';
import textBackground from '../assets/swirlBackground2.png';
import colors from '../config/colors';
import styled from 'styled-components';
import IconLink from '../components/IconLink';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 44px;
`;

const Section = styled.h1`
  background: url(${textBackground});
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  text-align: center;
  color: ${colors.black};
  font-size: 34px;
  font-weight: 600;
  margin-bottom: 17px;
`;

const ContactInfo = styled.ul`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  list-style-type: none;
  padding-inline-start: 0px;
`;

const SocialLinkContainer = styled.section`
  background-color: white;
  margin: 2px 0px;
  height: 78px;
  display: flex;
  place-items: center;
`;

export default function Home() {
  return (
    <Wrapper>
      <Section>Isaac Householder</Section>
      <ContactInfo>
        <li>Irvine, California</li>
        <li>IsaacHouseholder@gmail.com</li>
        <li>714.496.7154</li>
      </ContactInfo>

      <SocialLinkContainer>
        <IconLink
          url='https://github.com/IsaacVon'
          img={gitHub}
          alt='github'
          size='34px'
        />
        <IconLink
          url='mailto:isaachouseholder@gmail.com'
          img={gmail}
          alt='gmail'
          size='34px'
        />
        <IconLink
          url='https://www.linkedin.com/in/isaachouseholder/'
          img={linkedIn}
          alt='linkedIn'
          size='34px'
        />
      </SocialLinkContainer>
    </Wrapper>
  );
}
