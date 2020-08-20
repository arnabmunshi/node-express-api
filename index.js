import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

// express app
const app = express();

// dotenv config
dotenv.config();

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Home Page'));

app.use('/users', usersRoutes);

// port config
const PORT = process.env.PORT || 5000;

// listen for connections
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
