import * as mongoose from 'mongoose';
const mongoosedb = require('mongoose');

const uri: string =
  'mongodb+srv://leon123:leon123@cluster0-sxvew.mongodb.net/books?retryWrites=true&w=majority';

mongoosedb
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('Successfully Connected to MongoDB'))
  .catch(() => console.log('Cannot connect to MongoDB'));

export interface IBook extends mongoose.Document {
  title: string;
  author: number;
}

export const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
});

const Book = mongoose.model<IBook>('Book', BookSchema);
export default Book;
