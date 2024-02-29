import { Request, Response } from 'express'
import axios, { AxiosResponse } from 'axios'
import { baseUrlArz } from '../utils/base.url.axios'
import { Dollar } from '../entity/dolar.entity'
import { AppDataSource } from '../configs/db.config'
async function getArz(req: Request, res: Response): Promise<void> {
  try {
    const response: AxiosResponse = await baseUrlArz.get(
      '/margani/pricedb/main/tgju/current/price_dollar_rl/latest.json',
    )

    const { p, l, h } = response.data

    const newDollar = new Dollar()
    newDollar.price = p
    newDollar.lowPrice = l
    newDollar.highPrice = h

    const dollarRepository = AppDataSource.getRepository(Dollar)
    const savedDollar = await dollarRepository.save(newDollar)
    res.status(200).json({ data: savedDollar })
  } catch (error) {
    console.error('Error fetching data:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

export default getArz
