import { Router } from "express";
import { protectRoute } from "../middleware/auth";
import { getUsers } from "../controllers/user.controller";

const router = Router();

// prefix with "/api/user"
router.get("/",  protectRoute, getUsers)

export default router