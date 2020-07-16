import { GoogleSpreadsheet } from 'google-spreadsheet'
import { Base64 } from '../../utils'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async (req, res) => {
  try {
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=60')
    await doc.useServiceAccountAuth({
      private_key: Base64(process.env.SHEET_PRIVATE_KEY),
      client_email: process.env.SHEET_CLIENT_EMAIL
    })
    await doc.loadInfo()

    const sheet = doc.sheetsByIndex[2]
    await sheet.loadCells('A2:B2')
    const promotionStatusCell = sheet.getCell(1, 0)
    const promotionMessageCell = sheet.getCell(1, 1)

    res.end(JSON.stringify({
      promotionStatus: promotionStatusCell.value === 'VERDADEIRO',
      promotionMessage: promotionMessageCell.value,
      noPromotionMessage: 'No momento não há promoções disponíveis. Volte em breve!'
    }))
  } catch (error) {
    res.end(JSON.stringify({
      promotionStatus: false,
      promotionMessage: 'Sentimos muito, mas algo inesperado aconteceu. Entre em contato com o suporte!',
      noPromotionMessage: 'Sentimos muito, mas algo inesperado aconteceu. Entre em contato com o suporte!'
    }))
  }
}
