import Link from 'next/link'
import useSWR from 'swr'

import Layout from '../components/layout'
import Card from '../components/card'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
  const { data, error } = useSWR('/api/get-promo', fetcher)

  return (
    <React.Fragment>
      <Layout>
        <Card>
          <div className={'text-center rounded-lg overflow-hidden'}>
            <img className={'rounded-lg'} src='/img/megafone.png' alt='Sunset in the mountains' />
            <div className={'py-4'}>
              <p className={'text-gray-900 text-lg'}>Nosso estabelecimento constantemente busca atender melhor seus clientes. Por isso, estamos sempre abertos a ouvir o que você pensa.</p>
            </div>
            <div className={'py-4'}>
              {data && !data.promotionStatus && <Link href='/'>
                <a className={'font-bold uppercase bg-red-600 text-white hover:text-gray-100 hover:bg-red-700 hover:border-red-700 block rounded-full inline-block shadow px-4 opacity-50 cursor-not-allowed py-2'}>Opine agora</a>
              </Link>}
              {data && data.promotionStatus && <Link href='/pesquisa'>
                <a className={'font-bold uppercase bg-red-600 text-white hover:text-gray-100 hover:bg-red-700 hover:border-red-700 block rounded-full inline-block shadow px-4 py-2'}>Opine agora</a>
              </Link>}
            </div>
            <div className={'pt-4'}>
              {/* <p className={'text-gray-600 text-base uppercase'}>Atenção!</p> */}
              {!data && <p className={'text-gray-600 text-base'}>Carregando...</p>}
              {!error && data && !data.promotionStatus && <p className={'text-gray-600 text-base'}>{data.noPromotionMessage}</p>}
              {!error && data && data.promotionStatus && <p className={'text-gray-600 text-base'}>{data.promotionMessage}</p>}
            </div>
          </div>
        </Card>
      </Layout>
    </React.Fragment>
  )
}

export default Index
