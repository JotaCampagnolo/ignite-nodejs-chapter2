import { Router } from "express";

import { AuthentitcateUserController } from "../modules/accounts/useCases/authenticateUser/AuthenticateUserController";

const authenticateRoutes = Router();

const authentitcateUserController = new AuthentitcateUserController();

authenticateRoutes.post("/sessions", authentitcateUserController.handle);

export { authenticateRoutes };
