import { NextFunction, Request, Response } from 'express';
import cartService from '@/services/cart.service';

export class CartController {
  async getByUser(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await cartService.getByUser(req);
      return res.send({
        message: 'your cart',
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  async sumCart(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await cartService.sumCart(req);
      return res.send({
        message: 'your cart total',
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  async addCart(req: Request, res: Response, next: NextFunction) {
    try {
      await cartService.addCart(req);
      res.status(201).send({
        message: 'new cart added',
      });
    } catch (error) {
      next(error);
    }
  }

  async updateCart(req: Request, res: Response, next: NextFunction) {
    try {
      await cartService.updateCart(req);
      return res.send({
        message: 'cart has been updated',
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteCart(req: Request, res: Response, next: NextFunction) {
    try {
      await cartService.delete(req);
      return res.send({
        message: 'cart has been deleted',
      });
    } catch (error) {
      next(error);
    }
  }
}
