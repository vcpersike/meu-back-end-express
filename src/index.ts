import cors, { CorsOptions } from 'cors';
import express from 'express';
import routes from './routes/routes';

const whitelist = ['http://seu-frontend.com'];
const app = express();

// Configurações do app e middlewares

app.use(express.json());
app.use('/api', routes);

const corsOptions: CorsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin!) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};

export default cors(corsOptions);
