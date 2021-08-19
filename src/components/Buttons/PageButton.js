import React from 'react'
import styled from 'styled-components';
import previous from "../../assets/previous-arrow.svg";
import next from "../../assets/next-arrow.svg";

const StyledPageButton = styled.button`
    color: white;
    background: var(--red);
    padding: .5em 2em;
    margin: .5rem 5rem;
    border-radius: 50px;
    border: none;
    box-shadow: 0 4px 4px 0 hsl( 0, 0%, 0%, 0.25 );
    font-size: 1.2rem;
    font-weight: 600;
    display: flex;
    justify-content: space-around;
    align-items: center;
    visibility: ${(props) => (props.disabled === "disabled" ? "hidden" : "visible")};

    div{
        display: flex;
        flex-direction: ${(props) => (props.direction === "row-reversed" ? "row-reverse" : "row")};
        align-items: center;
        width: 100%;
        justify-content: space-between;
    }
    img {
        margin-right: ${(props) => (props.direction === "row-reversed" ? "0" : "2rem")};
        margin-left: ${(props) => (props.direction === "row-reversed" ? "2rem" : "0")};
    }

    &:hover{
        background: var(--red-hover);
    }

    &:active{
        box-shadow: none;
    }

      @media screen and (max-width: 1230px) {
       span{
           display: none;
       }

       img{
           margin: 0;
       }
    }
    
`

const PageButton = ({text, icon, direction, onClick, disabled }) => {
    return (
        <StyledPageButton direction={ direction } onClick={ onClick } disabled={disabled} >
            <div>
            <img src={ icon === "previous" ? previous : next } alt=''/>
            
            <span>{text}  </span>
            </div>

        </StyledPageButton>
    )
}

export default PageButton;
