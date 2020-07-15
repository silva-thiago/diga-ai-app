import Link from 'next/link'

const links = [
  { href: '/perfil', label: 'Perfil' },
  { href: '/pesquisa', label: 'Pesquisa' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
]

const MenuItems = () => {
  return (
    <React.Fragment>
      <div className={'lg:flex-grow'}>
        <ul className={'lg:flex'}>
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`} className='text-gray-900 hover:text-red-600 hover:bg-gray-200 hover:shadow block rounded-full px-3 py-2 lg:flex-1 lg:inline-block lg:mt-0 lg:mx-4'>
              <Link href={href}>
                <a className='no-underline'>{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Link href='/entrar'>
          <button className={'font-bold text-red-600 bg-gray-100 border border-red-600 hover:shadow hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:shadow-outline inline-block leading-none rounded-full px-4 py-2 mt-4 lg:mt-0'}>
            <a>Entrar</a>
          </button>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default MenuItems
