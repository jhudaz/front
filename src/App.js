import React from 'react';
import Header from './components/header';
import Forms from './components/form';
import Loader from './components/loader';
import About from './components/about';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Forms/>
      <About/>
    </div>
  );
}

export default App;
