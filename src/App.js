import NavBar from "./components/NavBar/NavBar";
import { GlobalStyle } from "./globalStyles";
import styled from "styled-components";
import Home from "./Pages/Home";
import { useState } from "react";

const AppWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

`

function App() {
  const [ favorites, setFavorites ] = useState([])

  console.log(favorites)
 
  return (
    <AppWrapper>
       <GlobalStyle />
       < NavBar />
       < Home favorites={ favorites } setFavorites={setFavorites}/>
    </AppWrapper>
  
  );
}

export default App;
