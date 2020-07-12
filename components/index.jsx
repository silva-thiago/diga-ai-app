import Head from 'next/head'

const PageTitle = ({ title }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}Diga Aí - O aplicativo que te dá desconto</title>
      </Head>
    </React.Fragment>
  )
}

export default PageTitle
