import React from 'react';
/*import logo from './logo.svg';*/
import './App.css';

function App() {
  return (
      <div>
        <AppTitle/>
        <Rating/>
      </div>
  );
}

function Star() {
  return (
      <div>Star</div>
  );
}

function Rating() {
  return (<>
    <Star/>
    <Star/>
    <Star/>
    <Star/>
    <Star/>
  </>);
}

function AppTitle() {
  return <>This is APP component</>
}

/*function Accordion {

}*/

export default App;
