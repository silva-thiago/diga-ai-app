import { GoogleSpreadsheet } from 'google-spreadsheet'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      private_key: process.env.SHEET_PRIVATE_KEY,
      client_email: process.env.SHEET_CLIENT_EMAIL,
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
