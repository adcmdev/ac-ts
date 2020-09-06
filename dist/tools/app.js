"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appData = void 0;
exports.appData = "import express, {Application} from 'express';\nimport userRoutes from './routes/user_routes';\n\nconst app:Application = express();\n\napp.set('port', 3000);\n\n// Middelwares\napp.use(express.json());\n\napp.use(express.urlencoded({extended: false}));\n\n// Routes\napp.use('/users', userRoutes);\n\nexport default app;";
//# sourceMappingURL=app.js.map