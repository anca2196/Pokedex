import React from 'react'
import logo from "../../assets/logo.svg"
import Pikachu from "../../assets/pikachu.svg"
import NavButton from '../Buttons/NavButton'
import styled from 'styled-components'
import { NavLink } from "react-router-dom"

const NavBarWrapper = styled.div`
    height: 90vh;
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 20%;

    div{
        display: flex;
        flex-direction: column;
        /* margin-top: -15rem; */
    }    

    @media screen and (max-width: 750px) {
        display:none;
    }
`

const StyledActiveLink = styled(NavLink)`
    text-align: center;

    &:hover, &:focus {
        outline: none;
    }

`
const MobileNavBarWrapper = styled.div`
    display: none;

    @media screen and (max-width: 750px) {
        display:flex;
    }
`

export const NavBar = ({ setHomePageDisplay }) => {

    function handleChangeDisplayHome() {
        setHomePageDisplay("home")
    }

    function handleChangeDisplayFavs() {
        setHomePageDisplay("favs")
    }

    return (
        <NavBarWrapper>
            <img src={logo} style={{width:"15vw"}} alt="Pokedex" />
            <div>
                <StyledActiveLink to="/"> 
                    <NavButton text={"All"} onClick={ () => handleChangeDisplayHome() }/>
                </StyledActiveLink>
                <StyledActiveLink to="/"> 
                    <NavButton text={"Favorites"} onClick={ handleChangeDisplayFavs }/> 
                </StyledActiveLink>
            </div>
            <img src={Pikachu} style={{width:"15vw"}} alt="" />
        </NavBarWrapper>
    )
}

export const MobileNavbar = ({ setHomePageDisplay }) => {
    function handleChangeDisplayHome() {
        setHomePageDisplay("home")
    }

    function handleChangeDisplayFavs() {
        setHomePageDisplay("favs")
    }

    return(
        <MobileNavBarWrapper>
            <img src={logo} style={{width:"20vw"}} alt="Pokedex" />
            <div>
            <StyledActiveLink to="/"> 
                    <NavButton text={"All"} onClick={ () => handleChangeDisplayHome() }/>
                </StyledActiveLink>
                <StyledActiveLink to="/"> 
                    <NavButton text={"Favorites"} onClick={ handleChangeDisplayFavs }/> 
                </StyledActiveLink>
            </div>
        </MobileNavBarWrapper>
    )
}
