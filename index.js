import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoute from './routes/SiswaRoute.js';
import guruRoute from './routes/GuruRoute.js';
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(userRoute);
app.use(guruRoute);

app.listen(port, () => console.log(`Server Runnning At Port ${port}`));
