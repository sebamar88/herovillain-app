import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Search from './Search';

const SUPERHERO_URL = process.env.REACT_APP_API_URL;

function MainLayout({ setIsAuth }) {
  const currentLocation = useLocation();
  return (
    <>
      <Header setIsAuth={setIsAuth} />
      <h3 className='display-4 text-white my-3'>
        {currentLocation.pathname === '/' ? 'My Team' : 'Search character'}
      </h3>
      <Route exact path='/search'>
        <Search url={SUPERHERO_URL} />
      </Route>
      <Route exact path='/'>
        <Home url={SUPERHERO_URL} />
      </Route>
    </>
  );
}

export default MainLayout;
