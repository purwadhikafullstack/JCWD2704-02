import { Router } from 'express';
import { ProductController } from '@/controllers/product.controller';

export class ProductRouter {
  private router: Router;
  private productController: ProductController;

  constructor() {
    this.productController = new ProductController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.productController.getProduct);
    this.router.get('/:id', this.productController.getProductById);
    this.router.post('/', this.productController.createProduct);
    this.router.patch('/:id', this.productController.editProduct);
    this.router.delete('/:id', this.productController.deleteProduct);
  }

  getRouter(): Router {
    return this.router;
  }
}
