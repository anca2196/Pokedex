import React from 'react'
import { FavCard } from '../components/Cards';
import { StyledPage, FavsContainer } from './Page.styles';
import idle from "../assets/idle.svg"

const Favorites = ({favorites, setFavorites}) => {
    return (
        <StyledPage>
            <h1> Your Favorites</h1>
            <FavsContainer>
            { 
             favorites.length < 1 ? <img src={idle} alt="empty favorites list" />
                : favorites.map( (pokemon, index) => ( <FavCard key={index} name={pokemon} favorites={favorites} setFavorites={setFavorites}/>))}
            </FavsContainer>
          
        </StyledPage>
    )
}

export default Favorites;
