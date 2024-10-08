import React from 'react'
import { ThemeProvider } from 'styled-components'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { brandPink } from './themes'

import Base from './app/templates/Base'
import Home, { homePageInfo } from './app/pages/Home'
import About from './app/pages/About'
import Error from './app/pages/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Base pageTitle={homePageInfo.title} pagePath={homePageInfo.path}>
        <Home />
      </Base>
    ),
    errorElement: <Error />
  },
  {
    path: '/about',
    element: (
      <Base pageTitle={About.pageInfo.title} pagePath={About.pageInfo.path}>
        <About />
      </Base>
    )
  }
])

const App = () => {
  return (
    <ThemeProvider theme={brandPink}>
      <brandPink.globalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
