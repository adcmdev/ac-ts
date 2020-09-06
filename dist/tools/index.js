"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexData = void 0;
exports.indexData = "import dotenv from 'dotenv'; \ndotenv.config();\n\nimport app from './app';\nimport './database'; \n\nconst main = ():void => {\n    app.listen(app.get('port'));\n    console.log(`Server on port ${app.get('port')}`);\n} \n\nmain();";
//# sourceMappingURL=index.js.map