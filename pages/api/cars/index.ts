import type { NextApiRequest, NextApiResponse } from 'next'
import type { ICar } from '@/types';
import path from 'path';
import { promises as fs } from 'fs';

export interface ICarsRes {
  carNames: ICar['name'][];
}

export default async function Cars(
  req: NextApiRequest,
  res: NextApiResponse<ICarsRes>
) {
  const file = await fs.readFile(path.join(process.cwd(), 'json', 'cars.json'), 'utf8');
  const carList = JSON.parse(file) as ICar[];
  res.status(200).json({
    carNames: carList.map(car => car.name)
  });
}
