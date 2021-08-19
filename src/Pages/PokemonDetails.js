import React, { useEffect, useState } from 'react'
import { StyledPage } from './Page.styles'
import axios from 'axios'
import styled from 'styled-components';
import ActionButton from '../components/Buttons/ActionButton';
import submitIcon from "../assets/submit-arrow.svg"
import idle from "../assets/idle.svg"
import pokeball from "../assets/pokeball.svg"
import removeIcon from "../assets/remove.svg"
import { CommentCard } from '../components/Cards';
import { PokeDetailsContainer, PokemonDetailsWrapper } from './Page.styles';



const CommentsContainer = styled.div`
    background: var(--blue);
`

const PokemonDetails = ({routeProps, favorites, setFavorites}) => {
    const [ pokemonStats, setPokemonStats ] = useState({})
    const [ stats, setStats ] = useState([])
    const [ userInputs, setUserInputs ] = useState(
        {userName: "",
        pokemonsSeen: 0,
        userComment:"",
        commentDate: ""
        })
    const [ comments, setComments ] = useState([])

    let pokemon = routeProps.match.params.name;
    let commentDate = new Date();

    
    useEffect(() => {
        async function fetchPokemonDetails() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
           setPokemonStats(res.data)
           setStats([ res.data.stats, res.data.moves[0].move.name, res.data.moves[1].move.name, res.data.moves[2].move.name])
        }
        fetchPokemonDetails();
      }, [pokemon]);

    


    const handleChangeUserInputs = (e) => {
        setUserInputs( { ...userInputs, [e.target.name] : e.target.value, commentDate : `${commentDate.getDate()}/${commentDate.getMonth() + 1}/${commentDate.getFullYear()}`});
    }

    const handleSubmitComment = () => {
        setComments([...comments, userInputs])
    }
    
    const handleAddNewFavorite = () => {setFavorites([...favorites, pokemon])}
    const handleRemoveNewFavorite = () => {        
        let newFavorites = favorites.filter(
        (fav) => fav !== pokemon)
      setFavorites(newFavorites);
    }

    return (
        <StyledPage>
            <PokemonDetailsWrapper>
                <h2>{ pokemon }</h2>
                    <PokeDetailsContainer>
                        <img style={{width: "15rem"}} src={ stats.length > 1 ? pokemonStats.sprites.front_default : idle } alt="pokemon sprite"/>
                        <div>
                            <p> <span>weight: </span> {pokemonStats.weight}</p>
                            <p> <span>height: </span> {pokemonStats.weight}</p>
                            
                                {   stats.length > 1 ?
                                    stats[0].map( (e, index) => ( <p key={index}> <span>{  e.stat.name }:</span> { e.base_stat }</p>))
                                    : "...loading" }
                            <p> <span>moves: </span> { stats[1]}, {stats[2]}, {stats[3] }</p>
                        </div>
                          
                    </PokeDetailsContainer>
                    {
                                favorites.includes( pokemon ) 
                                ? <ActionButton icon={removeIcon} text={"Remove from Favorites"} onClick={() => {handleRemoveNewFavorite()}}/> 
                                : <ActionButton icon={pokeball} text={"Add to Favorites"} onClick={() => {handleAddNewFavorite()}}/>}

            </PokemonDetailsWrapper>
            
                        <div>
                                
                                    <CommentsContainer>
                                    <h2>Comments</h2>
                                        {
                                            comments.length < 1 ? (<p>Be the first to comment :)</p>) : comments.map((comment, index) => (<CommentCard
                                                key={index}
                                                name = {comment.userName}
                                                comment = {comment.userComment}
                                                date={comment.commentDate} 
                                                num={comment.pokemonsSeen}/>))

                                        }
                                    </CommentsContainer>
                                
                                <CommentsContainer>
                                <h2> Form</h2>
                                    <p>Name</p>
                                    <input
                                        name='userName'
                                        type='text'
                                        id='userName'
                                        // value={comments}
                                        onChange={handleChangeUserInputs}
                                        />
                                    <p>Number of pokemons seen</p>
                                    <input
                                        name='pokemonsSeen'
                                        type='number'
                                        id='pokemonNumber'
                                        // value={comments}
                                        onChange={handleChangeUserInputs}
                                        />
                                    <p>Your Comment: </p>
                                    <input
                                        name='userComment'
                                        type='text'
                                        id='comment'
                                        // value={comments}
                                        onChange={handleChangeUserInputs}
                                        />
                                    <ActionButton text={"submit"} icon={submitIcon} onClick={() => {handleSubmitComment()}}/>
                                </CommentsContainer>
                        </div>
            
        </StyledPage>
    )
}

export default PokemonDetails

//