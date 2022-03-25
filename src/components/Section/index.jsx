// SECTION

import React from 'react'

function Section({ title, description }) {
  return (
    <div className="mx-auto max-w-7xl px-8">
      <div className="mx-auto max-w-3xl items-center py-8">
        <h1 className="-ml-1 text-center font-swashed text-6xl font-bold text-brown-600">
          {title}
        </h1>
        <p className="mt-4 text-center font-sans text-slate-400">{description}</p>
      </div>
    </div>
  )
}

export { Section }
