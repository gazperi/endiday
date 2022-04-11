// FOOTER

import React from 'react'
import { RandomQuote } from './utils/RandomQuote'

function Footer() {
  return (
    <div className="mx-auto max-w-7xl px-8">
      <div className="mx-auto grid max-w-3xl items-center justify-center gap-1 pt-4 pb-4 text-center font-sans text-xs text-slate-600">
        <RandomQuote />
        <p className="pt-4">Created whit 🤎</p>
        <a
          href="https://www.linkedin.com/in/gazperi/"
          className="transition-all duration-500 hover:text-brown-100 sm:px-6 lg:px-8"
        >
          by Alfredo Gasperi
        </a>
        <p className="pt-4">All Rigths reserved.</p>
      </div>
    </div>
  )
}

export { Footer }
