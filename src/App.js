import {MobileNavbar, NavBar} from "./components/NavBar/NavBar";
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

@media screen and (max-width: 750px) {
        flex-direction: column;
    }

`

function App() {
  const [ favorites, setFavorites ] = useState([]);
  const [ homePageDisplay, setHomePageDisplay ] = useState("home");


 
  return (
    <AppWrapper>
       <GlobalStyle />
       < NavBar setHomePageDisplay={ setHomePageDisplay } />
       <MobileNavbar setHomePageDisplay={ setHomePageDisplay } />
       <Switch>
        <Route exact path="/" >
          { 
            homePageDisplay === "home" ?  < Home favorites={ favorites } setFavorites={setFavorites} /> 
              :  <Favorites favorites={favorites} setFavorites={setFavorites}/>
          }
        </Route>
        <Route path="/:name" render={(routeProps) => (
            <PokemonDetails routeProps={routeProps} favorites={favorites} setFavorites={setFavorites}/>
          )} />
       </Switch>
      
    </AppWrapper>
  
  );
}

export default App;
