"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseData = void 0;
exports.databaseData = "import mongoose from 'mongoose';\n\nmongoose.connect('mongodb://localhost/test', {\n    useUnifiedTopology: true,\n    useNewUrlParser: true,\n    useCreateIndex: true\n}, (err) => {\n    if(err) return err.message;\n    console.log('Database is online');\n});";
//# sourceMappingURL=database.js.map