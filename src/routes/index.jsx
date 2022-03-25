import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'

// Routes
const namedPaths = {
  home: '/',
}

function MainRoutes() {
  return (
    <Routes>
      <Route path={namedPaths.home} element={<Home />} />
    </Routes>
  )
}

export { MainRoutes }
