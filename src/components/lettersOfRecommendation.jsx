import React, { useState } from "react";
import BobsLetter from "../components/bobsLetter";

export default function LettersOfRecommendation() {
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
          <div className="lettersOfRecommendationBody">
            {" "}
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
          </div>
          <a
            href="https://www.linkedin.com/in/robert-bob-kruse-459a73101/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="lettersOfRecommendationName">Robert A. Kruse</p>
          </a>

          <p className="lettersOfRecommendationTitle">
            CTO / Karma Automotive{" "}
          </p>
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
    <>
      {/* Bob */}
      <div className="scrollSnapExtended">
        <div className="smallSpacer"></div>
        <h4 id="letters" className="color lettersOfRecommendationTitleSpacing">
          Letters
        </h4>
        <h4 className="color lettersOfRecommendationTitleSpacing">of</h4>
        <h4 className="color lettersOfRecommendationTitleSpacing">
          Recommendation
        </h4>
        <div className="lettersOfRecommendationContainer">
          <div className="lettersOfRecommendationLine"></div>
          {renderBobsLetter()}
          {renderViewSourceButton()}
          <div className="lettersOfRecommendationLine"></div>
        </div>
      </div>

      {/* John */}
      <div className="scrollSnapExtended">
        <div className="lettersOfRecommendationContainer">
          <div className="lettersOfRecommendationLine"></div>

          <div className="lettersOfRecommendationBody">
            <p>
              I had the pleasure of Isaac in my group for three years at Karma.
              Incredible bright, enthusiastic, smart, intelligent with a vison
              of what he wants from his life. Isaac is a very talented engineer
              with a bright future.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/john-cooper-77054225/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="lettersOfRecommendationName">John Cooper</p>
          </a>
          <p className="lettersOfRecommendationTitle">
            VP - Vehicle Integration, Vehicle Engineering and Safety / Karma
            Automotive
          </p>
          <p className="lettersOfRecommendationLink">
            {" "}
            <a
              href="https://www.linkedin.com/in/isaachouseholder/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click to view source
            </a>
          </p>
          <div className="lettersOfRecommendationLine"></div>
        </div>
      </div>
      <div className="scrollSnapExtended">
        <div className="lettersOfRecommendationContainer">
          <div className="lettersOfRecommendationLine"></div>{" "}
          <div className="lettersOfRecommendationBody">
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
          </div>
          <a
            href="https://www.linkedin.com/in/steven-foster-60680a108/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="lettersOfRecommendationName">Steven Foster</p>
          </a>
          <p className="lettersOfRecommendationTitle">
            Manager, Fastener Engineering / Karma Automotive{" "}
          </p>
          <p className="lettersOfRecommendationLink">
            {" "}
            <a
              href="https://www.linkedin.com/in/isaachouseholder/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click to view source
            </a>
          </p>
          <div className="lettersOfRecommendationLine"></div>
        </div>
      </div>
      <div className="scrollSnapExtended">
        <div className="lettersOfRecommendationContainer">
          <div className="lettersOfRecommendationLine"></div>{" "}
          <div className="lettersOfRecommendationBody">
            <p>
              Isaac brings enthusiasm and creativity to any task, and thinks
              outside the box. With his often unique perspective he would be an
              asset to any engineering, marketing or sales organization,
              complemented by his people skills and technical knowledge.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/charlie-galea-40428520/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="lettersOfRecommendationName">Charlie Galea</p>
          </a>
          <p className="lettersOfRecommendationTitle">
            Manager, Vehicle Integration & Validation / Karma Automotive{" "}
          </p>
          <p className="lettersOfRecommendationLink">
            <a
              href="https://www.linkedin.com/in/isaachouseholder/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click to view source
            </a>
          </p>
          <div className="lettersOfRecommendationLine"></div>
        </div>
      </div>
    </>
  );
}
