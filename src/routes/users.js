import express from "express";

import auth from "../middleware/authentification";
import userInfoValidator from "../validators/userInfoValidator";
import * as usersControllers from "../controllers/usersController";

const routes = express.Router();

routes.get("/", auth, usersControllers.getUserInfo);

routes.post("/", [auth, userInfoValidator], usersControllers.createUserInfo);

routes.put("/", [auth, userInfoValidator], usersControllers.updateUserInfo);

export default routes;
