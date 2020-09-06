import {Router} from 'express';
import {authController} from '../controllers/index_controller';

const router:Router = Router();

router.get('/', authController.method);

export default router;