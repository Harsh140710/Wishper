import { Router } from "express";
import { protectRoute } from "../middleware/auth";
import { authCallback, getMe } from "../controllers/auth.controller";

const router = Router();

// route looks like "/api/auth/me"
router.get("/me", protectRoute, getMe);
router.post("/callback", authCallback);

export default router;
