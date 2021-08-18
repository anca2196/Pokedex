import styled from "styled-components";
import React, { useState } from 'react'
import pokeball from "../assets/pokeball.svg"
import favPokeball from "../assets/favourite-pokeball.svg"
import removeIcon from "../assets/remove.svg"

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

    p{
        cursor: pointer;
    }
    
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
    background: url(${(props) => props.action === "false" ? pokeball : removeIcon }) center/ contain no-repeat;
    cursor: pointer;

    &:hover, &:active {
        background: url(${favPokeball}) center/ contain no-repeat;
        width: 3rem;
        height:3rem;
    }
    
`

export const HomeCard = ({ favorites, name, setFavorites }) => {
    const [ actionFavoritesIcon, setActionFavoritesIcon ] = useState(false)

    function handleClickAddFavorites(e) {
        setFavorites([...favorites, name])
    }

    function handleChangeIcon (e) {
        setActionFavoritesIcon(!actionFavoritesIcon)
        console.log(actionFavoritesIcon)
    }
   

    return (
        <StyledHomeCard>
            <p> <span> </span>{ name } </p>
            <AddFavourites  action={actionFavoritesIcon ? "true" : "false"} onClick={ () => { handleClickAddFavorites() ; handleChangeIcon()}} />
        </StyledHomeCard>
    )
}

