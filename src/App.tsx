import { createBrowserHistory } from 'history';
import React, { Suspense } from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import { routes } from './routes';

import './App.scss';

const history = createBrowserHistory()

function App() {
  return (
    <main>
      <Suspense fallback={'Loading...'}>
        <Router history={history}>
          <Switch>
            {routes.map(route => {
              return <Route key={String(route.path || route.key)} {...route}></Route>
            })}
          </Switch>
        </Router>
      </Suspense>
    </main>
  )
}

export default App;
