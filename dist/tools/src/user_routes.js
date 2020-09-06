"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexRoutesData = void 0;
exports.indexRoutesData = "import {Router} from 'express';\nimport {authController} from '../controllers/index_controller';\n\nconst router:Router = Router();\n\nrouter.get('/', authController.method);\n\nexport default router;";
//# sourceMappingURL=user_routes.js.map