import type { NextApiRequest, NextApiResponse } from 'next';
import connectMongo from '@/lib/mongodb';
const List = require('@/lib/models/List');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // connect to database
  await connectMongo();
  console.log('connected to DB');

  if (req.method === 'POST') {
    try {
      const { body } = req;
      if (!body.name || !body.items || !body.date) {
        return res.status(400).json({
          error: 'content missing',
        });
      }

      const repeatedList = List.findOne({
        name: body.name.toLowerCase(),
      });

      if (repeatedList) {
        return res.status(400).json({
          error: 'repeated list',
        });
      }

      const list = new List({
        name: body.listName.toLowerCase(),
        status: 'pending',
        date: body.date,
        items: body.items,
      });

      const savedList = await list.save();
      return res.status(201).json(savedList);
    } catch (error: any) {
      console.error(error);
      return res.json(error);
    }
  } else if (req.method === 'GET') {
    try {
      const categories = await List.find({});
      return res.status(200).json(categories);
    } catch (error: any) {
      console.error(error);
      return res.json(error);
    }
  }
}
