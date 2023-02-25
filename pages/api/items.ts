import type { NextApiRequest, NextApiResponse } from 'next';
import connectMongo from '^lib/mongodb';
const Item = require('^lib/models/Item');
const Category = require('^lib/models/Category');

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

    let isRepeated = await Item.findOne({
      name: body.name.toLowerCase(),
    });

    if (isRepeated) {
      return res.status(400).json({
        error: 'repeated item',
      });
    }

    let categoryInDb = await Category.findOne({
      name: body.category.toLowerCase(),
    });

    console.log(categoryInDb);

    if (!categoryInDb) {
      const newCategory = new Category({
        name: body.category.toLowerCase(),
      });

      const savedCategory = await newCategory.save();
      console.log(savedCategory);

      const newItemObject = {
        name: body.name,
        ...(body.note && { note: body.note }),
        ...(body.imageUrl && { imageUrl: body.imageUrl }),
        category: savedCategory.id,
      };

      const newItem = new Item(newItemObject);

      const savedItem = await newItem.save();
      console.log(savedItem);

      savedCategory.items = [...savedCategory.items, savedItem._id];

      await savedCategory.save();

      const populatedItem = await Item.findById(savedItem.id).populate(
        'category'
      );

      return res.status(201).json(populatedItem);
    } else {
      const newItemObject = {
        name: body.name.toLowerCase(),
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
  } else if (req.method === 'GET') {
    const items = await Item.find({});
    return res.status(200).json(items);
  }
}
