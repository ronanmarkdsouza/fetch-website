import React from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Main from './components/Main';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
        <NavBar />
        <Main />
        <About />
        <Footer />
    </div>
  );
}

export default App;
