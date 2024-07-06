import { Request } from 'express';
import prisma from '@/prisma';
import sharp from 'sharp';
import { TProduct } from '@/models/product.model';
import { Prisma } from '@prisma/client';

class ProductService {
  static async getAll() {
    const data = await prisma.product.findMany({
      select: {
        id: true,
        name: true,
        price: true,
        ProductImage: {
          select: {
            id: true,
            image: true,
          },
        },
      },
    });
    return data;
  }

  static async getByName(req: Request) {
    const name = req.query.name;
    if (!name || typeof name !== 'string')
      throw new Error('Invalid search parameter');
    const data = await prisma.product.findMany({
      where: { name: { contains: name } },
      select: {
        id: true,
        name: true,
        price: true,
        ProductImage: { select: { id: true, image: true } },
      },
    });
    if (!data || data.length === 0) throw new Error('Product not found');
    return data;
  }

  static async getByPage(req: Request) {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 5;
    const skip = (page - 1) * limit;
    const productData = await prisma.product.findMany({
      skip: skip,
      take: limit,
      select: {
        id: true,
        name: true,
        price: true,
        ProductImage: { select: { id: true, image: true } },
      },
    });
    const total = await prisma.product.count();
    return {
      data: productData,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    };
  }

  static async create(req: Request) {
    const { name, description, weight, price } = req.body;
    const { file } = req;
    const existingProduct = await prisma.product.findFirst({ where: { name } });
    if (existingProduct) throw new Error('Product already exist');
    const buffer = await sharp(req.file?.buffer).png().toBuffer();
    const weightNumber = Number(weight);
    const priceNumber = Number(price);
    if (!file) throw new Error('no image uploaded');
    const data: Prisma.ProductCreateInput = {
      name,
      description,
      weight: weightNumber,
      price: priceNumber,
      ProductImage: {
        create: { image: buffer },
      },
    };
    const product = await prisma.product.create({
      data,
    });
    return product;
  }

  static async edit(req: Request) {
    const { id } = req.params;
    const { name, description, weight, price } = req.body;
    const { file } = req;
    const existingProduct = await prisma.product.findFirst({ where: { name } });
    if (existingProduct) throw new Error('Product already exist');
    const weightNumber = Number(weight);
    const priceNumber = Number(price);
    const data: Prisma.ProductUpdateInput = {};
    if (name) data.name = req.body.name;
    if (description) data.description = req.body.description;
    if (weight) data.weight = weightNumber;
    if (price) data.price = priceNumber;
    if (file) {
      const buffer = await sharp(req.file?.buffer).png().toBuffer();
      data.ProductImage = {
        create: { image: buffer },
      };
    }

    const editedProduct = await prisma.product.update({
      data,
      where: { id },
    });
    return editedProduct;
  }

  static async deleteProduct(req: Request) {}

  static async render(req: Request) {
    const data = await prisma.productImage.findUnique({
      where: { id: req.params.id },
    });
    return data?.image;
  }
}

export default ProductService;
