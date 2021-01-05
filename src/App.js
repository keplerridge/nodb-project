import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Gryffindor from './components/Gryffindor';
import Ravenclaw from './components/Ravenclaw';
import Hufflepuff from './components/Hufflepuff';
import Slytherin from './components/Slytherin';
import './App.css';

function App() {
  return (
    <div className='app'>
      <header><Header /></header>
      <section className='houses'>
        <Gryffindor className='gryffindor'/>
        <Ravenclaw className='ravenclaw'/>
        <Hufflepuff className='hufflepuff'/>
        <Slytherin className='slytherin'/>
      </section>
      <footer><Footer /></footer>
    </div>
  );
}

export default App;
