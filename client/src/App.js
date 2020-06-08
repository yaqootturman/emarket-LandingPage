import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Components/Header/Header'
import Greetiing from './Components/Greeting/Greeting'
import Features from './Components/Features/Features'
import Collections from './Components/Collections/Collections'
import Products from './Components/Products/Products'
import Email from './Components/Email/Email'

function App() {
  return (
    <Router>
      <Header />
      <Greetiing />
      <Features />
      <Collections />
      <Products />
      <Email />
    </Router>
  );
}

export default App;
