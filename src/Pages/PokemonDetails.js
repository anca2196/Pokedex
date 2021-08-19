import React, { useEffect, useState } from 'react'
import { StyledPage, StyledSubmitButton } from './Page.styles'
import axios from 'axios'
import ActionButton from '../components/Buttons/ActionButton';
import submitIcon from "../assets/submit-arrow.svg"
import idle from "../assets/idle.svg"
import pokeball from "../assets/whitepokeball.svg"
import removeIcon from "../assets/whiteremove.svg"
import { CommentCard } from '../components/Cards';
import { PokeDetailsContainer, PokemonDetailsWrapper, CommentsContainer } from './Page.styles';





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
        setUserInputs( { ...userInputs, [e.target.name] : e.target.value, commentDate : `${commentDate.getDate()}/${commentDate.getMonth() + 1}/${commentDate.getFullYear()}   ${commentDate.getHours()}:${commentDate.getMinutes()}`});
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

                        <div>
                            <p> <span>weight: </span> {pokemonStats.weight}</p>
                            <p> <span>height: </span> {pokemonStats.weight}</p>
                            
                                {   stats.length > 1 ?
                                    stats[0].map( (e, index) => ( <p key={index}> <span>{  e.stat.name }:</span> { e.base_stat }</p>))
                                    : "...loading" }
                            <p> <span>moves: </span> { stats[1]}, {stats[2]}, {stats[3] }</p>
                        </div>
                        <img style={{width: "15rem"}} src={ stats.length > 1 ? pokemonStats.sprites.front_default : idle } alt="pokemon sprite"/>
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
                                            comments.length < 1 ? (<p>Be the first to leave comment :)</p>) : comments.map((comment, index) => (<CommentCard
                                                key={index}
                                                name = {comment.userName}
                                                comment = {comment.userComment}
                                                date={comment.commentDate} 
                                                num={comment.pokemonsSeen}/>))

                                        }
                                    </CommentsContainer>
                                
                                <CommentsContainer>
                                    <h3>Name</h3>
                                    <input
                                        name='userName'
                                        type='text'
                                        id='userName'
                                        // value={comments}
                                        onChange={handleChangeUserInputs}
                                        />
                                    <h3>Pokemons seen</h3>
                                    <input
                                        name='pokemonsSeen'
                                        type='number'
                                        id='pokemonNumber'
                                        // value={comments}
                                        onChange={handleChangeUserInputs}
                                        />
                                    <h3>Leave a Comment </h3>
                                    <textarea
                                        name='userComment'
                                        type='text'
                                        id='comment'
                                        // value={comments}
                                        onChange={handleChangeUserInputs}
                                        />

                                    <StyledSubmitButton>
                                        <ActionButton text={"Submit"} icon={submitIcon} onClick={() => {handleSubmitComment()}}/>
                                    </StyledSubmitButton>
                                   
                                </CommentsContainer>
                        </div>
            
        </StyledPage>
    )
}

export default PokemonDetails

//