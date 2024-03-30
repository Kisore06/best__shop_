// controllers/productsController.js
const db = require('../config/database');

exports.getProducts = (req, res) => {
    console.log('Fetching products...');
    const { subCategoryName, brandName } = req.query;
    let params = [];
    let query = 'SELECT * FROM product';
    if (subCategoryName) {
        query += ' WHERE subCategoryName = ?';
        params = [subCategoryName];
    } 
    if(brandName){
        query += ' AND brandName = ?';
        params.push(brandName);
    }
    db.query(query, params, (err, results) => {
        if (err) {
            console.error('Error fetching products:', err);
            res.status(500).send('Error fetching products');
        } else {
            console.log('Products fetched successfully');
            res.send(results);
        }
    });
};

exports.addProduct = (req, res) => {
    const { productName, description, categoryName, subCategoryName, genderName, brandName } = req.body;
    const query = 'INSERT INTO product (productName, description, categoryName, subCategoryName, genderName, brandName) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [productName, description, categoryName, subCategoryName, genderName, brandName], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send({ error: 'An error occurred while inserting the product.' });
        } else {
            res.send(result);
        }
    });
};
