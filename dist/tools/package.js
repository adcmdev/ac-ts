"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.packageConfig = void 0;
const packageConfig = {
    "name": "project",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "dev": "concurrently \"tsc -w\" \"nodemon dist/index.js init -n myapp\"",
        "start": "node dist/index.js"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
        "express": "*",
        "mongoose": "*",
        "dotenv": "*",
        "jsonwebtoken": "*",
        "bcryptjs": "*",
    },
    "devDependencies": {
        "@types/express": "*",
        "@types/mongoose": "*",
        "@types/dotenv": "*",
        "@types/jsonwebtoken": "*",
        "@types/bcryptjs": "*",
        "concurrently": "*",
        "nodemon": "*",
        "typescript": "*"
    }
};
exports.packageConfig = packageConfig;
//# sourceMappingURL=package.js.map