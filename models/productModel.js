import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
    },
    description: {
      type: String,
      required: [true, 'Product description is required'],
    },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
    },
    imagePath: [{
      type: String,
      required: [true, 'Image path is required'],
    }],
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: [true, 'Category is required'],
    },

    // for any not common attributes
    attributes:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Description',
      required: [true, 'Description is required'],
    },


  },{timestamps: true,}
);

const Product = mongoose.model('Product', productSchema);

export default Product;
