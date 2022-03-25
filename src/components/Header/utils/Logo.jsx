import React from 'react'

function Logo() {
  return (
    <div className="group">
      <a href="" className="">
        <div className="-ml-2 flex font-swashed text-2xl">
          <h1 className="text-brown-400 transition-all duration-500 group-hover:text-brown-100">
            Endi
          </h1>
          <h1 className="text-teal-400 transition-all duration-500 group-hover:text-teal-500">
            Day
          </h1>
        </div>
        <div className="ml-1 -mt-1">
          <h2 className="font-poiret text-xs font-bold text-slate-400 transition-all duration-500 group-hover:text-slate-500">
            How much left?
          </h2>
        </div>
      </a>
    </div>
  )
}

export { Logo }
