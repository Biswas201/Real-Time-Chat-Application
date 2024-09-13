import express from "express";
import { isAuthenticate } from "../middleware/verifyToken.js";
import { getMsg, sendMsg } from "../controllers/msgController.js";

const router = express.Router();

router.get("/:id", isAuthenticate, getMsg);
router.post("/send/:id", isAuthenticate, sendMsg);

export default router;
