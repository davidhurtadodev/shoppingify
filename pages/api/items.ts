import type { NextApiRequest, NextApiResponse } from 'next';
import connectMongo from '@/lib/mongodb';
const Item = require('@/lib/models/Item');
const Category = require('@lib/models/Category');

const capitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectMongo();
  console.log('connected to DB');

  if (req.method === 'POST') {
    const { body } = req;

    if (!body.name || !body.category) {
      return res.status(400).json({
        error: 'content missing',
      });
    }
    const categoryInDb = await Category.find({
      name: body.category.toLowerCase(),
    });

    if (!categoryInDb) {
      const capitalizedCategory = capitalize(body.category);
      const newCategory = new Category({
        name: body.category.toLowerCase(),
      });

      const savedCategory = await newCategory.save();

      const newItemObject = {
        name: body.name,
        ...(body.note && { note: body.note }),
        ...(body.imageUrl && { imageUrl: body.imageUrl }),
        category: savedCategory.id,
      };

      const newItem = new Item(newItemObject);

      const savedItem = await newItem.save();

      savedCategory.items = [...savedCategory.items, savedItem._id];

      await savedCategory.save();

      const populatedItem = await Item.findById(savedItem.id).populate(
        'category'
      );

      return res.status(201).json(populatedItem);
    } else {
      const newItemObject = {
        name: body.name,
        ...(body.note && { note: body.note }),
        ...(body.imageUrl && { imageUrl: body.imageUrl }),
        category: categoryInDb.id,
      };

      const newItem = new Item(newItemObject);

      const savedItem = await newItem.save();

      categoryInDb.items = [...categoryInDb.items, savedItem._id];

      await categoryInDb.save();

      const populatedItem = await Item.findById(savedItem.id).populate(
        'category'
      );

      return res.status(201).json(populatedItem);
    }
  }
}
