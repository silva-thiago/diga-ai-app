import { GoogleSpreadsheet } from 'google-spreadsheet'
import { fromBase64 } from '../../utils/base64'
import moment from 'moment'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

const generateCoupon = () => {
  const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase()

  return code.substr(0, 4) + '-' + code.substr(4, 4) + '-' + code.substr(8, 4)
}

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY),
      client_email: process.env.SHEET_CLIENT_EMAIL
    })
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[1]
    const data = JSON.parse(req.body)

    const sheetConfig = doc.sheetsByIndex[2]
    await sheetConfig.loadCells('A2:B2')
    const promotionStatusCell = sheetConfig.getCell(1, 0)
    const promotionMessageCell = sheetConfig.getCell(1, 1)

    let Cupom = ''
    let Promo = ''

    if (promotionStatusCell.value === 'VERDADEIRO') {
      // TODO: gerar cupom
      Cupom = generateCoupon()
      Promo = promotionMessageCell.value
    }

    // Nome Sobrenome Email WhatsApp Cupom Promoção Data Nota Mensagem
    await sheet.addRow({
      Nome: data.Nome,
      Sobrenome: data.Sobrenome,
      Email: data.Email,
      WhatsApp: data.WhatsApp,
      Cupom,
      Promo,
      Data: moment().format('DD/MM/YYYY HH:mm:ss'),
      Nota: parseInt(data.Nota),
      Mensagem: data.Mensagem,
      Consumado: 'Não'
    })
    res.end(JSON.stringify({
      showCoupon: Cupom !== '',
      Cupom,
      Promo
    }))
  } catch (error) {
    res.end(error)
  }
}
