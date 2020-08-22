import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

// dotenv config
dotenv.config();

// express app
const app = express();

// port config
const PORT = process.env.PORT || 5000;

// database config
mongoose.connect(process.env.DBURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then((result) => app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)))
.catch((error) => console.log(error));

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Home Page'));

// routes middleware
app.use('/api/users', usersRoutes);
