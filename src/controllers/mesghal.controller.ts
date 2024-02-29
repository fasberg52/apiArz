import { Request, Response } from 'express'
import axios, { AxiosResponse } from 'axios'
import { baseUrlArz } from '../utils/base.url.axios'
import { AppDataSource } from '../configs/db.config'
import { Mesghal } from '../entity/mesghal.entity'

async function getMesghal(req: Request, res: Response): Promise<void> {
  try {
    const response: AxiosResponse = await baseUrlArz.get(
      '/margani/pricedb/main/tgju/current/mesghal/latest.json',
    )

    const { p, l, h } = response.data

    const newMesghal = new Mesghal()
    newMesghal.price = p
    newMesghal.lowPrice = l
    newMesghal.highPrice = h

    const mesghalRepository = AppDataSource.getRepository(Mesghal)
    const savedMesghal = await mesghalRepository.save(newMesghal)

    res.status(200).json({ data: savedMesghal })
  } catch (error) {
    console.error('Error fetching data:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

export default getMesghal
