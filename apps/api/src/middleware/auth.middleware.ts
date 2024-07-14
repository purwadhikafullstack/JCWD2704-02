import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { SECRET_KEY } from '../config/config';
import { TUser } from '../models/user.model';

declare module 'express-serve-static-core' {
  interface Request {
    userData?: TUser;
  }
}

export const verifyUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '') || '';

    req.userData = verify(token, SECRET_KEY) as TUser;

    next();
  } catch (error) {
    next(error);
  }
};
