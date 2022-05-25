import { Router } from "express";
const usersRouter = Router();
const homeController = require("../controllers/controller");

//home
usersRouter.get("/", homeController.home);
usersRouter.post("/", homeController.cadastro);

//sobre
usersRouter.get("/sobre", homeController.sobre);

//contato

export default usersRouter;
