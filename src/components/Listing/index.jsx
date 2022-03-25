// Listing
import React from 'react'

function Listing({ list }) {
  return (
    <div className="mx-auto max-w-7xl px-8">
      <div className="mx-auto grid max-w-3xl items-center py-8">
        <dl className="grid gap-2 divide-y divide-dashed divide-brown-50">
          {list.map((item, index) => {
            return (
              <div className="grid gap-1 py-4" key={index}>
                <dt className="font-sans font-semibold text-brown-400">{item.title}</dt>
                <dd className="font-sans text-slate-400">{item.description}</dd>
              </div>
            )
          })}
        </dl>
      </div>
    </div>
  )
}

export { Listing }
