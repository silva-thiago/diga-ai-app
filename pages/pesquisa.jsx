import Layout from '../components/layout'
import Form from '../components/form'

const Pesquisa = () => {
  return (
    <React.Fragment>
      <Layout>
        <Form>
          <div className={'flex flex-wrap -mx-3 mb-6'}>
            <div className={'w-full md:w-1/2 px-3 mb-6 md:mb-0'}>
              <label className={'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'} for='grid-first-name'>Seu nome</label>
              <input className={'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'} id='grid-first-name' type='text' placeholder='Jane' />
              <p className={'text-gray-600 text-xs italic'}>Mensagem de validação</p>
            </div>
            <div className={'w-full md:w-1/2 px-3 mb-6 md:mb-0'}>
              <label className={'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'} for='grid-last-name'>Seu sobrenome</label>
              <input className={'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'} id='grid-last-name' type='text' placeholder='Doe' />
              <p className={'text-gray-600 text-xs italic'}>Mensagem de validação</p>
            </div>
          </div>
          <div className={'flex flex-wrap -mx-3 mb-6'}>
            <div className={'w-full md:w-1/2 px-3 mb-6 md:mb-0'}>
              <label className={'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'} for='grid-email'>Email</label>
              <input className={'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'} id='grid-email' type='email' placeholder='seu@email.com' />
              <p className={'text-gray-600 text-xs italic'}>Mensagem de validação</p>
            </div>
            <div className={'w-full md:w-1/2 px-3 mb-6 md:mb-0'}>
              <label className={'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'} for='grid-whatsapp'>WhatsApp</label>
              <input className={'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'} id='grid-whatsapp' type='phone' placeholder='99 999 999 999' />
              <p className={'text-gray-600 text-xs italic'}>Mensagem de validação</p>
            </div>
          </div>
          <div className={'flex flex-wrap -mx-3 mb-6'}>
            <div className={'w-full px-3'}>
              <label className={'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'} for='grid-message'>Mensagem</label>
              <textarea className={'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'} rows="5" cols="50" id='grid-message' type='text-area' placeholder='Digite aqui' />
              <p className={'text-gray-600 text-xs italic'}>Mensagem de validação</p>
            </div>
          </div>
        </Form>
      </Layout>
    </React.Fragment>
  )
}

export default Pesquisa
