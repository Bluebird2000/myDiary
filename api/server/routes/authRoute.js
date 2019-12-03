import { Router } from 'express';
import AuthController from '../controllers/authController';
const router = Router();

router.get('/', AuthController.getAllRegisteredUser);

export default router;