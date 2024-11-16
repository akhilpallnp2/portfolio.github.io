import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import { experiences } from "../../data-20241007T042432Z-001/data/constants";
import ExperienceCard from "../cards/ExperienceCard";
import StyledStarsCanvas from "../canvas/Star";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  position: relative;
  z-index: 1;
  overflow-x: hidden;  /* Prevent horizontal overflow */
  overflow-y:hidden;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const StyledVerticalTimeline = styled(VerticalTimeline)`
  width: 100%;
  max-width: 1100px; /* Ensure timeline stays within bounds */
  padding: 0 20px; /* Add padding to prevent overflow */

  /* Additional styling for smaller screens */
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const Experience = () => {
  return (
    <Container id="Experience">
      <StyledStarsCanvas />
      <Wrapper>
      
        <Title>Experience</Title>
        <Desc>
          My work experience as a software engineer and working on different
          companies and projects.
        </Desc>

        <StyledVerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          
          ))}
        </StyledVerticalTimeline>
      </Wrapper>
    </Container>
  );
};

export default Experience;
