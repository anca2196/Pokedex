import React, { useState, useEffect } from 'react'
import { StyledPage, PokemonContainer, ButtonsContainer } from './Page.styles' 
import { HomeCard } from '../components/Cards';
import axios from 'axios';
import PageButton from '../components/Buttons/PageButton';




const Home = () => {
    const [ pokemons, setPokemons ] = useState([])
    const [ currentPage, setCurrentPage ] = useState(0)
    

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
    }

    function handleClickPrevPage() {
        setCurrentPage( prevState => prevState - 20);
    }

    return (
        <StyledPage>
            < PokemonContainer>
                {
                    pokemons.map((e, index) => (<HomeCard key={index} name={e.name}/>))
                }
            </PokemonContainer>
            <ButtonsContainer>
                < PageButton text={"Previous"} icon={"previous"} onClick={() => handleClickPrevPage()} disabled={ currentPage === 0 ? "disabled" : ""}/>
                < PageButton text={"Next"} icon={"next"} direction={"row-reversed"} onClick={() => handleClickNextPage()} disabled={ currentPage === 1100 ? "disabled" : ""}/>
            </ButtonsContainer>
            
        </StyledPage>
    )
}

export default Home
