import { useState } from 'react'
import Link from 'next/link'

import PageTitle from '../components'
import Layout from '../components/layout'
import Form from '../components/form'

const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: '',
    Sobrenome: '',
    Email: '',
    WhatsApp: '',
    Nota: '',
    Mensagem: '',
  })
  const notas = [0, 1, 2, 3, 4, 5]
  const [success, setSuccess] = useState(false)
  const [feedback, setFeedback] = useState({})
  const sendData = async () => {
    try {
      const response = await fetch('/api/saving-data', {
        method: 'POST',
        body: JSON.stringify(form),
      })
      const data = await response.json()
      setSuccess(true)
      setFeedback(data)
    } catch (error) { }
  }
  const handleChange = (evt) => {
    const value = evt.target.value
    const key = evt.target.name

    setForm(old => ({
      ...old,
      [key]: value,
    }))
  }

  return (
    <React.Fragment>
      <PageTitle title='Pesquisa - ' />
      <Layout>
        <Form>
          {!success && <span>
            <div className={'flex flex-wrap -mx-3 mb-6'}>
              <div className={'w-full md:w-1/2 px-3 mb-6 md:mb-0'}>
                <label className={'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'} htmlFor='grid-first-name'>Seu nome</label>
                <input className={'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'} id='grid-first-name' type='text' placeholder='Jane' name='Nome' value={form.Nome} onChange={handleChange} />
              </div>
              <div className={'w-full md:w-1/2 px-3 mb-6 md:mb-0'}>
                <label className={'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'} htmlFor='grid-last-name'>Seu sobrenome</label>
                <input className={'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'} id='grid-last-name' type='text' placeholder='Doe' name='Sobrenome' value={form.Sobrenome} onChange={handleChange} />
              </div>
            </div>
            <div className={'flex flex-wrap -mx-3 mb-6'}>
              <div className={'w-full md:w-1/2 px-3 mb-6 md:mb-0'}>
                <label className={'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'} htmlFor='grid-email'>Email</label>
                <input className={'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'} id='grid-email' type='email' placeholder='seu@email.com' name='Email' value={form.Email} onChange={handleChange} />
              </div>
              <div className={'w-full md:w-1/2 px-3 mb-6 md:mb-0'}>
                <label className={'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'} htmlFor='grid-whatsapp'><span className={'text-gray-600 text-xs italic'}>DDD</span> + WhatsApp</label>
                <input className={'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'} id='grid-whatsapp' type='phone' placeholder='99 999999999' name='WhatsApp' value={form.WhatsApp} onChange={handleChange} />
              </div>
            </div>
            <div className={'flex flex-wrap -mx-3 mb-6'}>
              <div className={'w-full px-3'}>
                <label className={'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'}>Nota</label>
                <div className={'flex py-2'}>
                  {notas.map((nota, id) => {
                    return (
                      <span className={'block w-1/6 tracking-wide text-center text-gray-700 text-xs font-bold mb-2'} key={id} htmlFor='grid-grade'>
                        {nota}<br />
                        <input type='radio' name='Nota' value={nota} onChange={handleChange} />
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className={'flex flex-wrap -mx-3 mb-6'}>
              <div className={'w-full px-3'}>
                <label className={'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'} htmlFor='grid-message'>Mensagem</label>
                <textarea className={'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'} rows='5' cols='50' id='grid-message' type='text-area' placeholder='Digite aqui' name='Mensagem' value={form.Mensagem} onChange={handleChange} />
              </div>
            </div>
            <div className={'flex flex-wrap -mx-3 mb-6'}>
              <div className={'w-full px-3'}>
                <div className={'flex flex-row-reverse space-x-4 space-x-reverse'}>
                  <button className={'text-white font-bold bg-red-600 hover:bg-red-700 rounded-full focus:outline-none focus:shadow-outline py-2 px-4'} type='submit' onClick={sendData}>
                    ENVIAR
                  </button>
                  <Link href='/'>
                    <button className={'text-red-600 font-bold bg-transparent hover:text-red-700 hover:border-red-700 rounded-full focus:outline-none focus:shadow-outline py-2 px-4'} type='button'>
                      Cancelar
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </span>}
          {success && <span>
            <div className='text-center'>
              <div className='items-center bg-red-600 text-white text-2xl font-bold rounded-lg px-4 py-16'>
                <p>Obrigado por deixar sua opnião!</p>
              </div>
              {
                feedback.showCoupon && <div className='items-center bg-transparent text-red-600 border border-red-600 rounded-lg px-4 py-3 mt-4'>
                  Seu cupom:<br />
                  <span className='text-2xl font-bold'>{feedback.Cupom}</span>
                </div>
              }
              {
                feedback.showCoupon && <div className='items-center bg-transparent text-red-600 border border-red-600 rounded-lg px-4 py-3 mt-4'>
                  Promoção ativa:<br />
                  <span className='font-bold'>{feedback.Promo}</span><br />
                  <p className='text-base opacity-75 mt-4'>Tire uma foto ou print desta tela e apresente ao caixa.</p>
                </div>
              }
            </div>
          </span>}
        </Form>
      </Layout>
    </React.Fragment>
  )
}

export default Pesquisa
