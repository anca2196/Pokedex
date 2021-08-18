import styled from "styled-components";

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