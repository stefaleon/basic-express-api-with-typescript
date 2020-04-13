## Typescript REST API And MongoDB Beginners Tutorial(https://tutorialedge.net/typescript/typescript-mongodb-beginners-tutorial/)

## 01

```
tsc --init
```

_tsconfig.json_

```
{
  "compilerOptions": {
    /* Basic Options */
    "target": "es5",
    "module": "commonjs",
    "outDir": "./dist",
    /* Strict Type-Checking Options */
    "strict": true,
    "esModuleInterop": true,
    /* Source Map Options */
    "sourceRoot": "./src",
    "inlineSourceMap": true
  }
}
```

## 02

```
npm i express @types/express
```

```
npm i -D concurrently nodemon
```

## 03 simple express based server

_app.ts_

```
import express, { Request, Response } from 'express';

// Our Express APP config
const app = express();
app.use(express.json());
app.set('port', process.env.PORT || 3000);

// API Endpoints
app.get('/', (req: Request, res: Response) => res.send('hi'));

const server = app.listen(app.get('port'), () => {
  console.log('App is running on http://localhost:%d', app.get('port'));
});
```
