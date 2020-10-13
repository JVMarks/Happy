import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);

app.listen(3567);

//linhas de codigo
/*
yarn dev

INSTALACÃO

yarn init -y
yarn add express
yarn add @types/express -D
yarn add typescript -D
yarn tsc --init
yarn add ts-node-dev -D
yarn add typeorm sqlite3
yarn add multer
yarn add @types/multer -D
yarn add express-async-errors
yarn add yup
yarn add @types/yup -D
yarn add cors
yarn add @types/cors
DATABASE

yarn typeorm

CRAIAR TABELAS
yarn typeorm migration:create -n create_orphanages

STARTAR TABELAS
yarn typeorm migration:run

DELETAR A TABELA
yarn typeorm migration:revert
*/