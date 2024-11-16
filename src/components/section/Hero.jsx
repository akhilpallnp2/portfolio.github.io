import React from 'react';
import styled from "styled-components";
import { Bio } from '../../data-20241007T042432Z-001/data/constants';
import Typewriter from 'typewriter-effect';
import p1 from '../../images/p3.jpg';
import HeroBgAnimation from '../HeroBgAnimation';
import {Tilt} from 'react-tilt';
import { motion } from "framer-motion";
import {headContainerAnimation,headContentAnimation,headTextAnimation} from '../../utils/motion'
// import StarsCanvas from '../canvas/Star';
import StyledStarsCanvas from '../canvas/Star';



const HeroContainer = styled.div`
width:100%;
height:100vh;
overflow-x:hidden;
overflow-y:hidden;
  display:flex;
  justify-content:center;
  position:relative;
  padding:80px 30px;
  z-index:1;
  @media(max-width:960px){
    padding:66px 16px;
  }
   
  @media(max-width:640px){
    padding:32px 16px;
  }

  clip-path:polygon(0 0,100% 0,100% 100%,70% 95%,0 100%);

`
const HeroInnerContainer = styled.div`
  position:relative;
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:100%;
  max-width:1200px;

  @media (max-width:960px){
    flex-direction:column;
  }
`
const HeroLeftContainer = styled.div`
  width:100%;
  order:1;
  @media(max-width:960px){
    order:2;
    margin-bottom:30px;
    display:flex;
    flex-direction:column;
    align-items:center;
  }
`
const HeroRigthContainer = styled.div`
  width:100%;
  order:1;
  display:flex;
  align-items:center;
  justify-content:center;
    @media(max-width:960px){
    order:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-bottom:80px;
  }

    @media(max-width:640px){
    margin-bottom:30px;
  }
`
const Title = styled.div`
  font-weight:700;
  font-size:50px;
  color:${({theme})=>theme.text_primary};
  line-height:68px;

  @media(max-width:960px){
    text-align:center;
  }

  @media(max-width:960px){
    font-size:40px;
    // line-height:48px;
    margin-bottom:8px;
  }
`
const TextLoop = styled.div`
  font-weight:600;
  font-size:32px;
  display:flex;
  gap:12px;
  color:${({theme})=>theme.text_primary};
  line-height:68px;

  @media(max-width:960px){
    text-align:center;
  }

  @media(max-width:960px){
    font-size:22px;
    line-height:48px;
    margin-bottom:16px;
  }
`
const Span = styled.div`
  color:${({theme})=>theme.primary};
  cursor:pointer;
`
const SubTitle = styled.div`
  font-size:20px;
  line-height:32px;
  margin-bottom:42px;
  color:${({theme})=>theme.text_primary + 95};

  @media(max-width:960px){
    text-align:center;
  }

    @media (max-width: 640px) {
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    padding:0px 20px;
    margin-bottom: 24px;
  }

`

const ResumeBtn = styled.a`
  -webkit-appearance:button;
  -moz-appearance:button;
  appearance:button;
  text-decoration:none;
  width:95%;
  max-width:300px;
  text-align:center;
  padding:16px 0;
background: linear-gradient(45deg, #ff6b6b, #f06595, #845ef7);
cursor: pointer;
transition: all 0.3s ease-in-out; 
 box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    background: linear-gradient(45deg, #845ef7, #f06595, #ff6b6b);
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
border-radius:50px;
font-weight:700;
font-size:18px;
 @media(max-width:960px){
    text-align:center;
  }

    @media (max-width: 640px) {
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    padding:0px 20px;
    margin-bottom: 24px;
  }

`
const Img = styled.img`
border-radius:10%;
width:100%;
height:100%;
max-width:1000px;
max-height:400px;
border:2px solid ${({theme})=>theme.primary};
@media (max-width:640px){
  max-width:280px;
max-height:280px;
border-radius:50%;
}
`
const HeroBg = styled.div`
  position:absolute;
  display:flex;
  top:50%;
  right:0;
  bottom:0;
  left:50%;
  width:100%;
  height:100%;
  max-width:1360px;
  justify-content:end;
  -webkit-transform:translateX(-50%) translateY(-50%)
`


const Hero = () => {
  return (
    <div id='about'>
      <HeroContainer>
        <HeroBg>
          <StyledStarsCanvas />
          <HeroBgAnimation />
        </HeroBg>
        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <motion.div {...headTextAnimation}>
                <Title>
                  Hi, I am <br /> {Bio?.name || "Name not available"}
                </Title>

                <TextLoop>
                  I am a
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio?.roles || ["Role not available"],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Span>
                </TextLoop>
              </motion.div>
              <motion.div {...headContentAnimation}>
              <SubTitle>
                {Bio?.description || "Description not available"}
              </SubTitle>
              </motion.div>
              
              <ResumeBtn>Check Resume</ResumeBtn>
            </HeroLeftContainer>
            <HeroRigthContainer>
              <motion.div {...headContentAnimation}>
              <Tilt>
                <Img src={p1} alt="Neeraj Pal" />
              </Tilt>
              </motion.div>
              
            </HeroRigthContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default Hero;