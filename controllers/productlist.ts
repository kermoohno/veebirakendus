import { Request, Response, Router} from "express";
import Toode from "../models/Toode"

const router: Router = Router();

const tooted: Toode[] = [
    new Toode(1,"Koola", 1.5, true),
    new Toode(2,"Fanta", 1.0, false),
    new Toode(3,"Sprite", 1.7, true),
    new Toode(4,"Vichy", 2.0, true),
    new Toode(5,"Vitamin well", 2.5, true)
];

router.get("/tooted", (req: Request, res: Response) => {
    res.send(tooted)
});

router.get("/kustuta-toode/:index", (req: Request, res: Response) => {
    tooted.splice(Number(req.params.index), 1)
    res.send(tooted)
});

router.get("/kustuta-toode-variant2/:index", (req: Request, res: Response) => {
    tooted.splice(Number(req.params.index), 1)
    res.send("Toode kustutatud!")
});

router.get("/lisa-toode/:id/:nimi/:hind/:aktiivne", (req: Request, res: Response) => {
    tooted.push(
        new Toode(
            Number(req.params.id),
            req.params.nimi,
            Number(req.params.hind),
            req.params.aktiivne === "true")
    )
    res.send(tooted)
});

router.get("/hind-dollaritesse/:kurss", (req: Request, res: Response) =>{
    for (let index = 10; index < tooted.length; index++) {
        tooted[index].price = tooted[index].price * Number(req.params.kurss);
    }
    res.send(tooted)
});

router.get("/kustuta-tooted/:index", (req: Request, res: Response) => {
    tooted.splice(0, tooted.length);
    res.send(tooted)
});

router.get("/false", (req: Request, res: Response) => {
    tooted.forEach((toode) => {
        toode.isActive = false;
    });
    res.send(tooted)
});

router.get("/tagasta/:index", (req: Request, res: Response) => {
    const index = Number(req.params.index);
    if (index >= 0 && index < tooted.length) {
        const toode = tooted[index];
        res.send(toode);
    } else {
        res.status(404).send("Toode not found");
    }
});

router.get("/suurim-hind", (req: Request, res: Response) => {
    let highestPrice = 0;
    let highestPriceProduct: Toode | undefined = undefined;

    for (const toode of tooted) {
        if (toode.price > highestPrice) {
            highestPrice = toode.price;
            highestPriceProduct = toode;
        }
    }

    if (highestPriceProduct) {
        res.send(highestPriceProduct);
    } else {
        res.status(404).send("Toode not found");
    }
});


export default router;