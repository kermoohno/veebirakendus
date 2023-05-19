import express, { Express, Request, Response } from "express";
import cors from "cors";
import bodyPareser from "body-parser";
import stringsController from "./controllers/string";
import productsController from "./controllers/products";
import productlistController from "./controllers/productlist";

const app: Express = express();

app.use(cors({
    origin: ['http://localhost:3020']
}));

app.get('/', (req: Request, res: Response) => {
    res.send('Express + Typescript Server');
});

app.use('/', stringsController);
app.use('/', productsController);
app.use('/', productlistController);

app.listen(4000,() => {
    console.log(`[server]: Server is running at http://localhost:4000`);
});