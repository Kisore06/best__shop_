// App.js

import React from 'react';
import Home from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import VerticalNav from './components/verticalNav';

function App() {
  return (
    <div className="App">
      <VerticalNav/>
      <Home />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
