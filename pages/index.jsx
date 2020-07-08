import Link from 'next/link'

import Layout from '../components/layout'

const Index = () => {
  return (
    <React.Fragment>
      <Layout>
          <div className={'text-center rounded-lg overflow-hidden'}>
            <img className={'rounded-lg'} src='/img/card-top.jpg' alt='Sunset in the mountains' />
            <div className={'py-4'}>
              <p className={'text-gray-900 text-base'}>Nosso estabelicimento sempre busca por atender melhor seus clientes. Por isso, estamos sempre abertos a ouvir o que vocẽ pensa.</p>
            </div>
            <div className={'py-4'}>
              <Link href='/pesquisa'>
                <a className={'font-bold uppercase bg-red-600 text-white hover:text-gray-100 hover:bg-red-700 hover:border-red-700 block rounded-full inline-block shadow px-4 py-2'}>Opine agora</a>
              </Link>
            </div>
            <div className={'pt-4'}>
              <p className={'text-gray-900 text-base'}>Ao dar sua opnião e/ou sugestão, ganhe 10% de desconto na sua próxima compra.</p>
              <p className={'text-gray-500 text-base pt-4'}>Texto dinâmico vindo da planilha</p>
            </div>
          </div>
      </Layout>
    </React.Fragment>
  )
}

export default Index
