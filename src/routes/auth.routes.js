import express from "express";
import { register, login, refresh } from "../controllers/auth.controller.js";
import { validate } from "../middlewares/validation.middleware.js";
import { registerSchema } from "../utils/validators.js";

const router = express.Router();

router.post("/register", validate(registerSchema), register);
router.post("/login", login);
router.post("/refresh", refresh);

export default router;