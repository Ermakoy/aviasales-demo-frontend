import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './normalize.css';
import 'flexboxgrid2';
import MainPage from './Main/MainPage';

const App = () => (
  <Router>
    <div className="App">
      <Route exact path="/" component={MainPage} />
    </div>
  </Router>
);

export default App;
