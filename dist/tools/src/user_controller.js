"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userControllerData = void 0;
exports.userControllerData = "import {Request, Response} from 'express';\n\nclass UserController {\n\n    public method = async(req:Request, res:Response):Promise<void> => {\n        res.send('Hello world');\n    };\n\n}\n\nexport const userController = new UserController;";
//# sourceMappingURL=user_controller.js.map