import NavBar from "./components/NavBar/NavBar";
import { GlobalStyle } from "./globalStyles";
import styled from "styled-components";
import Home from "./Pages/Home";

const AppWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

`

function App() {
  return (
    <AppWrapper>
       <GlobalStyle />
       < NavBar />
       < Home />
    </AppWrapper>
  
  );
}

export default App;
