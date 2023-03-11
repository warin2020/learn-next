import type { NextApiRequest, NextApiResponse } from 'next'
import type { ICar } from '@/types';
import path from 'path';
import { promises as fs } from 'fs';

export interface ICarRes {
  car?: ICar;
}

export default async function Car(
  req: NextApiRequest,
  res: NextApiResponse<ICarRes>
) {
  const { name } = req.query;
  const file = await fs.readFile(path.join(process.cwd(), 'json', 'cars.json'), 'utf8');
  const carList = JSON.parse(file) as ICar[];
  res.status(200).json({
    car: carList.find(car => car.name === name)
  });
}
