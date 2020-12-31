import React from "react";
import styled from "styled-components";

import TimelineItem from "./TimelineItem";

const Timeline = ({ items }) => {
  const timeline = items.map((item, index) => (
    <TimelineItem
      key={item.companyName}
      item={item}
      first={index === 0}
      last={index === items.length - 1}
      index={index}
    />
  ));

  return (
    <StyledTimeline>
      <TimelineSkeleton />
      {timeline}
    </StyledTimeline>
  );
};

export default Timeline;

const StyledTimeline = styled.div`
  width: 100%;
  margin-top: 10rem;

  position: relative;
`;

const TimelineCircle = `
  content: '';

  width: 15px;
  height: 15px;

  border-radius: 50%;

  position: absolute;

  background-color: white;

  left: 50%;

  transform: translateX(-50%);
`;

const TimelineSkeleton = styled.div`
  position: absolute;

  left: 50%;
  top: 50%;

  height: calc(100% + 100px);
  width: 3px;

  transform: translateY(-50%);

  background-color: #fff;

  &::before {
    ${TimelineCircle};
    top: 0;
  }

  &::after {
    ${TimelineCircle};
    bottom: 0;
  }
`;
