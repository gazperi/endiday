import React from 'react'
import { UserCircleIcon } from '@heroicons/react/outline'

function Login() {
  return (
    <div className="">
      <div className="group">
        <div className="duration-400 rounded-full bg-gray-100 shadow-sm transition-all group-hover:shadow-md">
          <a href="">
            <UserCircleIcon className="h-8 w-auto text-brown-400 transition-all duration-500 group-hover:text-brown-100" />
          </a>
        </div>
      </div>
    </div>
  )
}

export { Login }
