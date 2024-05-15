import styled, {css} from "styled-components";
import {createGlobalStyle} from "styled-components";
import {myTheme} from "./myTheme.Styled";


type StyledUlPropsType = {
    color1?: string;
}

type StyledLiPropsType = {
    clean?: boolean;
}
export const StyledLi = styled.li<StyledLiPropsType>`

    ${props => props.clean && css<StyledLiPropsType>`
        background-color: #e8880a !important;
        `}
    
    background-color: #e8880a;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 3px;
`

export const StyledUl = styled.ul<StyledUlPropsType>`
    border-radius: 5px;
    width: 25%;
    list-style: none;
    color: #090b0b;
    background-color: ${props => props.color1};

    ${StyledLi} + ${StyledLi} {
        margin-top: 5px;
    }

    ${StyledLi} {
        background-color: aqua;
        &:hover {
            background-color: ${myTheme.colors.first} !important;
        }
    }
`
export const StyledH3 = styled(StyledLi)`
 
    margin-bottom: 10px;
`
export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: black;
        color: aliceblue;
    }
`

