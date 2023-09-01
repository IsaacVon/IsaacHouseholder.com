
import React from 'react';
import styled from 'styled-components';

import { device } from '../utils/device';
import colors from '../config/colors';

// Add your asset imports here

const JobComponent = ({ job }) => (
  <Container>
    <JobTitle>{job.title}</JobTitle>
    <CompanyLogo src={job.companyLogo} />
    {/* Add other job details here */}
  </Container>
);

const Experience = () => {
  const jobs = [
    {
      title: "Job 1",
      companyLogo: "path/to/logo1.png",
      // Add other job details here
    },
    {
      title: "Job 2",
      companyLogo: "path/to/logo2.png",
      // Add other job details here
    },
    // Add more jobs here
  ];

  return (
    <>
      {jobs.map((job, index) => (
        <JobComponent key={index} job={job} />
      ))}
    </>
  );
};

// Your styled-components here

export default Experience;
