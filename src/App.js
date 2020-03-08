import React from 'react';
import Header from './components/header';
import Forms from './components/form';
import Loader from './components/loader';
import Results from './components/results';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Forms/>
      <Results/>
      <Loader/>
      <Footer/>

    </div>
  );
}

export default App;
