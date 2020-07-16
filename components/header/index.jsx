import { useState } from 'react'
import Link from 'next/link'

import Nav from './nav'
import NavMobile from './nav-mobile'

const Header = () => {
  const [collapse, setCollapse] = useState(false)
  const toggle = () => {
    setCollapse(!collapse)
  }

  return (
    <React.Fragment>
      <div className={'flex flex-wrap items-center justify-between text-center text-base font-bold antialiased bg-gray-100 border-b-2 border-gray-300 p-6'}>
        <div className={''}>
          <Link href='/'>
            <a className={'flex items-center flex-shrink-0 text-gray-900 hover:text-red-600 mr-6'}>
              <div>
                <img src='/img/logotipo-diga-ai.svg' alt='Logotipo criado por dgim-studio e adaptado por Thiago Silva' className={'h-auto w-20'} />
              </div>
            </a>
          </Link>
        </div>
        <div className={'block lg:hidden'}>
          <button className={'flex items-center text-white bg-red-600 border border-red-600 hover:shadow rounded px-3 py-2'} type='button' onClick={toggle}>
            <svg className={'fill-current h-3 w-3'} viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
        <div className={'flex-grow lg:block hidden'}>
          <Nav />
        </div>
        <div className={'flex-grow w-full lg:hidden'} style={{ display: collapse ? 'block' : 'none' }}>
          <NavMobile />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header
