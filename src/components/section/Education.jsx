import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import { education } from "../../data-20241007T042432Z-001/data/constants"; // Ensure this path is correct
import EducationCard from "../cards/EducationCard"; // Ensure this path is correct
import EarthCanvas from "../canvas/Earth"; // Uncomment if you plan to use this component
import StyledStarsCanvas from "../canvas/Star";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Corrected typo */
  position: relative; /* Corrected typo */
  z-index: 1;
  align-items: center;
  overflow-x:hidden;
  overflow-y:hidden;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center; /* Changed from space-between to center for better alignment */
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px; /* Prevents overflow */
  gap: 12px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
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

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Education = () => {
  return (
    <Container id="Education">
      <StyledStarsCanvas />
      <Wrapper>
        <Title>Education</Title>
        <Desc style={{ marginBottom: "40px" }}>
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </Desc>

        <VerticalTimeline>
          {education.map((edu, index) => (
            <EducationCard key={`education-${index}`} education={edu} />
          ))}
        </VerticalTimeline>
        {/* <EarthCanvas /> Uncomment this line if you want to include the EarthCanvas component */}
      </Wrapper>
    </Container>
  );
};

export default Education;
