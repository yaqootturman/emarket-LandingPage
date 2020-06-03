import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Components/Header/Header'
import Greetiing from './Components/Greeting/Greeting'
import Features from './Components/Features/Features'
import Collections from './Components/Collections/Collections'

function App() {
  return (
    <Router>
      <Header />
      <Greetiing />
      <Features />
      <Collections />
    </Router>
  );
}

export default App;
