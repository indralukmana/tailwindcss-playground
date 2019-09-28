import React, { useState } from 'react'
import '../css/build/navbar.css'
import logoInverted from '../img/logo-inverted.svg'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='antialiased text-gray-900'>
      <div className='bg-gray-200 min-h-screen'>
        <header className=' bg-gray-900'>
          <div className='flex justify-between items-center px-4 py-3'>
            <div>
              <img src={logoInverted} alt='workcation' className='h-8' />
            </div>
            <div>
              <button
                type='button'
                className='block text-gray-500 hover:text-white focus:text-white focus:outline-none'
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg class='h-6 w-6 fill-current' viewBox='0 0 24 24'>
                  {isOpen && (
                    <path
                      fill-rule='evenodd'
                      d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
                    />
                  )}

                  {!isOpen && (
                    <path
                      fill-rule='evenodd'
                      d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
          <div className={`px-2 pt-2 pb-4 ${isOpen ? 'block' : 'hidden'}`}>
            <a
              href='#'
              className='block text-white font-semibold hover:bg-gray-800 rounded px-2 py-1 '
            >
              List your property
            </a>
            <a
              href='#'
              className='block text-white font-semibold hover:bg-gray-800 rounded px-2 py-1 mt-1'
            >
              Trips
            </a>
            <a
              href='#'
              className='block text-white font-semibold hover:bg-gray-800 rounded px-2 py-1 mt-1'
            >
              Messages
            </a>
          </div>
        </header>
      </div>
    </div>
  )
}
