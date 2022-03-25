import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { MainRoutes } from './routes'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <MainRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export { App }
