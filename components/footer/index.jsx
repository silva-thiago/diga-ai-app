import styles from './sticky-footer.module.scss'

const links = [
  { href: 'https://dev.thiagosilva.cc/', label: 'Thiago Silva' },
  { href: 'https://github.com/silva-thiago', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/tjlsilva', label: 'LinkedIn' },
]

const Footer = () => {
  return (
    <React.Fragment>
      <div className={styles.footerContainer}>
        <div className={'grid grid-cols-1 bg-gray-900 p-16'}>
          <div className={'flow-root'}>
            <div className={'block text-xl font-black text-white text-center px-4 py-2 m-2'}>
              <ul className={'justify-between items-center space-x-4'}>
                <span>Desenvolvido por {' '}
                  {links.map(({ href, label }) => (
                    <li className={''} key={`${href}${label}`}>
                      <a href={href} target='blank_' className={'text-white hover:text-gray-400 no-underline'}>{label}</a> {' '}
                    </li>
                  ))}
                </span>
              </ul>
            </div>
          </div>
          <div className={'flex inline mx-auto'}>
            <img src='/img/logotipo-semana-fsm.svg' alt='Logotipo Semana FSM' className={'h-auto w-32 mx-4 mt-2'} />
            <img src='/img/logotipo-devpleno.svg' alt='Logotipo Devpleno' className={'h-auto w-32 mx-4 mt-2'} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Footer
