import React from 'react'
import styled from 'styled-components'

const StyledActionButton = styled.button`
    background: var(--red);
    border-radius: 50px;
    color: white;
    padding: .5em 1em;
    font-size: 1.1rem;
    font-weight: 600;
    display: block;

    div{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img{
        width: 1.5rem;
        margin:0 .5rem; 
    }
`

const ActionButton = ({text, icon, onClick}) => {
    return (
        <StyledActionButton onClick={ onClick }>
            <div>
                <img src={icon} alt="" />
                {text}
            </div>
           
        </StyledActionButton>
    )
}

export default ActionButton;
