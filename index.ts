import express, { Express, Request, Response } from "express";

import stringsController from "./controllers/string";
import productsController from "./controllers/products";

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/', stringsController);
app.use('/', productsController);

app.listen(4000,() => {
    console.log(`[server]: Server is running at http://localhost:4000`);
});