import React from "react";

import gitHub from "../assets/socialLinks/gitHub.png";
import gmail from "../assets/socialLinks/gmail.png";
import linkedIn from "../assets/socialLinks/linkedIn.png";
import textBackground from "../assets/swirlBackground2.png";

import styled from "styled-components";

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
  color: #2c2d52;
  font-size: 34px;
`;

const ContactInfo = styled.ul`
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  list-style-type: none;
  padding-inline-start: 0px;
  margin-block-start: 6px;
`;

const SocialLinkContainer = styled.section`
  background-color: white;
  margin: 2px 0px;
  height: 78px;
  display: flex;
  place-items: center;
`;

const SocialIcon = styled.img`
  height: 34px;
  margin: 0px 11px;
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
        <a
          href="https://github.com/IsaacVon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon src={gitHub} alt="gitHub" />
        </a>

        <a
          href="mailto:isaachouseholder@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon src={gmail} alt="gmail" />
        </a>

        <a
          href="https://www.linkedin.com/in/isaachouseholder/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon src={linkedIn} alt="linkedIn" />
        </a>
      </SocialLinkContainer>
    </Wrapper>
  );
}
