import express from "express"
import register from "../controllers/Authentication/auth_CAregister.js";
import login from "../controllers/Authentication/auth_CAlogin.js";
import logout from "../controllers/Authentication/auth_CAlogout.js";
import me from "../controllers/Authentication/auth_CAusername.js";
import posts from "../controllers/Photos{Post, Get}/photo_Cpost.js";
import gets from "../controllers/Photos{Post, Get}/photo_Cpostget.js";
import profileUp from "../controllers/Profile/profile_Cupdate.js";

const router = express();

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/logout").post(logout)
router.route("/me").get(me)
router.route("/posts").post(posts)
router.route("/gets").get(gets)
router.route("/profileUp").post(profileUp)


export default router;