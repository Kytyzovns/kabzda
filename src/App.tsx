import React from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import {Accordion} from "./Accordion";
import {Rating} from "./Rating";
import {GlobalStyles} from "./Styles";

function App() {
    return (
        <div>
            <GlobalStyles/>
            <AppTitle/>
            <Rating value = {3}/>
            <Accordion titleValue={"Menu"}/>
            <Rating value = {4}/>
        </div>
    );
}

function AppTitle() {
    return <>This is APP component</>
}

export default App;
