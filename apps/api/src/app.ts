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
import { PORT } from './config';
import { UserRouter } from './routers/user.router';
// import { SampleRouter } from './routers/sample.router';
import { ProductRouter } from './routers/product.router';
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

    // error
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
    const userRouter = new UserRouter();
    // const sampleRouter = new SampleRouter();
    const productRouter = new ProductRouter();
    const adminRouter = new AdminRouter();

    this.app.get('/api', (req: Request, res: Response) => {
      res.send(`Hello, Purwadhika Student API!`);
    });

    this.app.use('/v1', userRouter.getRouter());
    // this.app.use('/api/samples', sampleRouter.getRouter());
    this.app.use('/products', productRouter.getRouter());
    this.app.use('/admins', adminRouter.getRouter());
  }

  public start(): void {
    this.app.listen(PORT, () => {
      console.log(`  ➜  [API] Local:   http://localhost:${PORT}/`);
    });
  }
}
