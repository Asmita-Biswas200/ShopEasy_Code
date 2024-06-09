import express from 'express';
import mongoose from 'mongoose';
import productRoutes from './routes/product.route.js';
import authRoutes from './routes/authRoutes.js';
import {authenticateJwt} from './middlewares/auth.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

//middleware

app.use(express.json());
app.use(express.urlencoded({extended : true}));

//routes
app.use('/api/auth', authRoutes);
app.use('/api/products', authenticateJwt, productRoutes);

const port = process.env.APP_PORT;

app.get('/', (req, res) => {
  res.send(`Hello From Shop Easy App`);
});



mongoose
  .connect(
    // process.env.MONGO_URL
    `mongodb+srv://asmitabiswas200:SewkbllFEC1DYQLy@crud-api.z9xeuyz.mongodb.net/crud-api`
  )
  .then(() => {
    console.log('Connected To Database');
    app.listen(port, () => {
      console.log(`App is running on server ${port}`);
    });
  })
  .catch((err) => {
    console.log('Err occured while connectiong to DB :::::', err);
  });
