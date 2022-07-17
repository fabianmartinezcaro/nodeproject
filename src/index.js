import express from "express";
import {dirname, join} from "path";
import {fileURLToPath} from "url";
import ejs from "ejs";

import indexRoutes from './routes/index.js';

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(indexRoutes);


app.listen(5500);
console.log('Server listening on port', 5500);