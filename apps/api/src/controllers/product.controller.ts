import ProductService from '@/services/product.service';
import { Request, Response, NextFunction } from 'express';

export class ProductController {
  async getProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await ProductService.getAll();
      res.status(200).send({
        message: 'All Product',
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  // async getProductById(req: Request, res: Response, next: NextFunction) {}

  async getByName(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await ProductService.getByName(req);
      res.status(200).send({
        message: 'Get Product by name',
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  async getByPage(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await ProductService.getByPage(req);
      res.status(200).send({
        message: 'Get Product by pages',
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  async createProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await ProductService.create(req);
      res.status(201).send({
        message: 'Product create success',
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  async editProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await ProductService.edit(req);
      res.status(201).send({
        message: 'Product edit success',
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteProduct(req: Request, res: Response, next: NextFunction) {}

  async render(req: Request, res: Response, next: NextFunction) {
    try {
      const blob = await ProductService.render(req);
      res.set('Content-type', 'image/png');
      res.send(blob);
    } catch (error) {
      next(error);
    }
  }
}
