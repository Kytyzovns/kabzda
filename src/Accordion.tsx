import React from "react";
import {StyledUl} from "./Styles";

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
    return <h3>{props.title}</h3>
}

function AccordionBody() {
    console.log("accordionBody rendered");
    return <StyledUl>
        <li>first</li>
        <li>second</li>
        <li>third</li>
    </StyledUl>
}

export default Accordion;