import { Request, Response, Router } from "express";
import {generateKeyPair} from "crypto";

const router: Router = Router();

router.get('/hello', (req: Request, res: Response) => {
    res.send('hello new controller file');
});

router.get("/hello-world", (req: Request, res: Response) => {
    res.send("Hello world at " + new Date())
});

router.get("/add/:nr1/:nr2", (req: Request, res: Response) => {
    res.send(req.params.nr1 + req.params.nr2)
    const nr1 = Number(req.params.nr1);
    const nr2 = Number(req.params.nr2);
    res.send((nr1 + nr2).toString());
});

router.get("/multiply/:nr1/:nr2", (req: Request, res: Response) => {
    const nr1 = Number(req.params.nr1);
    const nr2 = Number(req.params.nr2);
    res.send((nr1 * nr2).toString());
});

router.get("/do-logs/:arv", (req: Request, res: Response) => {
    for (let index = 0; index < Number(req.params.arv); index++) {
        console.log("See on logi nr " + index);
    }
    res.send();
});

router.get("/generator", (req: Request, res: Response) => {
    const min = 1;
    const max = 100;

    const RandomNumber = Math.round(Math.random() * (max-min) + min);
    res.send("Juhuslik number on " + RandomNumber);
});

router.get("/birthday", (req: Request, res: Response) => {
    const birthDate: Date = new Date(2003, 4, 5);
    const currentDate: Date = new Date();

    let age: number = currentDate.getFullYear() - birthDate.getFullYear();

    // Check if the birthday hasn't occurred yet in the current year
    if (
        currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() &&
            currentDate.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    console.log(age);

    res.send("Your age is " + age.toString());
});

export default router;
