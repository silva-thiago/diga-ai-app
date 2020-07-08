import styles from './sticky-footer.module.scss'

const Footer = () => {
  return (
    <React.Fragment>
      <div className={styles.footerContainer}>
        <div className={'grid grid-cols-1 bg-gray-900 p-16'}>
          <div className={'flow-root'}>
            <div className={'block text-xl font-black text-white text-center px-4 py-2 m-2'}>
              <p>Desenvolvido por {' '}
                <a href="https://dev.thiagosilva.cc/" target='blank_' className={'hover:text-gray-400'}>Thiago Silva</a> {' '}
                {/* <a href="https://github.com/silva-thiago" target='blank_' className={'hover:text-gray-400'}>GitHub</a> | {' '} */}
                {/* <a href="https://www.linkedin.com/in/tjlsilva/" target='blank_' className={'hover:text-gray-400'}>LinkedIn</a> {' '} */}
              </p>
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
