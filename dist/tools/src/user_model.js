"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModelData = void 0;
exports.userModelData = "import {Schema, model, Document} from 'mongoose';\n" +
    "import bcrypt from 'bcryptjs';\n\n" +
    "export interface IUser extends Document {\n" +
    "    firstName: string;\n" +
    "    lastName: string;\n" +
    "    email: string;\n" +
    "    password: string;\n" +
    "    encryptPassword(password:string): Promise<string>;\n" +
    "    validatePassword(password:string): Promise<string>;\n" +
    "};\n\n" +
    "const userSchema = new Schema({\n" +
    "    firstName: {\n" +
    "        type: String,\n" +
    "        required: true,\n" +
    "        min: 2,\n" +
    "    },\n" +
    "    lastName: {\n" +
    "        type: String,\n" +
    "        required: true,\n" +
    "        min: 2,\n" +
    "    },\n" +
    "    email: {\n" +
    "        type: String,\n" +
    "        required: true,\n" +
    "        unique: true,\n" +
    "    },\n" +
    "    password: {\n" +
    "        type: String,\n" +
    "        required: true\n" +
    "    },\n" +
    "}, {\n" +
    "    toJSON: {\n" +
    "        transform: (dot, ret) => {\n" +
    "            ret.id = dot._id;\n" +
    "            delete ret._id;\n" +
    "            delete ret.password;\n" +
    "            delete ret.__v;\n" +
    "        }\n" +
    "    },\n" +
    "    toObject: {\n" +
    "        transform: (dot, ret) => {\n" +
    "            ret.id = dot._id;\n" +
    "            delete ret._id;\n" +
    "            delete ret.password;\n" +
    "            delete ret.__v;\n" +
    "        }\n" +
    "    }\n" +
    "});\n\n" +
    "userSchema.methods.encryptPassword = async(password:string):Promise<string> => {\n" +
    "    const salt:string = await bcrypt.genSalt(10);\n" +
    "    return bcrypt.hashSync(password, salt);\n" +
    "};\n\n" +
    "userSchema.methods.validatePassword = async function (password:string):Promise<boolean> {\n" +
    "    return await bcrypt.compare(password, this.password);\n" +
    "};\n\n" +
    "export default model<IUser>('User', userSchema);\n";
//# sourceMappingURL=user_model.js.map