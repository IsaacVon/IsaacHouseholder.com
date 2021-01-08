import React from "react";
import styled from "styled-components";

const SocialIcon = styled.img`
  height: ${(props) => props.size};
  margin: 0px 11px;
`;

function IconLink({ url, img, alt, size }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <SocialIcon size={size} src={img} alt={alt} />
    </a>
  );
}

export default IconLink;
