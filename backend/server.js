import express from "express";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import {errorHandler, routeNotFound} from './middleware/errorMid.js';
import conn from './database/databaseConn.js';
import userRoutes from './routes/userRoutes.js';
dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/imageEditor', userRoutes);

app.use(errorHandler);
app.use(routeNotFound);

app.use(cookieParser());
conn();
app.get('/', (req, res) => res.send('Server is ready'))
app.listen(port, () => console.log(`Server started on port: ${port}`));