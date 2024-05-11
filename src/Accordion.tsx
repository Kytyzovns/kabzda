import React from "react";

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
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion;