import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UserRoute from './routes/UserRoute.js';

const app = express();
const port = 5000;

mongoose
  .connect('mongodb://localhost:27017/merncrud_db')
  .then(() => console.log('Terhubung ke MongoDB'))
  .catch((error) => console.error('Gagal terhubung ke MongoDB:', error));

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Database Connected...'));

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(port, () => console.log(`Server up and running in ${port}...`));
