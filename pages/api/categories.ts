import type { NextApiRequest, NextApiResponse } from 'next';
import connectMongo from '../../lib/mongodb';
const Category = require('../../lib/models/Category');

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
      if (!body.name) {
        return res.status(400).json({
          error: 'content missing',
        });
      }

      const isRepeated = await Category.findOne({
        name: body.name.toLowerCase(),
      });

      console.log(isRepeated);

      if (isRepeated) {
        return res.status(400).json({
          error: 'repeated category',
        });
      }

      const category = new Category({
        name: body.name.toLowerCase(),
      });

      const savedCategory = await category.save();
      return res.status(201).json(savedCategory);
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
