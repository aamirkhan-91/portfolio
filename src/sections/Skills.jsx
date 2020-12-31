import React from "react";
import styled from "styled-components";

import { SectionContent, SectionTitle } from "../components/Section";
import SkillCard from "../components/SkillCard";
import { SkillsIcon } from "../shared/Icons";
import { theme } from "../styles";

const Skills = () => {
  const skills = [
    {
      domain: "Frameworks & Libraries",
      items: [
        {
          name: "React",
          icon: "/icons/react.png",
        },
        {
          name: "Redux",
          icon: "/icons/redux.png",
        },
        {
          name: "Angular",
          icon: "/icons/angular.png",
        },
        {
          name: "Vue",
          icon: "/icons/vue.png",
        },
        {
          name: "NodeJS",
          icon: "/icons/nodejs.png",
        },
      ],
    },
    {
      domain: "Languages",
      items: [
        {
          name: "JavaScript",
          icon: "/icons/javascript.png",
        },
        {
          name: "TypeScript",
          icon: "/icons/typescript.png",
        },
        {
          name: "HTML5",
          icon: "/icons/html5.png",
        },
        {
          name: "CSS3",
          icon: "/icons/css3.png",
        },
      ],
    },
    {
      domain: "Tools & Utilities",
      items: [
        {
          name: "SASS",
          icon: "/icons/sass.png",
        },
        {
          name: "Webpack",
          icon: "/icons/webpack.png",
        },
        {
          name: "Git",
          icon: "/icons/git.png",
        },
        {
          name: "GitHub",
          icon: "/icons/github.png",
        },
      ],
    },
  ];

  return (
    <StyledSkills>
      <SectionContent>
        <SectionTitle>
          <SkillsIcon />
          <span>Skills</span>
        </SectionTitle>
        {skills.map((skill) => (
          <SkillCard domain={skill.domain} items={skill.items} />
        ))}
      </SectionContent>
    </StyledSkills>
  );
};

export default Skills;

const StyledSkills = styled.div`
  background-size: cover;

  position: relative;

  > p {
    color: ${theme.textColors.white};
    font-size: 2rem;
    line-height: 1.5;

    text-shadow: 2px 5px 5px rgba(0, 0, 0, 0.25);
  }
`;
