"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.packageConfig = void 0;
exports.packageConfig = (name, ws) => {
    let data = {
        "name": name,
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
            "dev": "concurrently \"tsc -w\" \"nodemon dist/index.js\"",
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
    if (ws) {
        data.dependencies.ws = "*";
        data.devDependencies['@types/ws'] = "*";
    }
    return data;
};
//# sourceMappingURL=package.js.map