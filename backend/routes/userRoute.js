import express from "express"
import { Login, Logout, Register } from "../controllers/userController.js";

//express ko use karenge routes ke andar
const router = express.Router();

router.route("/register").post(Register); // post use karte hain data send karne ke liye
router.route("/login").post(Login);  // usercontroller me login ka pura function bna diya
router.route("/logout").get(Logout);

export default router;