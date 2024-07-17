import express, {
  json,
  urlencoded,
  Express,
  Request,
  Response,
  NextFunction,
  Router,
} from 'express';
import cors from 'cors';
import { CartRouter } from './routers/cart.router';
import { OrderRouter } from './routers/order.router';
import { PORT } from './config';
import { UserRouter } from './routers/user.router';
import { ProductRouter } from './routers/product.router';
import { CategoryRouter } from './routers/category.router';
import { AdminRouter } from './routers/admin.router';
import { corsOptions } from './config/index';

export default class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.configure();
    this.routes();
    this.handleError();
  }

  private configure(): void {
    this.app.use(cors(corsOptions));
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
  }

  private handleError(): void {
    // not found
    this.app.use(
      (error: unknown, req: Request, res: Response, next: NextFunction) => {
        if (req.path.includes('/api/')) {
          res.status(404).send('Not found !');
        } else {
          next();
        }
      },
    );

    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        if (req.path.includes('/v1')) {
          console.error('Error : ', err.stack);
          res.status(500).send('Error !');
        } else {
          next();
        }
      },
    );
  }

  private routes(): void {
    const cartRouter = new CartRouter();
    const orderRouter = new OrderRouter();
    const userRouter = new UserRouter();
    const productRouter = new ProductRouter();
    const adminRouter = new AdminRouter();
    const categoryRouter = new CategoryRouter();

    this.app.get('/api', (req: Request, res: Response) => {
      res.send(`Hello, Purwadhika Student API!`);
    });

    this.app.use('/cart', cartRouter.getRouter());
    this.app.use('/order', orderRouter.getRouter());
    this.app.use('/v1', userRouter.getRouter());
    this.app.use('/products', productRouter.getRouter());
    this.app.use('/admins', adminRouter.getRouter());
    this.app.use('/category', categoryRouter.getRouter());
  }

  public start(): void {
    this.app.listen(PORT, () => {
      console.log(`  ➜  [API] Local:   http://localhost:${PORT}/`);
    });
  }
}
