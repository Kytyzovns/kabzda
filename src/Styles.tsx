import styled from "styled-components";
import {createGlobalStyle} from "styled-components";

export const StyledUl = styled.ul`
    list-style: none;
    color: #090b0b;

    li {
        background-color: #e8880a;
        width: 100px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 1.5rem;
        font-weight: bold;
        border-radius: 3px;
    }

    li + li {
        margin-top: 5px;
    }
`
// export const StyledH3 = styled(StyledUl)`
//     // я хочу чтобы это унаследовало стиль <li> из StyledUl
// `
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

