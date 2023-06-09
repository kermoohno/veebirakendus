import express, { Express, Request, Response } from "express";
import cors from "cors";
import bodyParserer from "body-parser";
import stringsController from "./controllers/string";
import productsController from "./controllers/products";
import productlistController from "./controllers/productlist";
import parcelmachinesController from "./controllers/parcelmachines";
import nordpoolController from "./controllers/nordpool";
import paymentController from "./controllers/payment";
import payment from "./controllers/payment";

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
app.use('/', parcelmachinesController);
app.use('/', nordpoolController);
app.use('/', paymentController);

app.listen(4001,() => {
    console.log(`[server]: Server is running at http://localhost:4000`);
});