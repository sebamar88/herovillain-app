import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import MainLayout from './components/MainLayout';
import Spinner from './components/Spinner';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Router>
      <div className='column is-desktop principal pl-0'>
        <Switch>
          {!isAuth ? (
            <Route path='/'>
              <Login setIsAuth={setIsAuth} />
            </Route>
          ) : (
            <MainLayout setIsAuth={setIsAuth} />
          )}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
