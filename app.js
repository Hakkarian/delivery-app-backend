const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const cors = require('cors');
const shopsRouter = require('./routes/shops');
const productsRouter = require('./routes/products')
const ordersRouter = require("./routes/orders");
const port = process.env.PORT;
const mongoUrl = process.env.MONGO_URL;

app.use(cors());
app.use(express.json());
app.use('/api/shops', shopsRouter);
app.use('/api/products', productsRouter);
app.use("/api/orders", ordersRouter);

app.use((req, res) => {
  res.json('Hello world')
})

app.use((err, req, res, next) => {
  const { status, message } = err;
  res.status(status || 500).json({message})
})

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB')).catch((error) => console.log('Error connecting to MongoDB: ' + error))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
