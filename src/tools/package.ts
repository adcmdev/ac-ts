interface IPackageJson {
    name: string
    version: string
    description: string
    main: string
    scripts: object
    keywords: any[]
    author: string
    license: string
    dependencies: any
    devDependencies: any
}

export const packageConfig = (name:string , ws:boolean) => {

    let data: IPackageJson = {
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

    if(ws) {
        data.dependencies.ws = "*";
        data.devDependencies['@types/ws'] = "*"
    }

    return data;
}
