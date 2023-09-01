import React, { useState } from 'react';
import styled from 'styled-components';

import BobsLetter from '../components/bobsLetter';
import line from '../assets/lines/line.png';
import lineTwo from '../assets/lines/line2.png';
import SectionHeader from '../components/SectionHeader';

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
const LineThree = styled.section`
  background-image: url(${lineTwo});
  background-position: -2px;
  height: 1px;
  width: 100%;
  margin-bottom: 40px;
  margin-top: 18px;
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
            href='https://www.linkedin.com/in/robert-bob-kruse-459a73101/'
            target='_blank'
            rel='noopener noreferrer'
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
        <SourceLink>
          <p
            className='lettersOfRecommendationLink'
            onClick={() => handleShowLetterClick()}
          >
            Click to hide source
          </p>
        </SourceLink>
      );
    } else {
      return (
        <SourceLink>
          <p
            className='lettersOfRecommendationLink'
            onClick={() => handleShowLetterClick()}
          >
            Click to view source
          </p>
        </SourceLink>
      );
    }
  };

  return (
    <>
      <SectionHeader>Letters of Recommendation</SectionHeader>
      <Wrapper>
        <LetterContainer>
          <LineThree />
          <LetterBody>
            <p>
              Isaac is an enthusiastic learner whose tenacity helps him come up
              to speed quickly on new concepts and codebases. In his time at Own
              Up he had a positive impact on his team and worked well with his
              teammates. I'm convinced that Isaac has the ability and attitude
              to grow into a very strong software engineer as he gets more
              experience under his belt.
            </p>
          </LetterBody>
          <a
            href='https://www.linkedin.com/in/brent-shields/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <PersonName>Brent Shields</PersonName>
          </a>
          <PersonTitle>Co-Founder & CTO at Own Up</PersonTitle>
          <SourceLink>
            {' '}
            <a
              href='https://www.linkedin.com/in/isaachouseholder/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Click to view source
            </a>
          </SourceLink>
        </LetterContainer>
        <LetterContainer>
          <LineTwo />{' '}
          <LetterBody>
            <p>
              I had the privilege of being one of Isaac's first managers as he
              entered the world of software engineering. Isaac stood out to me
              as a very analytical and curious thinker, which are the qualities
              I like to see in new engineers. Even without an extensive
              background in Typescript, AWS, etc, at the time of him joining my
              team his natural curiosity and problem-solving skills allowed him
              to be effective right out of the gate.
            </p>{' '}
            <p>
              Over the next few months Isaac grew his technical and domain
              knowledge at a notable pace. He was soon able to run entire
              projects on his own, finding answers to questions he needed
              answers to, collaborating with outside resources and stakeholders,
              and absorbing all the knowledge he could from his colleagues.
            </p>{' '}
            <p>
              I am proud to have been a part of the start of Isaac's foray into
              software engineering. I know he is going to have a very long and
              fruitful career ahead of him. He will take with him into his next
              role the passion and enthusiasm he showed every day at Own Up.
              These are things that cannot be taught--but every team needs to
              succeed. Wherever he goes I know he will be a boon to the
              productivity and morale of his new team!
            </p>
          </LetterBody>
          <a
            href='https://www.linkedin.com/in/robert-c-226a7541/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <PersonName>Robert Cafazzo</PersonName>
          </a>
          <PersonTitle>Software Engineering Manager</PersonTitle>
          <SourceLink>
            {' '}
            <a
              href='https://www.linkedin.com/in/isaachouseholder/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Click to view source
            </a>
          </SourceLink>
        </LetterContainer>
        <LetterContainer>
          <LineTwo />{' '}
          <LetterBody>
            <p>
              I got to work with Isaac when he first started at Own Up, and
              later in cross-team functions. He is demonstrably keen to grow his
              knowledge and his skill-set: asking why and engaging with others
              to pair program. Something I appreciated in particular was that he
              was very comfortable sharing ideas based on personal experience,
              or experience at other jobs. He was never satisfied with the
              status quo for his team or for himself, and that attitude will
              make him a great asset wherever he is.
            </p>
          </LetterBody>
          <a
            href='https://www.linkedin.com/in/liz-chhouk-lorenz/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <PersonName>Liz Lorenz</PersonName>
          </a>
          <PersonTitle>Senior Software Engineer</PersonTitle>
          <SourceLink>
            {' '}
            <a
              href='https://www.linkedin.com/in/isaachouseholder/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Click to view source
            </a>
          </SourceLink>
        </LetterContainer>

        <LetterContainer>
          <LineTwo />{' '}
          <LetterBody>
            <p>
              Isaac is an awesome teammate. He's enthusiastic, positive,
              intelligent, and always very open to instruction and feedback.
              I've always been impressed by Isaac's willingness to pick up new
              challenges, and his ability to think outside the box and come up
              with brand new ideas for improving the product we're delivering.
              He'd be a smart addition to any engineering team, and I'd
              absolutely work with him again no question.
            </p>
          </LetterBody>
          <a
            href='https://www.linkedin.com/in/k-strickland/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <PersonName>Kai Strickland</PersonName>
          </a>
          <PersonTitle>Senior Software Engineer</PersonTitle>
          <SourceLink>
            {' '}
            <a
              href='https://www.linkedin.com/in/isaachouseholder/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Click to view source
            </a>
          </SourceLink>
        </LetterContainer>
        <LetterContainer>
          <LineTwo /> {renderBobsLetter()}
          {renderViewSourceButton()}
        </LetterContainer>
        <LetterContainer>
          <Line />
          <LetterBody>
            <p>
              I had the pleasure of Isaac in my group for three years at Karma.
              Incredible bright, enthusiastic, smart, intelligent with a vison
              of what he wants from his life. Isaac is a very talented engineer
              with a bright future.
            </p>
          </LetterBody>
          <a
            href='https://www.linkedin.com/in/john-cooper-77054225/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <PersonName>John Cooper</PersonName>
          </a>
          <PersonTitle>
            VP - Vehicle Integration, Vehicle Engineering and Safety / Karma
            Automotive
          </PersonTitle>
          <SourceLink>
            {' '}
            <a
              href='https://www.linkedin.com/in/isaachouseholder/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Click to view source
            </a>
          </SourceLink>
        </LetterContainer>
        <LetterContainer>
          <LineTwo />{' '}
          <LetterBody>
            <p>To whom it may concern,</p>
            <p>
              It is my pleasure and honor to recommend Isaac for opportunities
              in the fastener field. I worked with Isaac for 3 years as his
              manager at Karma Automotive, where he supported all fastener
              engineering requests across all vehicle systems. Isaac also
              provided thorough documentation and reports to the teams upon
              completing his testing.
            </p>
            <p>
              As a Test Engineer, Isaac enjoys a challenge. He has demonstrated
              the skill necessary to learn how to use several type of
              specialized testing equipment, understand and communicate results
              to the engineering teams.
            </p>
            <p>
              Isaac is very dependable and personable and has a great outlook,
              he will do well and and sure to exceed expectations with any
              company he works at.
            </p>
          </LetterBody>
          <a
            href='https://www.linkedin.com/in/steven-foster-60680a108/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <PersonName>Steven Foster</PersonName>
          </a>
          <PersonTitle>
            Manager, Fastener Engineering / Karma Automotive{' '}
          </PersonTitle>
          <SourceLink>
            {' '}
            <a
              href='https://www.linkedin.com/in/isaachouseholder/'
              target='_blank'
              rel='noopener noreferrer'
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
            href='https://www.linkedin.com/in/charlie-galea-40428520/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <PersonName>Charlie Galea</PersonName>
          </a>
          <PersonTitle>
            Manager, Vehicle Integration & Validation / Karma Automotive{' '}
          </PersonTitle>
          <SourceLink>
            <a
              href='https://www.linkedin.com/in/isaachouseholder/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Click to view source
            </a>
          </SourceLink>
        </LetterContainer>
      </Wrapper>{' '}
    </>
  );
}
