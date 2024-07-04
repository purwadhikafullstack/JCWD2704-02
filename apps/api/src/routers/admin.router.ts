import { Router } from 'express';
import { AdminController } from '@/controllers/admin.controllers';

export class AdminRouter {
  private router: Router;
  private adminController: AdminController;

  constructor() {
    this.adminController = new AdminController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.adminController.getAdmin);
    this.router.post('/', this.adminController.createStoreAdmin);
    this.router.patch('/:id', this.adminController.editStoreAdmin);
    this.router.delete('/:id', this.adminController.deleteStoreAdmin);
  }

  getRouter(): Router {
    return this.router;
  }
}
