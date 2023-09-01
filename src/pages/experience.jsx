import React from 'react';
import styled from 'styled-components';
import { device } from '../utils/device';
import colors from '../config/colors';
import jobs from '../assets/jobsArray';
import SectionHeader from '../components/SectionHeader';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
  padding-bottom: 2rem;
`;
const ImageContainer = styled.div`
  position: relative;
  /* background-color: rgba(0, 0, 0, 0.7); // Semi-transparent black */
`;

const JobContainer = styled.section`
  box-sizing: border-box; // Add this line

  width: 100%;
  max-width: 580px;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 10rem;
  padding: 10px;
  border-radius: 4px;
  border: none;

  /* @media ${device.mobileL} {
    border: 2px solid ${(props) => props.backgroundColor || '#afafaf'};
  } */
`;

const CompanyImage = styled.img`
  width: 100%;
  border-radius: 4px;
`;

const CompanyName = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;

  /* position: absolute; */
  border-radius: 4px;

  bottom: 0;
  width: 100%;
  background: ${(props) => props.backgroundColor || '#afafaf'};
  color: white;
  text-align: center;
  font-size: 26px;
  font-weight: bold;
`;

const JobTitle = styled.h3`
  font-size: 1.2rem;
  text-align: center;
  margin: 3rem 1rem 0 1rem;
  color: ${colors.text};
`;

const Description = styled.p`
  max-width: 580px;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: justify;
  margin: 1rem;
  color: ${colors.text};
`;

const Details = styled.ul`
  padding-inline-start: 1rem;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: left;
  margin: 1rem 2rem;
  color: ${colors.text};
`;

const Job = ({ job }) => (
  <JobContainer backgroundColor={job.titleBackgroundColor}>
    <ImageContainer>
      <CompanyImage src={job.image.medium} alt={job.companyName} />
      <CompanyName backgroundColor={job.titleBackgroundColor}>
        {job.companyName}
      </CompanyName>
    </ImageContainer>
    <Description>{job.description}</Description>
    <JobTitle>{job.title}</JobTitle>
    <Details>
      {job.details.map((detail, i) => (
        <li key={i}>{detail}</li>
      ))}
    </Details>
  </JobContainer>
);

export default function Experience() {
  return (
    <>
      <SectionHeader>Experience</SectionHeader>
      <Wrapper>
        {jobs.map((job, i) => (
          <Job key={i} job={job} />
        ))}
      </Wrapper>
    </>
  );
}
