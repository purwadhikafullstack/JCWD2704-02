import { Request } from 'express';
import prisma from '@/prisma';

class ProductService {
  async getAll() {
    const data = await prisma.product.findMany({
      select: {
        name: true,
        description: true,
        weight: true,
        price: true,
      },
    });
  }

  async render(req: Request) {}
}
