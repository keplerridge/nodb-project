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
    <div>
      <header><Header /></header>
      <section>
        <Gryffindor />
        <Ravenclaw />
        <Hufflepuff />
        <Slytherin />
      </section>
      <footer><Footer /></footer>
    </div>
  );
}

export default App;
