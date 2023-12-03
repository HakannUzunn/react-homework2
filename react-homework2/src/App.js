import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import MovieList from './routes/MovieList';
import Home from './pages/Home';
import WatchList from './pages/WatchList';
import Friends from './pages/Friends';
import Favorites from './pages/Favorites';
import Account from './pages/Account'; 


const App = () => {
  return (
    <Router>
      <header>
        <nav>
          <NavLink to="/" activeClassName="active" end>
            Home
          </NavLink>
          <NavLink to="/popular" activeClassName="active">
            Popular
          </NavLink>
          <NavLink to="/watchlist" activeClassName="active">
            WatchList
          </NavLink>
          <NavLink to="/friends" activeClassName="active">
            Friends
          </NavLink>
          <NavLink to="/favorites" activeClassName="active">
            Favorites
          </NavLink>
          <NavLink to="/account" activeClassName="active">
            Account
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<MovieList category="web" />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/account" element={<Account />} />
        
      </Routes>
    </Router>
  );
};

export default App;