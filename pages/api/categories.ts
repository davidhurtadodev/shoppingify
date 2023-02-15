import type { NextApiRequest, NextApiResponse } from 'next';
import connectMongo from '@/lib/mongodb';
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    try {
      await connectMongo();
      console.log('connected to DB');
    } catch (error: any) {
      console.error(error);
      return res.json(error);
    }
  } else if (req.method === 'GET') {
    try {
      const categories = await Category.find({});
      return res.status(200).json(categories);
    } catch (error: any) {
      console.error(error);
      return res.json(error);
    }
  }
}
