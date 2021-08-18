import React, { useState, useEffect } from 'react'
import { StyledPage } from './Page.styles' 
import { HomeCard } from '../components/Cards';
import axios from 'axios';




const Home = () => {
    const [ pokemons, setPokemons ] = useState([])

    function fetchPokemonJSON() {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=20")
        .then(function(response) {
          return response.data; 
        })
        .then(res => setPokemons(res.results))
    }

    useEffect( fetchPokemonJSON, [])

    console.log(pokemons)
    return (
        <StyledPage>
            {
                pokemons.map((e, index) => (<HomeCard key={index} num={index + 1} name={e.name}/>))
            }

        </StyledPage>
    )
}

export default Home
