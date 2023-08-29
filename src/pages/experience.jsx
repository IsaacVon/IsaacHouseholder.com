import React from 'react';
import styled from 'styled-components';

import { device } from '../utils/device';
import colors from '../config/colors';

import textBackground from '../assets/swirlBackground2.png';
import chtSmall from '../assets/companyImages/cht_small.png';
import chtMedium from '../assets/companyImages/cht_medium.png';
import karmaSmall from '../assets/companyImages/karma_small.png';
import karmaMedium from '../assets/companyImages/karma_medium.png';
import bournsSmall from '../assets/companyImages/bourns_small.png';
import bournsMedium from '../assets/companyImages/bourns_medium.png';
import dougansSmall from '../assets/companyImages/dougans_small.png';
import dougansMedium from '../assets/companyImages/dougans_medium.png';

const ImageHeight = '300px';
const srcSetMediumWidth = '580w';
const srcSetSmallWidth = '30w';

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  place-items: center;
  margin-top: 44px;
  padding-bottom: 200px;
`;

const JobContainer = styled.section`
  width: 100%;
  max-width: 580px;
  margin-top: 10px;
`;

const CompanyImage = styled.img`
  width: 100%;
`;

const CompanyPhotoTextWrapper = styled.section`
  max-height: ${ImageHeight};
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-top: 50px;
`;
const CompanyImageContainer = styled.section`
  max-height: ${ImageHeight};
  overflow: hidden;
  @media ${device.tablet} {
    border-radius: 20px;
  }
`;

const Section = styled.h1`
  background: url(${textBackground});
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  text-align: center;
  color: ${colors.black};
  font-size: 34px;
`;

const CompanyName = styled.h2`
  color: white;
  font-weight: normal;
  font-size: 26px;
  text-align: center;
  position: absolute;
  width: 100%;
  bottom: 7px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);

  @media ${device.mobileS} {
    /* top: 256px; */
  }

  @media ${device.tablet} {
    /* top: 293px;
    color: green; */
  }
`;

const JobTitle = styled.h3`
  font-weight: normal;
  font-size: 18px;
  text-align: center;
  margin: 50px 20px 0px 20px;
  cursor: default;
`;

const CompanyDescription = styled.h3`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  max-width: 580px;
  font-weight: 300;
  font-size: 12px;
  line-height: 19px;
  text-align: justify;
  margin: 20px 20px 10px 20px;
`;

const JobDetails = styled.ul`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding-inline-start: 15px;
  font-weight: 300;
  font-size: 16px;
  line-height: 25px;
  text-align: left;
  margin: 10px 28px;
