import Header from '../header'
import Footer from '../footer'

import styles from './layout.module.scss'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main role='main' className={styles.wrapperMain}>
        <div className={styles.wrapperContainer}>
          {children}
        </div>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
