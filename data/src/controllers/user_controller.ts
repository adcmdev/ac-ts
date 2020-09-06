import {Request, Response} from 'express';

class UserController {

    public method = async(req:Request, res:Response):Promise<void> => {
        res.send('Hello world');
    };

}

export const userController = new UserController;