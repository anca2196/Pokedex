import React from 'react'
import { FavCard } from '../components/Cards';
import { StyledPage, FavsContainer } from './Page.styles';

const Favorites = ({favorites, handleRemoveFavorite}) => {
    return (
        <StyledPage>
            <h1> Your Favorites</h1>
            <FavsContainer>
            { favorites.map( (pokemon, index) => ( <FavCard key={index} name={pokemon} />))}
            </FavsContainer>
          
        </StyledPage>
    )
}

export default Favorites;
