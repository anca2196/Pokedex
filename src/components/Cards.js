import styled from "styled-components";
import React from 'react'
import pokeball from "../assets/pokeball.svg"

const StyledHomeCard = styled.div`
    width: 400px;
    background: var(--orange);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 25px;
    padding: 1rem 1.5rem;
    margin: .5rem;
    font-weight: 600;
    
    img{
        width: 3rem
    }
    
    &:hover, &:active {
        background: var(--blue);
    }

`

export const HomeCard = ({ num, name }) => {
    return (
        <StyledHomeCard>
            <p> <span> {num} </span>{name} </p>
            <img src={pokeball} alt="Add Favorites" />
        </StyledHomeCard>
    )
}

