import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Components/Header/Header'
import Greetiing from './Components/Greeting/Greeting'
import Features from './Components/Features/Features'

function App() {
  return (
    <Router>
      <Header />
      <Greetiing />
      <Features />
    </Router>
  );
}

export default App;
