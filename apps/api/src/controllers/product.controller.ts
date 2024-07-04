import { Request, Response, NextFunction } from 'express';

export class ProductController {
  async getProduct(req: Request, res: Response, next: NextFunction) {}

  async getProductById(req: Request, res: Response, next: NextFunction) {}

  async createProduct(req: Request, res: Response, next: NextFunction) {}

  async editProduct(req: Request, res: Response, next: NextFunction) {}

  async deleteProduct(req: Request, res: Response, next: NextFunction) {}
}
