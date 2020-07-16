import Head from 'next/head'

const PageTitle = ({ title }) => {
  return (
    <React.Fragment>
      <Head>
        {/* SEO */}
        <meta name='author' content='Thiago Silva (dev.thiagosilva.cc)' />
        <meta name='copyright' content='© 2020 Thiago Silva' />
        <meta name='description' content='Aqui você comenta, ganha cashback e compra muito mais!' />
        <meta name='keyword' content='diga ai, digaai, diga aí, digaaí, comentar, comentario, comentario, comentários, comentarios, opniao, opnião, opniões, dica, dicas, sugestão, sugestao, sugestões, sugestoes, dinheiro, deinheiro de volta, cashback' />
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content='index, follow' />
        {/* Google Site Verification */}
        <meta name='google-site-verification' content='' />
        {/* Let browser know webapp is optimized for mobile */}
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta httpEquiv='cache-control' content='max-age=31536000' />
        <meta httpEquiv='pragma' content='max-age=31536000' />
        <meta httpEquiv='refresh' content='3600;url=https://digaai.vercel.app/' />
        {/* Open Graph Markup: og */}
        <meta property='og:type' content='webapp' />
        <meta property='og:url' content='https://digaai.vercel.app/' />
        <meta property='og:title' content='Seu comentário vale cashback' />
        <meta property='og:image' content='https://digaai.vercel.app/img/megafone.png' />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='1080' />
        <meta property='og:image:height' content='1080' />
        <meta property='og:image:alt' content='O megafone representa o poder da sua voz.' />
        <meta property='og:description' content='Aqui você comenta, ganha cashback e compra muito mais!' />
        <meta property='og:site_name' content='Diga Aí App' />
        <meta property='og:locale' content='pt_BR' />
        {/* Open Graph Markup: lp */}
        <meta property='lp:type' content='webapp' />
        <meta property='lp:url' content='https://digaai.vercel.app/' />
        <meta property='lp:title' content='Seu comentário vale cashback' />
        <meta property='lp:image' content='https://digaai.vercel.app/img/megafone.png' />
        <meta property='lp:image:type' content='image/png' />
        <meta property='lp:image:width' content='1080' />
        <meta property='lp:image:height' content='1080' />
        <meta property='lp:image:alt' content='O megafone representa o poder da sua voz.' />
        <meta property='lp:description' content='Aqui você comenta, ganha cashback e compra muito mais!' />
        <meta property='lp:site_name' content='Diga Aí App' />
        <meta property='lp:locale' content='pt_BR' />
        {/* Twitter Cards */}
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:creator' content='@digaai' />
        <meta name='twitter:site' content='@digaai' />
        <meta name='twitter:domain' content='digaai.vercel.app/' />
        <meta name='twitter:title' content='Seu comentário vale cashback' />
        <meta name='twitter:description' content='Aqui você comenta, ganha cashback e compra muito mais!' />
        {/* <meta property={'og:' + title} content={title} key={title} /> */}

        <title>{title}Diga Aí - O aplicativo que te dá cashback</title>
      </Head>
    </React.Fragment>
  )
}

export default PageTitle
