"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseData = "import mongoose from 'mongoose';" +
    "\n\n" +
    "mongoose.connect(process.env.MONGO_URI + '', {\n" +
    "    useUnifiedTopology: true,\n" +
    "    useNewUrlParser: true,\n" +
    "    useCreateIndex: true\n" +
    "}, (err) => {\n" +
    "    if(err) return console.log(err.message);\n" +
    "    console.log('Database is online');\n" +
    "});\n";
//# sourceMappingURL=database.js.map