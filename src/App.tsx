import { createBrowserHistory } from 'history';
import React, { Suspense } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next'
import { routes } from './routes';
import i18n from './i18n'
import './styles/index.scss';

import CircularProgress from '@material-ui/core/CircularProgress'

const history = createBrowserHistory()

function App() {
  return (
    <div>
      <Suspense fallback={
        <div className='flex justify-center items-center w-screen h-screen'>
          <CircularProgress />
        </div>
      }>
        <Router history={history}>
          <I18nextProvider i18n={i18n}>
            <Switch>
              {routes.map(route => {
                return <Route key={String(route.path || route.key)} {...route}></Route>
              })}
            </Switch>
          </I18nextProvider>
        </Router>
      </Suspense>
    </div>
  )
}

export default App;
