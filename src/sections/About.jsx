import React from "react";
import styled from "styled-components";

import { SectionContent, SectionTitle } from "../components/Section";
import { UserIcon } from "../shared/Icons";
import { theme } from "../styles";

const About = () => (
  <StyledAbout>
    <SectionContent>
      <SectionTitle>
        <UserIcon />
        <span>About Me</span>
      </SectionTitle>
      <p>
        Hello! I am Aamir, a Computer Scientist from Islamabad, Pakistan with
        over 5 years of professional work experience. I've been specialising as
        a Front End Developer for the last 3 years and have acquired working
        experience in React, Angular and Vue.js. I have an insatiable desire to
        do things the right way and always strive to implement best practices in
        my work.
      </p>
    </SectionContent>
  </StyledAbout>
);

export default About;

const StyledAbout = styled.div`
  min-height: 75vh;

  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 40%,
      ${theme.colors.body} 100%
    ),
    url("/images/background.jpg");
  background-size: cover;

  position: relative;

  p {
    color: ${theme.textColors.white};
    font-size: 2rem;
    line-height: 1.5;

    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.15);
  }
`;
