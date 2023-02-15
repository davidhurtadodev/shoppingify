import mongoose from 'mongoose';

const CategorieSchema = new mongoose.Schema({
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item',
    },
  ],
});

CategorieSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports =
  mongoose.models.Category || mongoose.model('Category', CategorieSchema);
