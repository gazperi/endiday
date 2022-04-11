// LOGO
import React from 'react'

function Logo() {
  return (
    <div className="group">
      <a href="" className="">
        <div className="-ml-2 mt-16 mb-8 flex items-center font-swashed text-3xl">
          <div className="mt-1 mr-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 7V3M16 7V3M5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21Z"
                stroke="#14B8A6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 11H17"
                stroke="#9A8676"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="text-brown-400 transition-all duration-500 group-hover:text-brown-100">
            Endi
          </h1>
          <h1 className="text-teal-400 transition-all duration-500 group-hover:text-teal-500">
            Day
          </h1>
        </div>
      </a>
    </div>
  )
}

export { Logo }
