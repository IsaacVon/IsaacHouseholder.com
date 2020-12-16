import React from "react";
import styled from "styled-components";
import textBackground from "../assets/swirlBackground2.png";

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  margin-top: 10vw;
`;
export default function Education() {
  return (
    <div className="viewContainer">
      <div id="education" className="centeringContainer">
        <h4 className="color">Education</h4>
        <p className="universityName">
          Bachelor of Science in Mechanical Engineering
        </p>
        <p className="universityDegree">
          California Baptist University 2012-2016
        </p>

        <p className="universitySae">
          With my friend/classmate, we started the Formula SAE program at our
          university. We pitched the idea to the president of the school and
          obtained funding. We worked with several teachers and had all jr
          design projects assigned to a different vehicle section. The team
          raced one year after I graduated.{" "}
        </p>
        <p className="universityName">Coding Boot Camp</p>
        <p className="universityDegree">University of California Irvine 2020</p>
      </div>
    </div>
  );
}
