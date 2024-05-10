import React from 'react';
/*import logo from './logo.svg';*/
import './App.css';

function App() {
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function Star() {
    console.log("star rendered")
    return (
        <div>Star</div>
    );
}

function Rating() {
    console.log("rating rendered")
    return <>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
    </>
}

function AppTitle() {
    return <>This is APP component</>
}

function Accordion() {
    console.log("accordion rendered");

    return <div>
        <AccordionTitle/>
        <AccordionBody/>
    </div>
}

function AccordionTitle() {
    console.log("accordionTitle rendered");
    return <h3>Menu</h3>
}

function AccordionBody() {
    console.log("accordionBody rendered");
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default App;
