import React from 'react';
import styled from 'styled-components';

import letter from '../assets/bobsLetter.jpg';

const LetterImage = styled.img`
  width: 100%;
  margin-top: 17px;
`;

export default function BobsLetter() {
  return <LetterImage src={letter} alt='Letter' />;
}
