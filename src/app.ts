import express from 'express';
import * as bodyParser from 'express';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(routes);

export default app;
