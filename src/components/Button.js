import React from "react";
import styled from "styled-components";

import colors from "../config/colors";

const ButtonContainer = styled.section``;

const Outline = styled.section`
  align-items: center;
  border-radius: 25px;
  border: 1px solid ${colors.black};
  color: ${colors.black};
  display: flex;
  height: 45px;
  width: 134px;
  justify-content: center;

  &:hover {
    transition: color 0.1s ease-in-out;
    color: ${colors.primary};
    border: 1px solid ${colors.primary};
  }
`;

const Title = styled.h3`
  font-weight: lighter;
  font-size: 15px;
  margin: 0px;
`;

function Button({ url, title }) {
  return (
    <ButtonContainer>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Outline>
          <Title>{title}</Title>
        </Outline>
      </a>
    </ButtonContainer>
  );
}

export default Button;
