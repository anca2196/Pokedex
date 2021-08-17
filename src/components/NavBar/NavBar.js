import React from 'react'
import logo from "../../assets/logo.svg"
import Pikachu from "../../assets/pikachu.svg"
import NavButton from '../Buttons/NavButton'
import styled from 'styled-components'

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

const NavBar = () => {
    return (
        <NavBarWrapper>
            <img src={logo} alt="Pokedex" />
            <div>
                <NavButton text={"All"} />
                <NavButton text={"Favorites"} />
            </div>
            <img src={Pikachu} alt="" />
        </NavBarWrapper>
    )
}

export default NavBar
