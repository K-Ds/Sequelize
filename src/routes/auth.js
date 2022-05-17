import express from "express";
import * as authController from "../controllers/authController";

import credentialValidator from "../validators/credentialValidator";

const router = express.Router();

router.post("/login", credentialValidator, authController.login);
router.post("/signup", credentialValidator, authController.signUp);

export default router;
