import express, { Express, Request, Response } from "express";

import stringsController from "./controllers/string";

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/', stringsController);

app.listen(4000,() => {
    console.log(`[server]: Server is running at http://localhost:4000`);
});