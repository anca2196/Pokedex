import styled from "styled-components";
import pokeball from "../assets/pokeball.svg"
import favPokeball from "../assets/favourite-pokeball.svg"
import removeIcon from "../assets/remove.svg"
import { StyledPokemonLink } from "../Pages/Page.styles";
import commentIcon from "../assets/comment-icon.svg"

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
    background: url(${pokeball}) center/ contain no-repeat ;
    cursor: pointer;

    &:hover, &:active {
        background: url(${favPokeball}) center/ contain no-repeat;
        width: 3rem;
        height:3rem;
    }
    
`

const RemoveFavorites = styled.div`
    cursor: pointer;
    width: 2.5rem;
    height:2.5rem;
    background: url(${removeIcon}) center/ contain no-repeat ;

    &:hover {
        width: 3rem;
        height:3rem;
    }
`
const CommentCardContainer = styled.div`
    background: hsl(0, 0%, 100%, 83% );
    border-radius: 14px;;
`

export const HomeCard = ({ favorites, name, setFavorites }) => {

    function handleClickAddFavorites(e) {
        setFavorites([...favorites, name ])
    }

    function handleClickRemoveFavorites() {
        let newFavorites = favorites.filter(
            (fav) => fav !== name
          )
          setFavorites(newFavorites);   
    }

    return (
        <StyledHomeCard>
            <StyledPokemonLink to={`/${name}`}><p> { name } </p></StyledPokemonLink>
               <div>
                { 
                    favorites.includes( name ) ? <RemoveFavorites onClick={() => { handleClickRemoveFavorites() }}/> 
                    : <AddFavorites onClick={ () => { handleClickAddFavorites() }} />
                }
               </div>
        </StyledHomeCard>
    )
}

export const FavCard = ({favorites, setFavorites, name}) => {

    function handleClickRemoveFavorites() {
        let newFavorites = favorites.filter(
            (fav) => fav !== name
          )
          setFavorites(newFavorites);   
    }
 
    return (
        <StyledFavCard >
            <StyledPokemonLink to={`/${name}`}><p> {name}</p></StyledPokemonLink>
            <RemoveFavorites  onClick={() => { handleClickRemoveFavorites() } }/>
        </StyledFavCard>
    )
}

export const CommentCard = ({num, comment, name, date }) => {
    return (
        <CommentCardContainer>
            <img src={commentIcon} alt="" />
            <p>{name}</p>
            <p>{comment}</p>
           <p>{num}</p>
           <p>{date}</p>
        </CommentCardContainer>
    )
}
