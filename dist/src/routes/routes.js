"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersRouter = (0, express_1.Router)();
const homeController = require("../controllers/controller");
//home
usersRouter.get("/", homeController.home);
usersRouter.post("/", homeController.cadastro);
//sobre
usersRouter.get("/sobre", homeController.sobre);
//contato
exports.default = usersRouter;
