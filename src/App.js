import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import HeroesFeatured from './components/HeroesFeatured/HeroesFeatured';
import SearchView from './components/SearchView/SearchView';
import HeroDetailed from './components/HeroDetailed/HeroDetailed';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <main>
          <div className="container">
            <Switch>
              <Route exact path="/">
                <HeroesFeatured />
              </Route>
              <Route path="/search/:name" component={SearchView} />
              <Route path="/hero/:id">
                <HeroDetailed />
              </Route>
            </Switch>
          </div>
        </main>
      </Router>
      <footer>
        <div className="container">
          <p>This content is kindly provided by <a href="https://superheroapi.com/">Superhero API</a></p>
        </div>
      </footer>
    </>
  );
}

export default App;
