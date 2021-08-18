import NavBar from "./components/NavBar/NavBar";
import { GlobalStyle } from "./globalStyles";
import styled from "styled-components";
import Home from "./Pages/Home";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Favorites from "./Pages/Favorites";
import PokemonDetails from "./Pages/PokemonDetails";

const AppWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

`

function App() {
  const [ favorites, setFavorites ] = useState([]);
  const [ homePageDisplay, setHomePageDisplay ] = useState("home");

  function handleRemoveFavorite(pokemon) {
      let newFavorites = favorites.filter(
        (fav) => fav !== pokemon
      )
      setFavorites(newFavorites);
      console.log("I'm new favorites", newFavorites)
      console.log(pokemon)
  }

  console.log(favorites)

  
 
  return (
    <AppWrapper>
       <GlobalStyle />
       < NavBar setHomePageDisplay={ setHomePageDisplay } />
       <Switch>
        <Route exact path="/" >
          { 
            homePageDisplay === "home" ?  < Home favorites={ favorites } setFavorites={setFavorites} handleRemoveFavorite={handleRemoveFavorite}/> 
              :  <Favorites favorites={favorites} handleRemoveFavorite={handleRemoveFavorite}/>
          }
        </Route>
        <Route path="/:name" >
          < PokemonDetails />
        </Route>
       </Switch>
      
    </AppWrapper>
  
  );
}

export default App;
