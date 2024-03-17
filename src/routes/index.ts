import express from 'express'
import UserController from '../controllers/UserController';
import verifyUser from '../middlewares/verifyUser';

const router = express.Router();

//Users
router.post("/sign-up", UserController.add);
router.post("/sign-in", UserController.login);
router.post("/sign-in/google", UserController.googleLogin);
router.patch("/change-pass", UserController.changePassword);
router.post("/verify-user", verifyUser, UserController.verifyUser);
router.patch("/convert/account/email", UserController.convertIntoNormalAccount);
router.patch("/convert/account/google", UserController.convertIntoGoogleAccount);
router.patch("/settings/change-theme/:id", verifyUser, UserController.changeAppTheme);

export default router;