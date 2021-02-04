import { lazy } from 'react'

import { RouteProps } from 'react-router-dom'

type RoutePropsWithKey = RouteProps & { key?: string }

const lazyRoutes = {
  Dashboard: lazy(
    () => import(/* webpackChunkName: "Home" */ './Dashboard'),
  ),
  Home: lazy(
    () => import(/* webpackChunkName: "Home" */ './Home'),
  ),
  NotFound: lazy(
    () => import(/* webpackChunkName: "Home" */ './NotFound'),
  )
}

export const routes : RoutePropsWithKey[] = [
  {
    component: lazyRoutes.Dashboard,
    path: '/dashboard',
    exact: true,
  },
  {
    component: lazyRoutes.Home,
    path: '/',
    exact: true,
  },
  {
    component: lazyRoutes.NotFound,
    path: '*',
  },
]
