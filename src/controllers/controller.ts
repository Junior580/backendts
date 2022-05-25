import { Request, Response } from "express";
import path from "path";
exports.home = (req: Request, res: Response) => {
    return res
        .status(200)
        .sendFile(path.join(__dirname, ".../view/index.html"));
};

exports.sobre = (req: Request, res: Response) => {
    return res.status(200).send("about");
};

exports.cadastro = (req: Request, res: Response) => {
    return res.status(200).send("about");
};
