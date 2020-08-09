import React, { Fragment } from 'react';
import Header from './Components/Header/Header'
import Greetiing from './Components/Greeting/Greeting'
import Features from './Components/Features/Features'
import Collections from './Components/Collections/Collections'
import Products from './Components/Products/Products'
import Email from './Components/Email/Email'

function App() {
  return (
    <Fragment>
      <Header />
      <Greetiing />
      <Features />
      <Collections />
      <Products />
      <Email />
    </Fragment>
  );
}

export default App;
