export const socketModelData:string = 

"import ws from 'ws';\n\n" +

"export interface ISocketUser {\n" +
"    client: ws\n" +
"    userId: string\n" +
"    userName: string\n" +
"}\n\n" +

"class SocketUsers {\n\n" +

"    private users: ISocketUser[];\n\n" +

"    constructor() {\n" +
"        this.users = [];\n" +
"    }\n\n" +

"    public addUser = (user:ISocketUser):void => {\n" +
"        this.users.push(user);\n" +
"    };\n\n" +

"    public getUserById = (userId:String) => {\n\n" +
        
"        const user:ISocketUser = this.users.filter(user => {\n" +
"            return user.userId === userId;\n" +
"        })[0];\n\n" +

"        return user;\n" +
"    };\n\n" +

"    public getUsers = () => {\n" +
"        return this.users;\n" +
"    };\n\n" +

"    public deleteUser = (userId:String):void => {\n" +
"        this.users = this.users.filter(user => user.userId !== userId);\n" +
"    };\n\n" +

"}\n\n" +

"export const socketUsers:SocketUsers = new SocketUsers();\n"
