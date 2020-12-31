import React from "react";
import styled, { css } from "styled-components";

// import github from "../assets/icons/github.svg";
// import linkedin from "../assets/icons/linkedin.svg";
// import stackOverflow from "../assets/icons/stack-overflow.svg";
// import portrait from "../assets/images/portrait.jpg";
// import User from '../assets/icons/User';
// import Suitcase from '../assets/icons/Suitcase';
// import monitor from '../assets/icons/Monitor';
// import Shuttle from '../assets/icons/Shuttle';
import { RocketIcon, SkillsIcon, UserIcon, WorkIcon } from "../shared/Icons";
import { theme } from "../styles";

const NavidationMenu = () => {
  return (
    <div>
      <NavigationItem href="#about" isActive>
        <UserIcon fill={theme.colors.primary} />
        <span>About</span>
      </NavigationItem>
      <NavigationItem href="#work">
        <WorkIcon />
        <span>Work Experience</span>
      </NavigationItem>
      <NavigationItem href="#skills">
        <SkillsIcon />
        <span>Skills</span>
      </NavigationItem>
      <NavigationItem href="#projects">
        <RocketIcon />
        <span>Projects</span>
      </NavigationItem>
    </div>
  );
};

const Sidebar = () => (
  <StyledSidebar>
    <Intro>
      <Portrait />
      <h1>Aamir Khan</h1>
      <h2>Frontend Web Developer</h2>
    </Intro>
    <NavidationMenu />
    <SocialLinks>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/aamir-khan-420298b7/"
      >
        <img src="/icons/linkedin.svg" alt="Linkedin Logo" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/aamirkhan-91"
      >
        <img src="/icons/github.svg" alt="Github Logo" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://stackoverflow.com/users/2227788/aamir-khan?tab=profile"
      >
        <img src="/icons/stack-overflow.svg" alt="StackOverflow Logo" />
      </a>
    </SocialLinks>
  </StyledSidebar>
);

export default Sidebar;

const StyledSidebar = styled.div`
  flex: 0 0 35rem;

  background-color: ${theme.colors.primary};

  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.25);

  z-index: 10;

  display: flex;
  flex-direction: column;

  transition: 100ms ease;

  @media (max-width: 800px) {
  }
`;

const Intro = styled.div`
  width: 100%;

  padding: ${theme.padding.medium};

  text-align: center;

  margin-bottom: 1rem;

  > h1 {
    color: ${theme.textColors.sidebarText};
    text-transform: uppercase;

    margin-bottom: 0.5rem;

    text-shadow: 2px 5px 5px rgba(0, 0, 0, 0.25);
  }

  > h2 {
    color: ${theme.textColors.sidebarText};
    text-shadow: 2px 5px 5px rgba(0, 0, 0, 0.25);
    font-weight: 300;
  }
`;

const Portrait = styled.div`
  width: 17.5rem;
  height: 17.5rem;

  margin: 0 auto 2rem;
  border: 3px solid white;
  border-radius: 50%;
  overflow: hidden;

  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.25);

  background: url("/images/portrait.jpg");
  background-size: cover;

  > img {
    height: 100%;
    width: 100%;
  }
`;

const NavigationItem = styled.a`
  color: ${theme.textColors.sidebarText};
  padding: 1.5rem 2rem;

  display: flex;
  text-decoration: none;
  align-items: center;

  position: relative;

  font-size: 2rem;
  font-weight: 700;

  > svg {
    margin-right: 1rem;
  }

  border-bottom: 1px solid #fff;

  &:first-child {
    border-top: 1px solid #fff;
  }

  user-select: none;

  &:hover {
    ${(props) =>
      !props.isActive &&
      css`
        background-color: rgba(255, 255, 255, 0.25);
      `};
  }

  ${(props) =>
    props.isActive &&
    css`
      color: ${theme.colors.primary};
      background-color: white;

      &::after {
        content: "";
        position: absolute;

        left: 100%;
        top: 50%;

        ${"" /* transform: translateY(-50%) translateX(-50%) rotate(45deg); */}

        ${"" /* width: 40px; */}
      ${"" /* height: 100%; */}

      background-color: white;
      }
    `};

  transition: 100ms ease-out;
`;

const SocialLinks = styled.div`
  margin-top: auto;
  width: 100%;

  border-top: 1px solid #fff;

  display: flex;
  justify-content: space-between;

  padding: ${theme.padding.small} ${theme.padding.medium};

  > a {
    width: 50px;
    height: 50px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 100ms ease-out;

    &:hover {
      background-color: rgba(255, 255, 255, 0.15);
    }
  }

  img {
    width: 35px;
    height: 35px;
  }
`;
