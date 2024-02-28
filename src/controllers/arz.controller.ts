import { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';

async function getArz(req: Request, res: Response): Promise<void> {
  try {
    const response: AxiosResponse = await axios.get(
      'https://raw.githubusercontent.com/margani/pricedb/main/tgju/current/price_dollar_rl/latest.json',
    );

    res.status(200).json({ data: response.data });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export default getArz;
