import { Router } from 'express';
import { ProductController } from '@/controllers/product.controller';
import { blobUploader } from '@/lib/multer';

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
    // this.router.get('/:id', this.productController.getProductById);
    this.router.get('/names', this.productController.getByName);
    this.router.get('/pages', this.productController.getByPage);
    this.router.post(
      '/',
      blobUploader().single('image'),
      this.productController.createProduct,
    );
    this.router.patch(
      '/:id',
      blobUploader().single('image'),
      this.productController.editProduct,
    );
    this.router.delete('/:id', this.productController.deleteProduct);
    this.router.get('/images/:id', this.productController.render);
  }

  getRouter(): Router {
    return this.router;
  }
}
