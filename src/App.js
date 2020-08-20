import React from 'react';
import { BrowserRouter as Router, Swich, Route } from 'react-router-dom'
import NavSearch from './components/nav';
import MainPage from './components/mainPage';
import SearchResult from './components/SearchResult';

// import 'bootstrap/dist/css/bootstrap.min.css'





function App() {


  return (
    <div>
      <Router>
        <NavSearch />
        <Route path="/" exact component={MainPage} />
        <Route path="/search" component={SearchResult} />
      </Router>


    </div>
  );
}

export default App;
