
import { ProductModel } from "@src/models/product";
import { Request, Response } from 'express';
const productModel = ProductModel


export const searchProducts = async (req: Request, res: Response) => {
  const { query } = req.query;

  try {
    const products = await ProductModel.find({
      $or: [
        { name: { $regex: query, $options: 'i' } }, // Case-insensitive search for product name
        { description: { $regex: query, $options: 'i' } }, // Case-insensitive search for product description
      ],
    });

    res.status(200).json(products);
  } catch (err) {
    console.error('Error while searching products:', err);
    res.status(500).json({ error: 'Something went wrong.' });
  }
};

export async function getAll(req: any, res: any) {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const skip = (page - 1) * limit;

  try {
    const data = await productModel.find().skip(skip).limit(limit).exec();
    const totalProducts = await ProductModel.countDocuments().exec();
    return {
      data, currentPage: page,
      totalPages: Math.ceil(totalProducts / limit),
      totalProducts,
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

export async function getByID(req: any, res: any) {
  const id = req.params.id
  try {
    const data = await productModel.findById(id);
    return data
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

export async function createData(req: any, res: any) {
  const id = req.params.id
  try {
    const data = await productModel.findById(id);
    return data
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

export async function deleteById(req: any, res: any, next: any) {
  const id = req.params.id
  try {
    const data = await productModel.findById(id);
    return data
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

export async function updateById(req: any, res: any) {
  const id = req.params.id
  try {
    const data = await productModel.findById(id);
    return data
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}



