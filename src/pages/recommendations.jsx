import React, { useState } from "react";
import BobsLetter from "../components/bobsLetter";
import styled from "styled-components";
import textBackground from "../assets/swirlBackground3.png";
import line from "../assets/lines/line.png";
import lineTwo from "../assets/lines/line2.png";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  place-items: center;
  padding-bottom: 200px;
`;

const LetterContainer = styled.section`
  max-width: 580px;
  margin: 0px 41px;
`;

const LetterBody = styled.section`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 300;
  font-size: 15px;
  line-height: 26px;
  text-align: justify;
`;

const Line = styled.section`
  background-image: url(${line});
  background-position: -2px;
  height: 1px;
  width: 100%;
  margin-bottom: 40px;
  margin-top: 75px;
`;

const LineTwo = styled.section`
  background-image: url(${lineTwo});
  background-position: -2px;
  height: 1px;
  width: 100%;
  margin-bottom: 40px;
  margin-top: 75px;
`;

const Section = styled.h1`
  background: url(${textBackground});
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  text-align: center;
  color: #2c2d52;
  font-size: 34px;
  margin-top: 50px;
  margin-bottom: 28px;
`;

const PersonTitle = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: normal;
  font-size: 12px;
  line-height: 13px;
  text-align: justify;
`;

const PersonName = styled.p`
  font-weight: bold;
  font-size: 15px;
  line-height: 17px;
  text-align: justify;
  margin-top: 31px;
`;

const SourceLink = styled.p`
  cursor: pointer;
  text-decoration-line: underline;
  margin-top: 30px;
  font-weight: 300;
  font-size: 10px;
  line-height: 11px;
  text-align: center;
`;

export default function Recommendations() {
  const [displayLetter, toggleDisplayLetter] = useState(false);

  const handleShowLetterClick = () => {
    if (displayLetter) {
      toggleDisplayLetter(false);
    } else toggleDisplayLetter(true);
  };

  const renderBobsLetter = () => {
    if (displayLetter) {
      return <BobsLetter />;
    }

    if (!displayLetter) {
      return (
        <>
          <LetterBody>
            <p>To whom it may concern,</p>
            <p>
              I have known Isaac Householder while he worked at Karma automotive
              from 2016-2019 as a Test Engineer and Vehicle Integration
              Engineer. During his time, he led the in house Material and
              Fastener Testing Lab. He successfully ran the lab smoothly, and he
              interfaced with all engineering departments very well. In this
              role, he also insourced testing saving $750,000 in outside
              testing. During his vehicle integration role, he worked with
              directors to push innovative ideas into our future vehicles. He
              also collaborated with teams of engineers to enable them to meet
              our strict targets established to create our luxury vehicle.
            </p>
            <p>
              Isaac is highly motivated, self-directed, and self-driven. He
              maintains a positive attitude in all situations and spreads
              enthusiasm to others. He routinely exceeded his responsibilities
              at Karma automotive, taking on new and additional responsibilities
              and went above and beyond to what was required to ensure the
              success of the company. Outside of work hours, he volunteered on
              weekends to work at Karma publicity events and the Karma Newport
              Beach dealership. In this capacity, he showed excellent people
              skills and was recognized by the Director sales for his efforts
              and ability to work with high net worth
            </p>
            <p>
              Based on his technical skills, people skills, and trustworthiness,
              I can confidently say that Isaac will be an asset to any company
              he works for. I would not hesitate to have him on any future team
              I led.
            </p>
            <p>Sincerely,</p>
          </LetterBody>
          <a
            href="https://www.linkedin.com/in/robert-bob-kruse-459a73101/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PersonName>Robert A. Kruse</PersonName>
          </a>

          <PersonTitle>CTO / Karma Automotive </PersonTitle>
        </>
      );
    }
  };

  const renderViewSourceButton = () => {
    if (displayLetter) {
      return (
        <p
          className="lettersOfRecommendationLink"
          onClick={() => handleShowLetterClick()}
        >
          Click to hide source
        </p>
      );
    } else {
      return (
        <p
          className="lettersOfRecommendationLink"
          onClick={() => handleShowLetterClick()}
        >
          Click to view source
        </p>
      );
    }
  };

  return (
    <Wrapper>
      <Section>Letters of Recommendation</Section>
      <LetterContainer>
        {renderBobsLetter()}
        {renderViewSourceButton()}
      </LetterContainer>
      <LetterContainer>
        <Line />
        <LetterBody>
          <p>
            I had the pleasure of Isaac in my group for three years at Karma.
            Incredible bright, enthusiastic, smart, intelligent with a vison of
            what he wants from his life. Isaac is a very talented engineer with
            a bright future.
          </p>
        </LetterBody>
        <a
          href="https://www.linkedin.com/in/john-cooper-77054225/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PersonName>John Cooper</PersonName>
        </a>
        <PersonTitle>
          VP - Vehicle Integration, Vehicle Engineering and Safety / Karma
          Automotive
        </PersonTitle>
        <SourceLink>
          {" "}
          <a
            href="https://www.linkedin.com/in/isaachouseholder/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click to view source
          </a>
        </SourceLink>
      </LetterContainer>

      <LetterContainer>
        <LineTwo />{" "}
        <LetterBody>
          <p>To whom it may concern,</p>
          <p>
            It is my pleasure and honor to recommend Isaac for opportunities in
            the fastener field. I worked with Isaac for 3 years as his manager
            at Karma Automotive, where he supported all fastener engineering
            requests across all vehicle systems. Isaac also provided thorough
            documentation and reports to the teams upon completing his testing.
          </p>
          <p>
            As a Test Engineer, Isaac enjoys a challenge. He has demonstrated
            the skill necessary to learn how to use several type of specialized
            testing equipment, understand and communicate results to the
            engineering teams.
          </p>
          <p>
            Isaac is very dependable and personable and has a great outlook, he
            will do well and and sure to exceed expectations with any company he
            works at.
          </p>
        </LetterBody>
        <a
          href="https://www.linkedin.com/in/steven-foster-60680a108/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PersonName>Steven Foster</PersonName>
        </a>
        <PersonTitle>
          Manager, Fastener Engineering / Karma Automotive{" "}
        </PersonTitle>
        <SourceLink>
          {" "}
          <a
            href="https://www.linkedin.com/in/isaachouseholder/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click to view source
          </a>
        </SourceLink>
      </LetterContainer>

      <LetterContainer>
        <LineTwo />
        <LetterBody>
          <p>
            Isaac brings enthusiasm and creativity to any task, and thinks
            outside the box. With his often unique perspective he would be an
            asset to any engineering, marketing or sales organization,
            complemented by his people skills and technical knowledge.
          </p>
        </LetterBody>
        <a
          href="https://www.linkedin.com/in/charlie-galea-40428520/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PersonName>Charlie Galea</PersonName>
        </a>
        <PersonTitle>
          Manager, Vehicle Integration & Validation / Karma Automotive{" "}
        </PersonTitle>
        <SourceLink>
          <a
            href="https://www.linkedin.com/in/isaachouseholder/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click to view source
          </a>
        </SourceLink>
      </LetterContainer>
    </Wrapper>
  );
}
