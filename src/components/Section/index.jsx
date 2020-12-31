import React from 'react';
import styled from 'styled-components';

import { theme } from '../../styles';

const SectionTitle = ({ dark, children }) => <StyledSectionTitle dark={dark}>{ children }</StyledSectionTitle>;

export default SectionTitle;

const StyledSectionTitle = styled.h1`
  color: ${theme.textColors.white};
  border-bottom: 2px solid ${theme.textColors.white};

  ${(props) => props.dark && `
    color: ${theme.textColors.dark};
    border-bottom: 2px solid ${theme.textColors.dark};
  `};

  display: flex;
  align-items: center;

  > svg {
    margin-right: 1rem;
  }

  padding-bottom: 1rem;
  margin-bottom: 3rem;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.15);
`;

const SectionContent = styled.div`
  max-width: 80%;
  padding: 10rem 5rem 5rem;

  @media (max-width: 1500px) {
    margin: 0 auto;
    max-width: 90%;
  }

  @media (max-width: 1000px) {
    margin: 0 auto;
    padding: 10rem 1rem 5rem;
  }
`;

export { SectionTitle, SectionContent };
