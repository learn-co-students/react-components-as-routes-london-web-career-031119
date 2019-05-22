import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Rout, Route } from 'react-router-dom';
import Navbar from "./Navbar"

const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>This is about stuff</h1>
    </div>
  )
}

ReactDOM.render(
  <Rout>
    <React.Fragment>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </React.Fragment>
  </Rout>,
  document.getElementById('root')
);
