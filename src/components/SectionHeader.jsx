import React from 'react';
import styled from 'styled-components';
import textBackground from '../assets/swirlBackground2.png';
import colors from '../config/colors';

const StyledSection = styled.h1`
  background: url(${textBackground});
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  text-align: center;
  color: ${colors.black};
  font-size: 34px;
  margin-top: 70px;
  font-weight: 900;
`;

const SectionHeader = ({ children }) => (
  <StyledSection>{children}</StyledSection>
);

export default SectionHeader;
