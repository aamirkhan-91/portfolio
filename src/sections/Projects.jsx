import React from "react";
import styled from "styled-components";

import { SectionContent, SectionTitle } from "../components/Section";
import { RocketIcon } from "../shared/Icons";
import { theme } from "../styles";

const Project = ({ title, description, points, stack, image }) => (
  <StyledProject>
    <h2>{title}</h2>
    <div>
      <div>
        <p>{description}</p>
        <ul>
          {points.map((point) => (
            <li>{point}</li>
          ))}
        </ul>
      </div>
      <img src={image} alt={`${title}`} />
    </div>
  </StyledProject>
);

const Projects = () => {
  const projects = [
    {
      title: "FireChat",
      description: "A realtime chat application.",
      stack: [],
      points: [
        "Developed a real-time chat application using React & Redux.",
        "Styled the application from scratch using self-created components. Design inspired heavily by WhatsApp Web.",
        "Implemented real-time chat functionality using Firebase Cloud Firestore.",
      ],
      image: "/images/firechat.png",
    },
  ];

  return (
    <StyledProjects>
      <SectionContent>
        <SectionTitle>
          <RocketIcon />
          <span>Projects</span>
        </SectionTitle>
        {projects.map((project) => (
          <Project
            title={project.title}
            description={project.description}
            points={project.points}
            stack={project.stack}
            image={project.image}
          />
        ))}
      </SectionContent>
    </StyledProjects>
  );
};

export default Projects;

const StyledProjects = styled.div``;

const StyledProject = styled.div`
  padding: 2rem 3rem 3rem;

  background-color: white;
  border-radius: ${theme.borderRadius.card};
  box-shadow: ${theme.boxShadow.card};

  > h2 {
    color: ${theme.textColors.dark};

    font-size: 2rem;

    margin-bottom: 4rem;
    position: relative;

    &::after {
      content: "";

      position: absolute;
      width: 100%;

      top: calc(100% + 10px);
      left: 0;

      border-bottom: 1px solid #eee;
    }
  }

  > div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    ul {
      margin-top: 1rem;
      padding-left: 2rem;
    }

    > img {
      height: 250px;
    }

    @media (max-width: 1000px) {
      flex-direction: column;

      > img {
        margin-top: 2rem;
        width: 100%;
        height: auto;
      }
    }
  }

  & + & {
    margin-top: 2rem;
  }
`;
