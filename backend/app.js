const express = require('express');
const cors = require('cors');
const path = require('path');

// Initialize an Express application
const app = express();

// Middleware to parse JSON bodies with a limit of 100MB
app.use(express.json({ limit: '100mb' }));

// Middleware to enable CORS
app.use(cors());

// Import route handlers
const categoryRoutes = require('./routes/categoryRoutes');
const brandsRoutes = require('./routes/brandsRoutes');
const gendersRoutes = require('./routes/gendersRoutes');
const subcategoriesRoutes = require('./routes/subcategoriesRoutes');
const productsRoutes = require('./routes/productsRoutes');
const offerProductRoutes = require('./routes/offerProductRoutes');

// Configure routes
app.use('/category', categoryRoutes);
app.use('/brands', brandsRoutes);
app.use('/genders', gendersRoutes);
app.use('/subcategories', subcategoriesRoutes);
app.use('/products', productsRoutes);
app.use('/offer-products', offerProductRoutes);
app.use('/uploads', express.static('uploads'));


// Server setup
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
