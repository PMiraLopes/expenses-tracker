import { lazy } from 'react'

import { RouteProps } from 'react-router-dom'

import Home from './Home'

type RoutePropsWithKey = RouteProps & { key?: string }

const lazyRoutes = {
  Dashboard: lazy(
    () => import(/* webpackChunkName: "Home" */ './Dashboard'),
  ),
  NotFound: lazy(
    () => import(/* webpackChunkName: "Home" */ './NotFound'),
  )
}

export const routes: RoutePropsWithKey[] = [
  {
    component: Home,
    path: '/',
    exact: true,
  },
  {
    component: lazyRoutes.Dashboard,
    path: '/dashboard',
    exact: true,
  },
  {
    component: lazyRoutes.NotFound,
    path: '*',
  },
]
