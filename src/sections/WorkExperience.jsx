import React from "react";
import styled from "styled-components";

import { SectionContent, SectionTitle } from "../components/Section";
import Timeline from "../components/Timeline";
import { WorkIcon } from "../shared/Icons";
import { theme } from "../styles";

const WorkExperience = () => {
  const items = [
    {
      companyName: "xFlow Research",
      designation: "Network/DevOps Engineer",
      details: [
        "Setup a CI environment using Jenkins & Git.",
        "Ran deployments on AWS Ubuntu Linux machines using ssh.",
      ],
      date: "Aug 2015 - Oct 2016",
      techStack: ["java"],
    },
    {
      companyName: "Mob Inspire",
      designation: "MEAN Stack Developer",
      details: [
        "Developed an API backend for a real-time dispatch dashboard using Socket.io, MongoDB, and Node.js.",
        "Developed the Frontend for a real-time dispatch dashboard using Socket.io, AngularJS.",
      ],
      date: "Nov 2016 - Jun 2017",
      techStack: ["angular", "node", "sass"],
    },
    {
      companyName: "HireNinja",
      designation: "Frontend Web Developer",
      details: [
        "Developed and revamped a mobile application that facilitated users to order and schedule gas and other services for their car(s) at a location and time of their choosing. Worked with Ionic and Angular.",
        "Developed a Podcasting Web App for Luminary. Worked with Vue.js.",
      ],
      date: "Sep 2017 - Sep 2019",
      techStack: ["react", "vuejs", "angular", "sass", "github"],
    },
    {
      companyName: "STOQO",
      designation: "Frontend Engineer",
      details: [
        "Developed a real-time delivery scheduling & tracking dashboard using React & Redux.",
        "Refactored older code to use React Hooks.",
        "Supported the dashboard's 24/7 operation by fixing critical bugs and crashes quickly.",
      ],
      date: "Oct 2019 - Apr 2020",
      techStack: ["vuejs", "angular", "sass", "github"],
    },
  ].reverse();

  return (
    <StyledWorkExperience>
      <SectionContent>
        <SectionTitle>
          <WorkIcon />
          <span>Work Experience</span>
        </SectionTitle>
        <Timeline items={items} />
      </SectionContent>
    </StyledWorkExperience>
  );
};

export default WorkExperience;

const StyledWorkExperience = styled.div`
  position: relative;

  > p {
    color: ${theme.textColors.white};
    font-size: 2rem;
    line-height: 1.5;

    text-shadow: 2px 5px 5px rgba(0, 0, 0, 0.25);
  }
`;
