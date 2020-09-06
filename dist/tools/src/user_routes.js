"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutesData = void 0;
exports.userRoutesData = "import {Router} from 'express';\nimport {userController} from '../controllers/user_controller';\n\nconst router:Router = Router();\n\nrouter.get('/', userController.method);\n\nexport default router;";
//# sourceMappingURL=user_routes.js.map