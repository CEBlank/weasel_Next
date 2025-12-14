import { Schema, model, models, Document } from 'mongoose';

interface IProduct extends Document {
  title: string;
  category: string;
  stock: number;
  price: number;
  publisher: string;
  type: string;
  brand: string;
  group: string;
  image: string;
}

const ProductSchema = new Schema<IProduct>(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {}
);

const Product = models.Product || model<IProduct>('Products', ProductSchema);

export default Product;