import {Request, Response} from 'express';

class AuthController {

    public method = async(req:Request, res:Response):Promise<void> => {
        res.send('Hello world');
    };

}

export const authController = new AuthController;