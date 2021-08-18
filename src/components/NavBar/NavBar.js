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
        margin-top: -15rem;
    }    
`

const StyledActiveLink = styled(NavLink)`
    text-align: center;

    &:hover, &:focus {
        outline: none;
    }

`

const NavBar = ({ setHomePageDisplay }) => {

    function handleChangeDisplayHome() {
        setHomePageDisplay("home")
    }

    function handleChangeDisplayFavs() {
        setHomePageDisplay("favs")
    }

    return (
        <NavBarWrapper>
            <img src={logo} alt="Pokedex" />
            <div>
                <StyledActiveLink to="/"> 
                    <NavButton text={"All"} onClick={ () => handleChangeDisplayHome() }/>
                </StyledActiveLink>
                <StyledActiveLink to="/"> 
                    <NavButton text={"Favorites"} onClick={ handleChangeDisplayFavs }/> 
                </StyledActiveLink>
            </div>
            <img src={Pikachu} alt="" />
        </NavBarWrapper>
    )
}

export default NavBar
