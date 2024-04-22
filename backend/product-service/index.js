const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');
const app = express();
const port = 4002;


app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://suteerth:suteerth@cluster0.kfwzvm2.mongodb.net/e-commerce");

app.use('/api/products', productRoutes);

app.listen(port, () => {
    console.log(`Product Service running on port ${port}`);
});
