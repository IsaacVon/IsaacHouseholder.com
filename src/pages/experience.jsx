import React from "react";
import styled from "styled-components";

import textBackground from "../assets/swirlBackground2.png";
import { device } from "../utils/device";
import colors from "../config/colors"
import cht from "../assets/companyImages/cht.png";
import karma from "../assets/companyImages/karma.png";
import bourns from "../assets/companyImages/bourns.png";
import dougans from "../assets/companyImages/dougans.png";

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

const PhotoContainer = styled.section`
  width: 100%;
  max-height: 304px;
  border-radius: 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  -o-border-radius: 20px;
  overflow: hidden;
  position: relative;
  margin-top: 50px;
`;

const ChtImage = styled.img`
  width: 100%;
`;

const KarmaImage = styled.img`
  /* width: 900px; */
  width: 100%;
`;

const BournsImage = styled.img`
  width: 100%;
`;

const DougansImage = styled.img`
  width: 100%;
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
`;

const CompanyDescription = styled.h3`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  max-width: 580px;
  font-weight: 300;
  font-size: 12px;
  line-height: 19px;
  text-align: justify;
  margin: 20px 20px 10px 20px;
`;

const JobDetails = styled.ul`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
        <PhotoContainer>
          <CompanyName>California Home Team</CompanyName>
          <ChtImage src={cht} alt="California Home Team" />
        </PhotoContainer>
        <CompanyDescription>
          California Home Team is a small real estate company that has been very
          successful in the real estate business for over 30 years. They
          specialize in orange county residential homes.{" "}
        </CompanyDescription>
        <JobTitle>Real Estate Consultant (2019-2020)</JobTitle>
        <JobDetails>
          <li>
            Working with investors on investment properties and researching the
            appropriate statistics.
          </li>
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
        <PhotoContainer>
          <CompanyName>Karma Automotive</CompanyName>
          <KarmaImage src={karma} alt="Karma Automotive" />
        </PhotoContainer>
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
            Correlated between marketing, senior management, and design studio,
            accessing the feasibility of producing features against customer
            requirements and exceeding those expectations where viable based on
            cost and manufacturability.
          </li>
          <li>
            Managed multiple projects with cross-functional design engineering
            teams and managers to ensure the vehicle meets critical targets.{" "}
          </li>
          <li>
            Responsible for overseeing an average of 15 projects simultaneously,
            which resulted in an overall 90% completion rate to set targets.
          </li>
        </JobDetails>

        <JobTitle>Test Engineer (2016 – 2019)</JobTitle>
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
        <PhotoContainer>
          <CompanyName>Bourns Electronics</CompanyName>
          <BournsImage src={bourns} alt="bourns" />
        </PhotoContainer>

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
            stable and consistent digital reading.{" "}
          </li>
          <li>
            Designed using Autodesk Inventor, 3D printed, and tested air
            actuated linear rail systems, participating in general
            troubleshooting during the entire design process.
          </li>
          <li>
            Assisted in the design of a CNC soldering machine, which was
            implemented into the production process.{" "}
          </li>
          <li>
            Gained an understanding of electronics at the component level.
          </li>
        </JobDetails>
      </JobContainer>

      {/* Dougans */}
      <JobContainer>
        <PhotoContainer>
          <CompanyName>Dougans Racing</CompanyName>
          <DougansImage src={dougans} alt="dougans" />
        </PhotoContainer>
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
