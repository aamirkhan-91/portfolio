import React from 'react';
import styled from 'styled-components';

import { theme } from '../../styles';

const TimelineItem = ({
  item,
  index,
  first,
  last,
}) => (
  <StyledTimelineItem left={index % 2 === 0} first={first} last={last}>
    <Role>
      <div>
        <h3>{item.designation}</h3>
        <h3>{item.companyName}</h3>
      </div>
      <Duration>{item.date}</Duration>
    </Role>
    <Details>
      {/* {
      item.techStack && item.techStack.length
        ? (
          <div className="timeline__item__details__stack">
            {item.techStack.map(stackItem => <i key={stackItem} className={`fab fa-${stackItem}`} />) }
          </div>
        ) : null
      } */}
      <ul>
        { item.details.map((detail) => <li>{detail}</li>) }
      </ul>
    </Details>
  </StyledTimelineItem>
);

export default TimelineItem;

const TimelineHorizontalLine = `
  content: '';

  width: 11%;
  height: 2px;

  background-color: white;
  position: absolute;

  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 1200px) {
    display: none;
  }
`;

const StyledTimelineItem = styled.div`
  width: 45%;

  background-color: white;

  margin-bottom: 2rem;
  border-radius: ${theme.borderRadius.card};
  box-shadow: ${theme.boxShadow.card};

  position: relative;

  ${(props) => (props.left ? `
    margin-right: auto;

    &::after {
      left: calc(100%);

      ${TimelineHorizontalLine};
    }

    &::before {
      right: calc(100% + 60%);
    }
  ` : `
    margin-left: auto;

    &::after {
      right: calc(100%);

      ${TimelineHorizontalLine};
    }

    &::before {
      right: calc(100% - 2px);
    }
  `)};

  @media (max-width: 1200px) {
    margin: 4rem auto;

    width: 100%;
  }
`;

const Role = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding: 1.5rem;

  border-radius: ${theme.borderRadius.card} ${theme.borderRadius.card} 0 0;

  background-color: ${theme.colors.primary};
  color: white;
  font-size: 1.6rem;

  > div {
    flex: 0 0 70%;
    font-weight: normal;

    > h3:nth-child(2) {
      font-size: 1.5rem;
    }
  }
`;

const Duration = styled.h3`
  font-size: 1.3rem;
  font-weight: 300;
  text-align: right;
  font-style: italic;
`;

const Details = styled.div`
  padding: 2rem 2rem 2rem 3rem;
  font-size: 1.4rem;
  /* font-weight: bold; */

  > ul li {
    color: ${theme.textColors.dark};
    margin-bottom: .5rem;
  }

  /* &__stack {
    text-align: center;
    margin-bottom: 2rem;
    font-weight: normal;

    i {
      font-size: 4rem;
      // color: red;

      &:not(:last-child) {
        margin-right: 2rem;
      }
    }
  } */
`;
