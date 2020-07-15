import MenuItems from './menu-items'

const Nav = () => {
  return (
    <React.Fragment>
      <nav className={'block w-full lg:flex lg:items-center lg:w-auto'}>
        <MenuItems />
      </nav>
    </React.Fragment>
  )
}

export default Nav
