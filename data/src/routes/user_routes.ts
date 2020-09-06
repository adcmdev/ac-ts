import {Router} from 'express';
import {userController} from '../controllers/user_controller';

const router:Router = Router();

router.get('/', userController.method);

export default router;