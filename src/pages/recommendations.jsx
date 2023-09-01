import React, { useState } from 'react';
import styled from 'styled-components';
import BobsLetter from '../components/bobsLetter';
import lineTwo from '../assets/lines/line2.png';
import SectionHeader from '../components/SectionHeader';
import recommendations from '../assets/data/recommendations';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  place-items: center;
  padding-bottom: 200px;
`;

const LetterContainer = styled.section`
  max-width: 580px;
  margin: 0px 41px;
  margin-top: 17px;
`;

const LetterBody = styled.section`
  font-weight: 400;
  font-size: 15px;
  line-height: 26px;
  text-align: justify;
`;

const LineTwo = styled.section`
  background-image: url(${lineTwo});
  background-position: -2px;
  height: 1px;
  width: 100%;
  margin-bottom: 40px;
  margin-top: 75px;
`;

const PersonTitle = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 13px;
  text-align: justify;
`;

const PersonName = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 17px;
  text-align: justify;
  margin-top: 31px;
`;

const SourceLink = styled.p`
  cursor: pointer;
  text-decoration-line: underline;
  margin-top: 30px;
  font-weight: 500;
  font-size: 10px;
  line-height: 11px;
  text-align: center;
`;

export default function Recommendations() {
  const [displayLetter, toggleDisplayLetter] = useState(false);

  const handleShowLetterClick = () => {
    toggleDisplayLetter(!displayLetter);
  };

  return (
    <>
      <SectionHeader>Letters of Recommendation</SectionHeader>
      <Wrapper>
        {recommendations.map((rec, index) => (
          <LetterContainer key={index}>
            {rec.hasAttachment ? (
              <>
                <LineTwo />
                {displayLetter ? (
                  <BobsLetter />
                ) : (
                  <LetterBody>
                    <p>{rec.body}</p>
                  </LetterBody>
                )}
                <PersonName>{rec.name}</PersonName>
                <PersonTitle>{rec.title}</PersonTitle>
                <SourceLink onClick={handleShowLetterClick}>
                  Click to {displayLetter ? 'hide' : 'view'} source
                </SourceLink>
              </>
            ) : (
              <>
                <LineTwo />
                <LetterBody>
                  {rec.body.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </LetterBody>
                <a
                  href={rec.sourceLink}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <PersonName>{rec.name}</PersonName>
                </a>
                <PersonTitle>{rec.title}</PersonTitle>
                <SourceLink>
                  <a
                    href={rec.sourceLink}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Click to view source
                  </a>
                </SourceLink>
              </>
            )}
          </LetterContainer>
        ))}
      </Wrapper>
    </>
  );
}
