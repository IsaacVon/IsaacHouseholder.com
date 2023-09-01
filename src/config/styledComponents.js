import styled from 'styled-components';
import colors from './colors';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems || 'center'};
  padding-bottom: ${(props) => props.paddingBottom || '200px'};
  margin-top: ${(props) => props.marginTop || '0'};
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 15px;
  margin: ${(props) => props.margin || '31px 52px 0px 52px'};
  color: ${(props) => props.color || colors.black};
`;

export const Subtitle = styled.h3`
  margin: 7px 0px 6px 0px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 30px;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const Section = styled.section`
  max-width: ${(props) => props.maxWidth || '580px'};
  margin: ${(props) => props.margin || 'auto'};
  padding: ${(props) => props.padding || '10px'};
`;

export const List = styled.ul`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 30px;
  text-align: ${(props) => props.textAlign || 'center'};
  list-style-type: none;
  padding-inline-start: 0px;
`;

export const Image = styled.img`
  width: ${(props) => props.width || '100%'};
  cursor: pointer;
  border-radius: ${(props) => props.borderRadius || '0'};
`;

export const Text = styled.p`
  font-weight: ${(props) => props.fontWeight || '500'};
  font-size: ${(props) => props.fontSize || '1rem'};
  line-height: ${(props) => props.lineHeight || '1.5rem'};
  text-align: ${(props) => props.textAlign || 'justify'};
  margin: ${(props) => props.margin || '1rem'};
  color: ${(props) => props.color || colors.text};
`;
