// HEADER

import React from 'react'
import { Logo } from './utils/Logo'
import { Menu } from './utils/Menu'
import { Login } from './utils/Login'

function Header() {
  return (
    <div className="mx-auto max-w-7xl px-8">
      <div className="mx-auto flex max-w-3xl items-center justify-center py-4">
        <Logo />
        {/* <Menu /> */}
        {/* <Login /> */}
      </div>
    </div>
  )
}

export { Header }
