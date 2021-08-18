import styled from "styled-components";
import React from 'react'
import pokeball from "../assets/pokeball.svg"
import favPokeball from "../assets/favourite-pokeball.svg"

const StyledHomeCard = styled.div`
    width: 45%;
    background: var(--orange);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 25px;
    padding: .5rem 1.5rem;
    margin: .6rem;
    font-weight: 600;
    
    &:hover, &:active {
        background: var(--blue);
    }

    @media screen and (max-width: 1230px) {
        width: 80%;
    }

`

const AddFavourites = styled.div`
    width: 2.5rem;
    height:2.5rem;
    background: url(${pokeball}) center/ contain;

    &:hover {
        background: url(${favPokeball}) center/ contain;
        width: 3rem;
        height:3rem;
    }
    
`

export const HomeCard = ({ num, name }) => {
    return (
        <StyledHomeCard>
            <p> <span> {num} </span>{name} </p>
            {/* <img src={pokeball} alt="Add Favorites" /> */}
            <AddFavourites>

            </AddFavourites>
        </StyledHomeCard>
    )
}

