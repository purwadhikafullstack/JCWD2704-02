'use strict';
import { NextFunction, Request, Response } from 'express';
import AdminService from '@/services/admin.service';

export class AdminController {
  async getAdmin(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await AdminService.getAdmin();
      res.status(200).send({
        message: 'All Admin Store',
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await AdminService.getById(req);
      res.status(200).send({
        message: 'Admin Store by their ID',
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  async getByName(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await AdminService.getByName(req);
      res.status(200).send({
        message: 'Admin Store by filter name',
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  async getByPages(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await AdminService.getByPage(req);
      res.status(200).send({
        message: 'Admin Store Pagination',
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  async createStoreAdmin(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await AdminService.create(req);
      res.status(201).send({
        message: 'Admin Store has been created',
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  async editStoreAdmin(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await AdminService.update(req);
      res.status(201).send({
        message: 'Admin Store has been edited',
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteStoreAdmin(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await AdminService.deleteUser(req);
      res.status(201).send({
        message: 'Admin Store has been deleted',
      });
    } catch (error) {
      next(error);
    }
  }
}
