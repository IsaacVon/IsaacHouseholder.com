import React from "react";
import styled from "styled-components";

import backIcon from "../assets/buttons/backIcon.svg";

const BackIcon = styled.img`
  width: 64px;
  border-radius: 24px;
  overflow: hidden;
  cursor: pointer;
`;

function BackButton() {
  return <BackIcon src={backIcon} alt="backIcon" />;
}

export default BackButton;
