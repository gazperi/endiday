// CARDS

import React from 'react'

function Card({ title, list }) {
  return (
    <div className="grid divide-y divide-dashed divide-brown-100 rounded-md border border-brown-100 py-4 px-6 shadow-md">
      <div className="grid grid-cols-5 items-baseline divide-brown-100">
        <span className="col-span-3 -ml-1 truncate pb-4 font-swashed text-2xl font-bold text-brown-400 sm:text-4xl">
          {title}
        </span>
        <div className="grid gap-1 pb-2">
          <span className="font-sans text-xs text-brown-500 sm:text-lg">Left</span>
          <div className="flex space-x-1">
            <div className="h-1 w-1 rounded-full bg-rose-500 sm:h-2 sm:w-2"></div>
            <div className="h-1 w-1 rounded-full bg-violet-500 sm:h-2 sm:w-2"></div>
            <div className="h-1 w-1 rounded-full bg-teal-500 sm:h-2 sm:w-2"></div>
            <div className="h-1 w-1 rounded-full bg-lime-500 sm:h-2 sm:w-2"></div>
          </div>
        </div>
        <div className="grid gap-1 pb-2">
          <span className="font-sans text-xs text-brown-500 sm:text-lg">Passed</span>
          <div className="flex space-x-1">
            <div className="h-1 w-1 rounded-full bg-brown-50 opacity-50 sm:h-2 sm:w-2"></div>
          </div>
        </div>
      </div>
      <div className="grid divide-y divide-dashed divide-brown-100">
        {list.map((item, index) => {
          return (
            <dl className="grid grid-cols-5 py-2 text-xs sm:text-lg" key={index}>
              <dt className="col-span-3 truncate font-poiret font-semibold text-brown-200">
                {item.label}
              </dt>
              {item.left == 0 && (
                <dd className="text-sans col-span-2 truncate text-slate-300">Finished</dd>
              )}
              {item.left == 100 && (
                <dd className="text-sans col-span-2 truncate text-slate-300">Not started</dd>
              )}
              {item.left != 100 && item.left != 0 && (
                <dd className="col-span-2 grid grid-cols-2">
                  {item.left < 15 && (
                    <span className="text-sans truncate font-semibold text-rose-500">
                      {item.left}%
                    </span>
                  )}
                  {item.left >= 15 && item.left < 30 && (
                    <span className="text-sans truncate font-semibold text-violet-500">
                      {item.left}%
                    </span>
                  )}
                  {item.left >= 30 && item.left < 45 && (
                    <span className="text-sans truncate font-semibold text-teal-500">
                      {item.left}%
                    </span>
                  )}
                  {item.left >= 45 && (
                    <span className="text-sans truncate font-semibold text-lime-500">
                      {item.left}%
                    </span>
                  )}
                  <span className="text-sans truncate font-semibold text-brown-50 opacity-50">
                    {item.spent}%
                  </span>
                </dd>
              )}
            </dl>
          )
        })}
      </div>
    </div>
  )
}

export { Card }
