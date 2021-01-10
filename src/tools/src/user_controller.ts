export const userControllerData: string =

"import {Request, Response} from 'express';\n\n" +

"class UserController {\n\n"+

"    public method = async(req:Request, res:Response):Promise<void> => {\n" +
"        res.send('Hello world');\n" +
"    };\n\n" +

"}\n\n" +

"export const userController = new UserController;\n";
