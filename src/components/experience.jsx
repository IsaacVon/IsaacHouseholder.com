import React from "react";

export default function Experience() {
  return (
    // <div className="viewContainer">

    <div id="experience" className="experienceContainer">
      <div className="viewContainer">
        <div>
          <h4 className="color">Experience</h4>

          {/* California Home Team */}
          <div>
            <p className="companyNameCHT">California Home Team</p>

            <p className="companyDescription">
              California Home Team is a small real estate company that has been
              very successful in the real estate business for over 30 years.
              They specialize in orange county residential homes.{" "}
            </p>
            <p className="jobTitle">Real Estate Consultant (2019-2020)</p>
            <ul className="jobDetails">
              <li>
                Working with investors on investment properties and researching
                the appropriate statistics
              </li>
              <li>Purchase Contract negotiation</li>
              <li>
                Staying up to date on market conditions and trends. (Interest
                rates, prices, supply/demand)
              </li>
              <li>Lead generation (In Person, Internet, phone and email)</li>
              <li> Working with existing customers to help them find homes.</li>
              <li>Holding open houses and advertising for the event</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Karma */}
      <div className="viewContainer">
        <div className="jobContainerImage">
          <div className="karmaPhotoContainer">
            <p className="karmaTitle">Karma Automotive</p>
          </div>
          <p className="companyDescriptioUnderImage">
            Karma is a design and manufacturer of high-class luxury hybrid cars
            that are designed to continually challenge the market for the
            sustainable future of luxury cars.
          </p>
          <p className="jobTitle">
            Vehicle Integration and Validation Engineer (2019-2019)
          </p>
          <ul className="jobDetails">
            <li>
              Correlated between marketing, senior management, and design
              studio, accessing the feasibility of producing features against
              customer requirements and exceeding those expectations where
              viable based on cost and manufacturability.
            </li>
            <li>
              Managed multiple projects with cross-functional design engineering
              teams and managers to ensure the vehicle meets critical targets.{" "}
            </li>
            <li>
              Responsible for overseeing an average of 15 projects
              simultaneously, which resulted in an overall 90% completion rate
              to set targets.
            </li>
          </ul>
       

  
          <p className="jobTitle">Test Engineer (2016 – 2019)</p>
          <ul className="jobDetails">
            <li>
              Successfully started up and operated a fastener and material test
              lab. This initiative resulted in an operating annual cost savings
              of $375,000 year over year by eliminating the need to outsource.
            </li>
            <li>
              Developed test plans and documented test procedures to standardize
              a variety of testing processes.
            </li>
            <li>
              Operated Micro Control MC911 and 250KN Instron tensile equipment.
            </li>
            <li>
              Established relationships with shop floor personnel performing
              root cause analysis onsite at the vehicle production plant
              facility.
            </li>
            <li>
              Eliminated the need for specialty fasteners by successfully
              standardizing fasteners used throughout the vehicle. This
              initiative saved approximately 1.7M over the production cycle of
              vehicles for over two years.
            </li>
          </ul>
        </div>
      </div>

      {/* Bourns */}
      <div className="viewContainer">
        <div>
          <p className="companyName">Bourns Electronics</p>

          <p className="companyDescription">
            Bourns is an electronics company that develops, manufactures, and
            supplies electronic components to a variety of industries including
            automotive, industrial, instrumentation, medical electronics,
            consumer equipment, and portable electronics.
          </p>
          <p className="jobTitle">
            Electronics Engineer (Internship Summer 2015)
          </p>
          <ul className="jobDetails">
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
              Was introduced to coding in this position and gained an
              understanding of electronics at the component level.
            </li>
            <li>
              Programmed an Arduino to process multiple analog inputs to output
              a stable and consistent digital reading.{" "}
            </li>
          </ul>
        </div>
      </div>

      {/* Dougans */}
      <div className="viewContainer">
        <div className="jobContainerImage">
          <div className="dougansPhotoContainer">
            <p className="dougansTitle">Dougans Racing</p>
          </div>
          <p className="companyDescriptioUnderImage">
            Dougan’s is a racing engine building business and machine shop. They
            primarily operate with trophy trucks that race in the Baja 1000
            sector. (This is how I met my Fiancé, I was friends with her dad who
            was the head engine builder)
          </p>
          <p className="jobTitle">Dyno Technician (2010-2015) </p>
          <ul className="jobDetails">
            <li>
              Coordinate between various machinists and technicians preparing
              racing engines for final assembly.
            </li>
            <li>
              Trained new employees regarding technical work to be performed,
              covering the importance of each phase for a full understanding of
              the process infrastructure through each stage.
            </li>
          </ul>
        </div>
      </div>
    </div>

    // </div>
  );
}
