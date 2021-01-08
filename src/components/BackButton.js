import React from "react";
import styled from "styled-components";

import backIcon from "../assets/buttons/backIcon.svg";
import colors from "../config/colors";

const BackIcon = styled.img`
  width: 106px;
  border-radius: 24px;
  overflow: hidden;
  cursor: pointer;
`;

function BackButton({ handleClick }) {
  return (
    <BackIcon
      onClick={handleClick}
      src={backIcon}
      alt="backIcon"
    />
  );
}

export default BackButton;
