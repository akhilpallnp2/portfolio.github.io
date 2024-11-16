import React, { useState } from 'react';
import styled, { useTheme } from "styled-components";
import { Link as LinkR } from 'react-router-dom';
import { HiMenu } from "react-icons/hi";
import { Bio } from '../data-20241007T042432Z-001/data/constants';
// import {theme} from '../utils-20241007T042443Z-001/utils/Themes'

const Nav = styled.div`
width:100%;
    background-color:${({ theme }) => theme};
    height:80px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1rem;
    position:sticky;
    top:0px;
    z-index:10;
    color:white;
    overflow-x:hidden;
  overflow-y:hidden;
`

const NavbarContainer = styled.div`
    width:100%;
    padding:0 24px;
    justify-content:space-between;
    background-color:${({ theme }) => theme.bg};
    height:80px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1rem;
    //  overflow-x:hidden; 
`;
const NavLogo = styled(LinkR)`
    font-weight:500;
    font-size:18px;
    width:80%;
    padding:0px 6px;
    text-decoration:none;
    color:inherit;
`
const NavItems = styled.ul`
width:100%;
display:flex;
align-items:center;
justify-content:center;
gap:32px;
padding:0 6px;
list-style:none;
@media screen and (max-width:768px){
        display:none
    }
`
const NavLink = styled.a`
    color:${({ theme }) => theme.text_primary};
    font-weight:500;
    cursor:pointer;
    transition:all 0.2s ease-in-out;
    text-decoration:none;
    &:hover{
        color:${({ theme }) => theme.primary}
    }
`
const ButtonContainer = styled.div`
    width:80%;
    height:100%;
    display:flex;
    justify-content:end;
    align-items:center;
    padding:0 6px;
    @media screen and (max-width:768px){
        display:none
    }
`
const GithubButton = styled.a`
    border:1px solid ${({ theme }) => theme.primary};
    color:${({ theme }) => theme.primary};
    justify-content:center;
    display:flex;
    align-items:center;
    border-radius:20px;
    cursor:pointer;
    padding:10px 20px;
    font-size:16px;
    font-weight:500;
    transition:all 0.6s ease-in-out;
    text-decoration:none;
    &:hover{
        background-color:${({ theme }) => theme.primary};
        color:${({ theme }) => theme.text_primary}
    }
`
const MobileIcon = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    color:${({ theme }) => theme.text_primary};
    display:none;
    @media screen and (max-width:768px){
        display:block;
    }
`
const MobileMenu = styled.ul`
   width:89%; 
    display:flex;
    align-items:center;
    justify-content:center;
    gap:16px;
    flex-direction:column;
    list-style:none;
    padding:12px 40px 24px 40px;
    background:${({theme})=>theme.card_light + 99};
    position:absolute;
    top:65px;
    transition:all 0.6s ease-in-out;
    transform:${({isOpen})=>isOpen?"translateY(0)":"translateY(-100%)"};
    border-radius:0 0 20px 20px;
    box-shadow:0 0 10px 0 rgba(0,0,0,0.2);
    opacity:${({isOpen})=>(isOpen ? "100%":"0")};
    z-index:${({isOpen})=>(isOpen ? "1000":"-1000")};
    @media screen and (min-width:768px){
        display:none;
    }
    
`
const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false);
    const theme = useTheme();
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    Neeraj Pal
                </NavLogo>
                <MobileIcon onClick={()=>setIsOpen(!isOpen)}>
                <HiMenu />
                </MobileIcon>
                <NavItems>
                    <NavLink href='#About'>About</NavLink>
                    <NavLink href='#Skills'>Skills</NavLink>
                    <NavLink href='#Experience'>Experience</NavLink>
                    <NavLink href='#Projects'>Projects</NavLink>
                    <NavLink href='#Education'>Education</NavLink>
                </NavItems>
               
                {
                    isOpen &&(
                <MobileMenu isOpen={isOpen}>
                <NavLink href='#About'>About</NavLink>
                <NavLink href='#Skills'>Skills</NavLink>
                    <NavLink href='#Experience'>Experience</NavLink>
                    <NavLink href='#Projects'>Projects</NavLink>
                    <NavLink href='#Education'>Education</NavLink>    
                    <GithubButton href={Bio.Github} style={{background:theme.primary,color:theme.text_primary}}target='Blank'>Github Profile</GithubButton>
                </MobileMenu>
                
                )}
                
                
                <ButtonContainer >
                    <GithubButton href={Bio.Github} target='Blank'>Github Profile</GithubButton>
                </ButtonContainer>
            </NavbarContainer>
            </Nav>
        

    )
}

export default Navbar
