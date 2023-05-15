import express, { Express, Request, Response } from "express";
import cors from "cors";
import stringsController from "./controllers/string";
import productsController from "./controllers/products";
import productlistController from "./controllers/productlist";

const app: Express = express();

app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send('Express + Typescript Server');
});

app.use('/', stringsController);
app.use('/', productsController);
app.use('/', productlistController);

app.listen(4000,() => {
    console.log(`[server]: Server is running at http://localhost:4000`);
});