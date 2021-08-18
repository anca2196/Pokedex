import styled from "styled-components";
import React, { useEffect, useState } from 'react'
import pokeball from "../assets/pokeball.svg"
import favPokeball from "../assets/favourite-pokeball.svg"
import removeIcon from "../assets/remove.svg"
import { StyledPokemonLink } from "../Pages/Page.styles";


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
const StyledFavCard = styled.div`
    width:80%;
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
`

const AddFavorites = styled.div`
    width: 2.5rem;
    height:2.5rem;
    /* background: url(${(props) => props.action === "false" ? pokeball : favPokeball }) center/ contain no-repeat; */
    background: url(${pokeball}) center/ contain no-repeat ;
    cursor: pointer;

    &:hover, &:active {
        background: url(${favPokeball}) center/ contain no-repeat;
        width: 3rem;
        height:3rem;
    }
    
`

const RemoveFavorites = styled.div`
    width: 2.5rem;
    height:2.5rem;
    background: url(${removeIcon}) center/ contain no-repeat ;
`

export const HomeCard = ({ favorites, name, setFavorites, page }) => {
    const [ actionFavoritesIcon, setActionFavoritesIcon ] = useState(false)

    function handleClickAddFavorites(e) {
        setFavorites([...favorites, name ])
    }

    function handleChangeIcon (e) {
        setActionFavoritesIcon(!actionFavoritesIcon)
    }

    function handleRefreshIcons () {
        setActionFavoritesIcon(false)
    }
   
    useEffect( handleRefreshIcons,[page])

    return (
        <StyledHomeCard>
            <StyledPokemonLink to={`/${name}`}><p> { name } </p></StyledPokemonLink>
               <div>
                { 
                    favorites.includes( name ) ? <RemoveFavorites /> 
                    : <AddFavorites  action={actionFavoritesIcon ? "true" : "false"} onClick={ () => { handleClickAddFavorites() ; handleChangeIcon()}} />
                }
               </div>
        </StyledHomeCard>
    )
}

export const FavCard = ({name}) => {
    return (
        <StyledFavCard >
            <StyledPokemonLink to={`/${name}`}><p> {name}</p></StyledPokemonLink>
            <RemoveFavorites />
        </StyledFavCard>
    )
}

