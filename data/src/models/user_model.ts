import {Schema, model, Document} from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
    firstName: string;
    lastName: string;    
    email: string;
    password: string;
    encryptPassword(password:string): Promise<string>;
    validatePassword(password:string): Promise<string>;
};

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        min: 2,
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
}, {
    toJSON: {
        transform: (dot, ret) => {
            ret.id = dot._id;
            delete ret._id;
            delete ret.password;
            delete ret.__v;
        }
    },
    toObject: {
        transform: (dot, ret) => {
            ret.id = dot._id;
            delete ret._id;
            delete ret.password;
            delete ret.__v;
        }
    }
});

userSchema.methods.encryptPassword = async(password:string):Promise<string> => {
    const salt:string = await bcrypt.genSalt(10);
    return bcrypt.hashSync(password, salt);
};

userSchema.methods.validatePassword = async function (password:string):Promise<boolean> {
    return await bcrypt.compare(password, this.password);
};

export default model<IUser>('User', userSchema);