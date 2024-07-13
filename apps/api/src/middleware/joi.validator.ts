import { signUpSchema } from '@/lib/joi';
import { TUser } from '@/models/user.model';
import { NextFunction, Request, Response } from 'express';

declare module 'express-serve-static-core' {
  interface Request {
    user?: TUser;
  }
}

export async function signUpValidator(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    req.user = await signUpSchema.validateAsync(req.body);
  } catch (error) {
    next(error);
  }
}
