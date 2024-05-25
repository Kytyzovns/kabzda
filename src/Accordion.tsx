import React from "react";
import {StyledH3, StyledLi, StyledUl} from "./Styles";

type accordionPropsType = {
    titleValue: string;
}

export function Accordion(props: accordionPropsType) {
    console.log("accordion rendered");

    return <div>
        <AccordionTitle title = {props.titleValue}/>
        <AccordionBody/>
    </div>
}

type accordionTitleProps = {
    title: string;
}

function AccordionTitle(props: accordionTitleProps) {
    console.log("accordionTitle rendered");
    return <StyledH3>{props.title}</StyledH3>
}

function AccordionBody() {
    console.log("accordionBody rendered");
    return <StyledUl color1 = {"white"}>
        <StyledLi clean>first</StyledLi>
        <StyledLi>second</StyledLi>
        <StyledLi>third</StyledLi>
    </StyledUl>
}

//test changes 

export default Accordion;