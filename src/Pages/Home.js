import React, { useState, useEffect } from 'react'
import { StyledPage, HomePageContainer, PokemonContainer, ButtonsContainer } from './Page.styles' 
import { HomeCard } from '../components/Cards';
import axios from 'axios';
import PageButton from '../components/Buttons/PageButton';



const Home = ({ favorites, setFavorites }) => {
    const [ pokemons, setPokemons ] = useState([])
    const [ currentPage, setCurrentPage ] = useState(0)
    const [ page, setPage ] = useState(1)

    function fetchPokemonJSON() {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${currentPage}`)
        .then(function(response) {
          return response.data; 
        })
        .then(res => setPokemons(res.results))
    }

    useEffect( fetchPokemonJSON, [ currentPage ] );

    function handleClickNextPage() {
        setCurrentPage( prevState => prevState + 20);
        setPage(prevState => prevState + 1)
    }

    function handleClickPrevPage() {
        setCurrentPage( prevState => prevState - 20);
        setPage(prevState => prevState - 1)
    }

    function handleClickAddFavorites() {
        setFavorites()
    }


    return (
        <StyledPage>
            <HomePageContainer>
                < PokemonContainer>
                    {
                        pokemons.map((e, index) => ( <HomeCard 
                            key={index} name={e.name} 
                            onClick={() => handleClickAddFavorites()} 
                            favorites={ favorites } 
                            setFavorites={setFavorites}
                            page={page}
                            />
                        ))
                    }
                </PokemonContainer>
                <ButtonsContainer>
                    < PageButton text={"Previous"} icon={"previous"} onClick={() => handleClickPrevPage()} disabled={ currentPage === 0 ? "disabled" : ""}/>
                    <p>{page} / 56 </p>
                    < PageButton text={"Next"} icon={"next"} direction={"row-reversed"} onClick={() => handleClickNextPage()} disabled={ currentPage === 1100 ? "disabled" : ""}/>
                </ButtonsContainer>
            </HomePageContainer>
        </StyledPage>
    )
}

export default Home
