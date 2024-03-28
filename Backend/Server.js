// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');

// const app = express();
// app.use(express.json());
// app.use(cors());

// // MySQL connection
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'best_shop_'
// });

// db.connect((err) => {
//   if (err) throw err;
//   console.log('Connected to MySQL');
// });

// //category
// app.get('/categories', (req, res) => {
//     console.log('Fetching categories...');
//     const query = 'SELECT * FROM categories';
//     db.query(query, (err, results) => {
//         if (err) {
//             console.error('Error fetching categories:', err);
//             res.status(500).send('Error fetching categories');
//         } else {
//             console.log('Categories fetched successfully');
//             res.send(results);
//         }
//     });
// });

// app.post('/categories', (req, res) => {
//     const { name } = req.body;
//     const query = 'INSERT INTO categories (category) VALUES (?)';
//     db.query(query, [name], (err, result) => {
//        if (err) throw err;
//        res.send(result);
//     });
// });   

// //Brands
// app.get('/brands', (req, res) => {
//     console.log('Fetching brands...');
//     const query = 'SELECT * FROM brands';
//     db.query(query, (err, results) => {
//         if (err) {
//             console.error('Error fetching brands:', err);
//             res.status(500).send('Error fetching brands');
//         } else {
//             console.log('brands fetched successfully');
//             res.send(results);
//         }
//     });
// });

// app.post('/brands', (req, res) => {
//     const { name } = req.body;
//     const query = 'INSERT INTO brands (brand_name) VALUES (?)';
//     db.query(query, [name], (err, result) => {
//        if (err) throw err;
//        res.send(result);
//     });
// });
   


// //gender
// app.get('/genders', (req, res) => {
//     console.log('Fetching genders...');
//     const query = 'SELECT * FROM genders';
//     db.query(query, (err, results) => {
//         if (err) {
//             console.error('Error fetching genders:', err);
//             res.status(500).send('Error fetching genders');
//         } else {
//             console.log('genders fetched successfully');
//             res.send(results);
//         }
//     });
// });

// app.post('/genders', (req, res) => {
//     const { name } = req.body;
//     const query = 'INSERT INTO genders (gender) VALUES (?)';
//     db.query(query, [name], (err, result) => {
//        if (err) throw err;
//        res.send(result);
//     });
// });
   

// //Sub Categories
// app.get('/subcategories', (req, res) => {
//     console.log('Fetching subcategories...');
//     const query = `SELECT * FROM subcategories `;
//     db.query(query, (err, results) => {
//         if (err) {
//             console.error('Error fetching subcategories:', err);
//             res.status(500).send('Error fetching subcategories');
//         } else {
//             console.log('Subcategories fetched successfully');
//             res.send(results);
//         }
//     });
// });



// app.post('/subcategories', (req, res) => {
//     const { name, categoryId, genderId } = req.body;
//     const query = 'INSERT INTO subcategories (name, categoryId, genderId) VALUES (?, ?, ?)';
//     db.query(query, [name, categoryId, genderId], (err, result) => {
//         if (err) {
//             console.error('Error adding subcategory:', err);
//             res.status(500).send('Error adding subcategory');
//         } else {
//             console.log('Subcategory added successfully');
//             res.send(result);
//         }
//     });
// });

// // Fetch brands by subcategory
// app.get('/brands/:subCategoryName', (req, res) => {
//     const { subCategoryName } = req.params;
//     const query = `
//         SELECT DISTINCT brands.brand_name
//         FROM brands
//         JOIN product ON brands.brand_name = product.brandName
//         WHERE product.subCategoryName = ?
//     `;
//     db.query(query, [subCategoryName], (err, results) => {
//         if (err) {
//             console.error('Error fetching brands by subcategory:', err);
//             res.status(500).send('Error fetching brands by subcategory');
//         } else {
//             res.send(results);
//         }
//     });
// });


// //product
// app.get('/product', (req, res) => {
//     console.log('Fetching products...');
//     const { subCategoryName } = req.query; 
//     const { brandName } = req.query;
//     let params = [];
    
//     let query = 'SELECT * FROM product';
//     if (subCategoryName) {
//         query += ' WHERE subCategoryName = ?';
//         console.log(req.query);
//         console.log('Subcategory Fetched...');
//         params = [subCategoryName];
//     } 
//     if(brandName){
//         query += ' WHERE brandName = ?';
//         console.log(req.query);
//         console.log('Brandname Fetched...');
//         params = [brandName];
        
//     }
    
//     db.query(query, params, (err, results) => {
//         if (err) {
//             console.error('Error fetching products:', err);
//             res.status(500).send('Error fetching products');
//         } else {
//             console.log('Products fetched successfully');
//             console.log(results);
//             res.send(results); 
//         }
//     });
// });


// app.post('/product', (req, res) => {
//     const { productName, description, categoryName, subCategoryName, genderName, brandName } = req.body;

//     const query = 'INSERT INTO product (productName, description, categoryName, subCategoryName, genderName, brandName) VALUES (?, ?, ?, ?, ?, ?)';

//     db.query(query, [productName, description, categoryName, subCategoryName, genderName, brandName], (err, result) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send({ error: 'An error occurred while inserting the product.' });
//         } else {
//             res.send(result);
//         }
//     });
// });


// // // fetch products
// // app.get('/products', (req, res) => {
// //     const query = 'SELECT * FROM products';
// //     db.query(query, (err, results) => {
// //        if (err) throw err;
// //        res.send(results);
// //     });
// //    });

// // //form
// // app.post('/products', (req, res) => {
// //     const { name, price, category, subCategory, brand } = req.body;
// //     const query = 'INSERT INTO products (name, price, category, subCategory, brand) VALUES (?, ?, ?, ?, ?)';
// //     db.query(query, [name, price, category, subCategory, brand], (err, result) => {
// //        if (err) throw err;
// //        res.send(result);
// //     });
// //    });
   

// // Add more routes for adding, updating, and deleting products

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));