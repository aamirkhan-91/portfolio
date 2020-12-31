import React from "react";
import styled from "styled-components";

import { theme } from "../styles";

const SkillsCard = ({ domain, items }) => (
  <StyledSkillCard>
    <h2>{domain}</h2>
    <div>
      {items.map((item) => (
        <Skill key={item.name} skill={item} />
      ))}
    </div>
  </StyledSkillCard>
);

const Skill = ({ skill }) => {
  return (
    <StyledSkill>
      <img src={skill.icon} alt={`${skill.name} icon`} />
      <h3>{skill.name}</h3>
    </StyledSkill>
  );
};

export default SkillsCard;

const StyledSkillCard = styled.div`
  width: 100%;
  padding: 2rem 3rem 3rem;

  background-color: white;
  box-shadow: ${theme.boxShadow.card};
  border-radius: ${theme.borderRadius.card};

  &:not(:first-child) {
    margin-top: 5rem;
  }

  > h2 {
    font-size: 2rem;

    margin-bottom: 4rem;
    position: relative;

    color: ${theme.textColors.dark};

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
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
    grid-row-gap: 15px;
    justify-items: center;
    align-items: start;

    @media (max-width: 1000px) {
      grid-template-columns: repeat(auto-fill, minmax(75px, 1fr));
    }
  }
`;

const StyledSkill = styled.div`
  padding: 0.75rem 1.25rem;
  text-align: center;

  > h3 {
    margin-top: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${theme.textColors.dark};
  }

  > img {
    width: 50px;
    height: 50px;
  }
`;
