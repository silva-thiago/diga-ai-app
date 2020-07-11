import Link from 'next/link'

const Header = () => {
  return (
    <React.Fragment>
      <nav className={'flex items-center justify-between flex-wrap bg-gray-100 border-b-2 border-gray-300 p-6'}>
        <div>
          <Link href='/'>
            <a className={'flex items-center flex-shrink-0 text-gray-900 hover:text-red-600 mr-6'}>
              <div>
                <img src='/img/logotipo-diga-ai.svg' alt='Logotipo Diga Aí' className={'h-auto w-24'} />
              </div>
            </a>
          </Link>
        </div>
        <div className={'block lg:hidden'}>
          <button className={'flex items-center text-red-600 border border-red-600 hover:text-white hover:border-transparent hover:bg-red-600 rounded px-3 py-2'}>
            <svg className={'fill-current h-3 w-3'} viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
        <div className={'text-xl font-black w-full block flex-grow lg:flex lg:items-center lg:w-auto'}>
          <div className={'text-sm lg:flex-grow'}>
            <div>
              <Link href='/perfil'>
                <a className={'text-gray-900 hover:text-red-600 block lg:inline-block lg:mt-0 mt-4 mr-4'}>Perfil</a>
              </Link>
              <Link href='/pesquisa'>
                <a className={'text-gray-900 hover:text-red-600 block lg:inline-block lg:mt-0 mt-4 mr-4'}>Pesquisa</a>
              </Link>
              <Link href='/sobre'>
                <a className={'text-gray-900 hover:text-red-600 block lg:inline-block lg:mt-0 mt-4 mr-4'}>Sobre</a>
              </Link>
              <Link href='/contato'>
                <a className={'text-gray-900 hover:text-red-600 block lg:inline-block lg:mt-0 mt-4 mr-4'}>Contato</a>
              </Link>
            </div>
          </div>
          <div>
            <Link href='/entrar'>
              <button className={'font-bold text-sm text-red-600 bg-gray-100 border border-red-600 shadow hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:shadow-outline inline-block leading-none rounded-full px-4 py-2 mt-4 lg:mt-0'}>
                <a>Entrar</a>
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Header