`;

export default function Experience() {
  return (
    <Wrapper>
      <Section>Experience</Section>
      <JobContainer>
        <CompanyPhotoTextWrapper>
          <CompanyName>Ai Interactions</CompanyName>
          <CompanyImageContainer>
            {/* Add your Ai Interactions logo here */}
          </CompanyImageContainer>
        </CompanyPhotoTextWrapper>
        <CompanyDescription>
          Production-grade ai powered customer service solutions using OpenAI's
          APIs. Servers that cater to custom Knowledge bases for Language models
          like GPT-4. Hosted on AWS.
        </CompanyDescription>
        <JobTitle>Founder (Jun 2023 - Present)</JobTitle>
        <JobDetails>
          <li>
            Production-grade ai powered customer service solutions using
            OpenAI's APIs.
          </li>
          <li>
            Servers that cater to custom Knowledge bases for Language models
            like GPT-4. Hosted on AWS.
          </li>
        </JobDetails>
      </JobContainer>
      <JobContainer>
        <CompanyPhotoTextWrapper>
          <CompanyName>Own Up</CompanyName>
          <CompanyImageContainer>
            {/* Add your Own Up logo here */}
          </CompanyImageContainer>
        </CompanyPhotoTextWrapper>
        <CompanyDescription>
          Worked on a full-stack team with a modern tech stack. Made over 450
          contributions to various software development projects.
        </CompanyDescription>
        <JobTitle>Software Engineer (Jun 2022 - May 2023)</JobTitle>
        <JobDetails>
          <li>Worked on a full-stack team with a modern tech stack.</li>
          <li>
            Made over 450 contributions to various software development
            projects.
          </li>
          <li>Integrated GitHub Actions and Playwright testing with AWS.</li>
        </JobDetails>
      </JobContainer>
      <JobContainer>
        <CompanyPhotoTextWrapper>
          <CompanyName>Better</CompanyName>
          <CompanyImageContainer>
            {/* Add your Better logo here */}
          </CompanyImageContainer>
        </CompanyPhotoTextWrapper>
        <CompanyDescription>
          Acted as one of the primary engineering contacts for a 15+ member
          product support team.
        </CompanyDescription>
        <JobTitle>
          Product Technical Support Engineer (Apr 2021 - May 2022)
        </JobTitle>
        <JobDetails>
          <li>
            Acted as one of the primary engineering contacts for a 15+ member
            product support team.
          </li>
          <li>
            Collaborated to implement new workflows for routing incoming product
            support tickets.
          </li>
          <li>
            Worked cross-functionally to resolve issues and improve internal
            efficiency.
          </li>
        </JobDetails>
      </JobContainer>

      <JobContainer>
        <CompanyPhotoTextWrapper>
          <CompanyName>California Home Team</CompanyName>
          <CompanyImageContainer>
            <CompanyImage
              srcSet={`${chtSmall + ' ' + srcSetSmallWidth}, ${
                chtMedium + ' ' + srcSetMediumWidth
              }`}
              src={chtMedium}
              alt='California Home Team'
            />
          </CompanyImageContainer>
        </CompanyPhotoTextWrapper>
        <CompanyDescription>
          California Home Team is a small real estate company that has been very
          successful in the real estate business for over 30 years. They
          specialize in orange county homes.{' '}
        </CompanyDescription>
        <JobTitle>Real Estate Consultant (2019 - Current)</JobTitle>
        <JobDetails>
          <li>Work with investors to purchase investment properties.</li>
          <li>Created HawaiiLavaZones.com for online lead generation.</li>
          <li>Purchase Contract negotiation.</li>
          <li>Online Advertising.</li>
          <li>Holding open houses and advertising for the event.</li>
          <li>
            Staying up to date on market conditions and trends. (Interest rates,
            prices, supply/demand).
          </li>
          <li>Lead generation (In-Person, Internet, phone, and email).</li>
          <li>Working with existing customers to help them find homes.</li>
          <li>Holding open houses.</li>
        </JobDetails>
      </JobContainer>

      {/* Karma */}
      <JobContainer>
        <CompanyPhotoTextWrapper>
          <CompanyName>Karma Automotive</CompanyName>
          <CompanyImageContainer>
            <CompanyImage
              srcSet={`${karmaSmall + ' ' + srcSetSmallWidth}, ${
                karmaMedium + ' ' + srcSetMediumWidth
              }`}
              src={karmaMedium}
              alt='Karma Automotive'
            />
          </CompanyImageContainer>
        </CompanyPhotoTextWrapper>
        <CompanyDescription>
          Karma is a design and manufacturer of high-class luxury hybrid cars
          designed to continually challenge the market for the sustainable
          future of luxury cars.
        </CompanyDescription>
        <JobTitle>
          Vehicle Integration and Validation Engineer (2019-2019)
        </JobTitle>
        <JobDetails>
          <li>
            Managed multiple projects with cross-functional design engineering
            teams and managers to ensure the vehicle meets critical targets.{' '}
          </li>
          <li>
            Correlated between marketing, senior management, and design studio,
            accessing the feasibility of producing features against customer
            requirements and exceeding those expectations where viable based on
            cost and manufacturability.
          </li>
          <li>
            Responsible for overseeing an average of 15 projects simultaneously,
            which resulted in an overall 90% completion rate to set targets.
          </li>
        </JobDetails>

        <JobTitle>Lead Test Engineer (2016 – 2019)</JobTitle>
        <JobDetails>
          <li>
            Successfully started up and operated a fastener and material test
            lab. This initiative resulted in an operating annual cost savings of
            $375,000 year over year by eliminating the need to outsource.
          </li>
          <li>
            Eliminated the need for specialty fasteners by successfully
            standardizing fasteners used throughout the vehicle. This initiative
            saved approximately 1.7M over the production cycle of vehicles for
            over two years.
          </li>
          <li>
            Developed test plans and documented test procedures to standardize a
            variety of testing processes.
          </li>
          <li>
            Operated Micro Control MC911 and 250KN Instron tensile equipment.
          </li>
          <li>
            Established relationships with shop floor personnel performing root
            cause analysis onsite at the vehicle production plant facility.
          </li>
        </JobDetails>
      </JobContainer>

      {/* Bourns */}
      <JobContainer>
        <CompanyPhotoTextWrapper>
          <CompanyName>Bourns Electronics</CompanyName>
          <CompanyImageContainer>
            <CompanyImage
              srcSet={`${bournsSmall + ' ' + srcSetSmallWidth}, ${
                bournsMedium + ' ' + srcSetMediumWidth
              }`}
              src={bournsMedium}
              alt='bourns'
            />
          </CompanyImageContainer>
        </CompanyPhotoTextWrapper>

        <CompanyDescription>
          Bourns is an electronics company that develops, manufactures, and
          supplies electronic components to various industries, including
          automotive, industrial, instrumentation, medical electronics, consumer
          equipment, and portable electronics.
        </CompanyDescription>
        <JobTitle>Electronics Engineer (Internship Summer 2015)</JobTitle>
        <JobDetails>
          <li>
            Programmed an Arduino to process multiple analog inputs to output a
            stable and consistent digital reading.{' '}
          </li>
          <li>
            Designed using Autodesk Inventor, 3D printed, and tested air
            actuated linear rail systems, participating in general
            troubleshooting during the entire design process.
          </li>
          <li>
            Assisted in the design of a CNC soldering machine, which was
            implemented into the production process.{' '}
          </li>
          <li>
            Gained an understanding of electronics at the component level.
          </li>
        </JobDetails>
      </JobContainer>

      {/* Dougans */}
      <JobContainer>
        <CompanyPhotoTextWrapper>
          <CompanyName>Dougans Racing</CompanyName>
          <CompanyImageContainer>
            <CompanyImage
              srcSet={`${dougansSmall + ' ' + srcSetSmallWidth}, ${
                dougansMedium + ' ' + srcSetMediumWidth
              }`}
              src={dougansMedium}
              alt='dougans'
            />
          </CompanyImageContainer>
        </CompanyPhotoTextWrapper>
        <CompanyDescription>
          Dougan’s is a racing engine building business and machine shop. They
          primarily operate with trophy trucks that race in the Baja 1000
          sector. (This is how I met my Fiancé, I was friends with her dad who
          was the head engine builder)
        </CompanyDescription>
        <JobTitle>Dyno Technician (2010-2015) </JobTitle>
        <JobDetails>
          <li>
            Coordinate between various machinists and technicians preparing
            racing engines for final assembly.
          </li>
          <li>
            Trained new employees regarding technical work to be performed,
            covering each phase's importance for a full understanding of the
            process infrastructure through each stage.
          </li>
        </JobDetails>
      </JobContainer>
    </Wrapper>
  );
}
