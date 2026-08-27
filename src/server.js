import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';


const app = express();
// enviroment variables
dotenv.config({
  path: './.env',
});

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());




app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

