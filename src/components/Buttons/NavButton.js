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
    padding: .5em 3em;
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

    
`

const NavButton = ({text, state}) => {
    return (
        <StyledNavButton >
            {text}
        </StyledNavButton>
    )
}

export default NavButton
