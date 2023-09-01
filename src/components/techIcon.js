import React from 'react';
import styled from 'styled-components';

// import api from "../assets/techIcons/api.png";
import {
  api,
  axios,
  expo,
  express,
  formik,
  googleMaps,
  javascript,
  jwt,
  materialui,
  mongodb,
  mongoose,
  node,
  react,
  reactNative,
  styledComponents,
  gcp,
} from '../assets/techIcons/index';

const baseIconSize = 30;
const margin = '6px 10px';

const calculateSize = (sizeAdjuster) => {
  if (!sizeAdjuster) return baseIconSize.toString().concat('px');

  const iconSize = baseIconSize + sizeAdjuster;
  const iconString = iconSize.toString().concat('px');
  return iconString;
};

const ApiContainer = styled.img`
  height: ${calculateSize(3)};
  overflow: hidden;
  margin: ${margin};
`;

const AxiosContainer = styled.img`
  height: ${calculateSize(-3)};
  overflow: hidden;
  margin: ${margin};
`;

const ExpoContainer = styled.img`
  height: ${calculateSize(-3)};
  overflow: hidden;
  margin: ${margin};
`;
const ExpressContainer = styled.img`
  height: ${calculateSize(-3)};
  overflow: hidden;
  margin: ${margin};
`;
const FormikContainer = styled.img`
  height: ${calculateSize(2)};
  overflow: hidden;
  margin: ${margin};
`;
const GoogleMapsContainer = styled.img`
  height: ${calculateSize()};
  overflow: hidden;
  margin: ${margin};
`;
const JavascriptContainer = styled.img`
  height: ${calculateSize(5)};
  overflow: hidden;
  margin: ${margin};
`;
const JwtContainer = styled.img`
  height: ${calculateSize()};
  overflow: hidden;
  margin: ${margin};
`;
const MaterialuiContainer = styled.img`
  height: ${calculateSize(-1)};
  overflow: hidden;
  margin: ${margin};
`;
const MongodbContainer = styled.img`
  height: ${calculateSize()};
  overflow: hidden;
  margin: ${margin};
`;
const MongooseContainer = styled.img`
  height: ${calculateSize(-7)};
  overflow: hidden;
  margin: ${margin};
`;
const NodeContainer = styled.img`
  height: ${calculateSize()};
  overflow: hidden;
  margin: ${margin};
`;
const ReactContainer = styled.img`
  height: ${calculateSize()};
  overflow: hidden;
  margin: ${margin};
`;
const ReactNativeContainer = styled.img`
  height: ${calculateSize()};
  overflow: hidden;
  margin: ${margin};
`;
const styledComponentsContainer = styled.img`
  height: ${calculateSize(16)};
  overflow: hidden;
  margin: ${margin};
`;
const GcpContainer = styled.img`
  height: ${calculateSize(5)};
  overflow: hidden;
  margin: ${margin};
`;

function ApiIcon() {
  return <ApiContainer src={api} alt='API' />;
}
function AxiosIcon() {
  return <AxiosContainer src={axios} alt='Axios' />;
}
function ExpoIcon() {
  return <ExpoContainer src={expo} alt='Expo' />;
}
function ExpressIcon() {
  return <ExpressContainer src={express} alt='Express' />;
}
function FormikIcon() {
  return <FormikContainer src={formik} alt='Formik' />;
}
function GoogleMapsIcon() {
  return <GoogleMapsContainer src={googleMaps} alt='Google Maps' />;
}
function JavascriptIcon() {
  return <JavascriptContainer src={javascript} alt='Javascript' />;
}
function JwtIcon() {
  return <JwtContainer src={jwt} alt='JSON Web Token' />;
}
function MaterialuiIcon() {
  return <MaterialuiContainer src={materialui} alt='Materual UI' />;
}
function MongodbIcon() {
  return <MongodbContainer src={mongodb} alt='MongoDB' />;
}
function MongooseIcon() {
  return <MongooseContainer src={mongoose} alt='Mongoose' />;
}
function NodeIcon() {
  return <NodeContainer src={node} alt='Node' />;
}
function ReactIcon() {
  return <ReactContainer src={react} alt='React' />;
}
function ReactNativeIcon() {
  return <ReactNativeContainer src={reactNative} alt='React Native' />;
}
function styledComponentsIcon() {
  return (
    <styledComponentsContainer src={styledComponents} alt='Styled Components' />
  );
}
function GcpIcon() {
  return <GcpContainer src={gcp} alt='Google Cloud Platform' />;
}

function TechIcon({ iconName }) {
  if (iconName === 'API') return <ApiIcon />;
  if (iconName === 'AXIOS') return <AxiosIcon />;
  if (iconName === 'Expo') return <ExpoIcon />;
  if (iconName === 'Express') return <ExpressIcon />;
  if (iconName === 'Formik') return <FormikIcon />;
  if (iconName === 'GoogleMaps') return <GoogleMapsIcon />;
  if (iconName === 'Javascript') return <JavascriptIcon />;
  if (iconName === 'JWT') return <JwtIcon />;
  if (iconName === 'MaterialUI') return <MaterialuiIcon />;
  if (iconName === 'MongoDB') return <MongodbIcon />;
  if (iconName === 'Mongoose') return <MongooseIcon />;
  if (iconName === 'Node') return <NodeIcon />;
  if (iconName === 'React') return <ReactIcon />;
  if (iconName === 'ReactNative') return <ReactNativeIcon />;
  if (iconName === 'styledComponents') return <styledComponentsIcon />;
  if (iconName === 'GCP') return <GcpIcon />;
  if (iconName === 'all')
    return (
      <>
        <ApiIcon />
        <AxiosIcon />
        <ExpoIcon />
        <ExpressIcon />
        <FormikIcon />
        <GoogleMapsIcon />
        <JavascriptIcon />
        <JwtIcon />
        <MaterialuiIcon />
        <MongodbIcon />
        <MongooseIcon />
        <NodeIcon />
        <ReactIcon />
        <ReactNativeIcon />
        <styledComponentsIcon />
        <GcpIcon />
      </>
    );
  else return 'error';
}

export default TechIcon;
