export const userRoutesData:string =

"import {Router} from 'express';\n" +
"import {userController} from './user_controller';\n\n" +

"const router:Router = Router();\n\n" +

"router.get('/', userController.method);\n\n" +

"export default router;\n";