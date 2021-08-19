import React from 'react'
import styled from 'styled-components'

const StyledNavButton = styled.button`
    cursor: pointer;
    font-size: 1rem;
    outline: none;
    border: none;
    background: none;
    font-size: 2rem;
    margin: 1rem;
    padding: .5em 2em;
    font-weight: 600;
    text-align: center;

 

    &:hover, &:active, :focus {
        background: var(--blue);
        border-radius: 25px;
    }

    &:focus-visible {
        border: 5px solid var(--blue);
        border-radius: 25px;
        
    }

    @media screen and (max-width: 750px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 700px) {
      padding: 0;
      border-radius: 10px;
    } 
    
`

const NavButton = ({text, onClick}) => {
    return (
        <StyledNavButton onClick={ onClick }>
            {text}
        </StyledNavButton>
    )
}

export default NavButton
