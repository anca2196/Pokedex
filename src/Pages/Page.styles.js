import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledPage = styled.div`
    width: 70%;
    height: 95vh;
    margin-right: 4rem;
    border-radius: 50px;
    background: rgba( 255, 255, 255, 0.55 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    overflow-y: auto;
    h1, h2{
        text-align: center;
    }
`
export const HomePageContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
`

export const PokemonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    height: 85%;
    padding: .5rem;
    height: 60rem;
    width: 80%;
    
    
    @media screen and (max-width: 1230px) {
     flex-wrap: nowrap ;
     overflow-y: scroll;
     ::-webkit-scrollbar {
            -webkit-appearance: none;
            width: 5px;
            }
            ::-webkit-scrollbar-thumb {
            border-radius: 4px;
            background-color: rgba(0, 0, 0, .5);
            -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);
            box-shadow: 0 0 1px rgba(255, 255, 255, .5);
            }
                }
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    p{
        font-weight: 600;
        font-size: 1rem;
        white-space: nowrap;
    }
    
    /* @media screen and (max-width: 1230px) {
      flex-direction: column;
    } */

`

export const FavsContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const StyledPokemonLink = styled(NavLink)`
    text-decoration: none;
    color: black;
`

export const PokeDetailsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    padding: 0 2rem;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    div{
        display: grid;
        grid-template-columns: repeat(2, auto);
    }
    
`
export const PokemonDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    span{
        font-weight: 600;
    }
`