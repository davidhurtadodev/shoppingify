import mongoose from 'mongoose';

const ListSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3 },
  status: { type: String, required: true },
  date: { type: String, required: true },
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item',
    },
  ],
});

ListSchema.set('toObject', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.models.List || mongoose.model('Category', ListSchema);
