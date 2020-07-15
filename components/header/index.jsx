import { useState } from 'react'
import Link from 'next/link'

import Nav from './nav'
import NavMobile from './nav-mobile'

const Header = () => {
  const [hidden, setHidden] = useState(false)
  const toggle = () => {
    setHidden(!hidden)
  }

  return (
    <React.Fragment>
      <div className={'flex flex-wrap items-center justify-between text-center text-xl font-black bg-gray-100 border-b-2 border-gray-300 sm:text-lg md:text-base xl:text-sm p-6'}>
        <div className={''}>
          <Link href='/'>
            <a className={'flex items-center flex-shrink-0 text-gray-900 hover:text-red-600 mr-6'}>
              <div>
                <img src='/img/logotipo-diga-ai.svg' alt='Logotipo Diga Aí' className={'h-auto w-24'} />
              </div>
            </a>
          </Link>
        </div>
        <div className={'block lg:hidden'}>
          <button className={'flex items-center text-red-600 border border-red-600 hover:text-white hover:border-transparent hover:bg-red-600 rounded px-3 py-2'} type='button' onClick={toggle}>
            <svg className={'fill-current h-3 w-3'} viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
        <div className={'flex-grow lg:block hidden'}>
          <Nav />
        </div>
        <div className={'flex-grow w-full lg:hidden'} style={{ display: hidden ? 'block' : 'none' }}>
          <NavMobile />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header
