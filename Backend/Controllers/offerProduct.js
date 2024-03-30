const db = require('../config/database');

// Function to fetch all offer products
exports.getOfferProducts = (req, res) => {
    console.log('Fetching offer products...');
    const query = 'SELECT * FROM offerproducts';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching offer products:', err);
            res.status(500).send('Error fetching offer products');
        } else {
            console.log('Offer products fetched successfully');
            res.send(results);
        }
    });
};

// Function to add a new offer product
// Controllers/offerProduct.js

exports.addOfferProduct = (req, res) => {
    // Extract data from the request body
    const { product_name, product_price, offer_percent } = req.body;
    const product_image = req.body.image_path; // Use the image path from the request body

    // Check for null values
    if (!product_name || !product_price || !offer_percent || !product_image) {
        return res.status(400).send('Missing required fields');
    }

    // Construct the SQL query
    const query = 'INSERT INTO offerproducts (product_name, product_image, product_price, offer_percent) VALUES (?, ?, ?, ?)';
    db.query(query, [product_name, product_image, product_price, offer_percent], (err, result) => {
        if (err) {
            console.error('Error adding offer product:', err);
            res.status(500).send('Error adding offer product');
        } else {
            console.log('Offer product added successfully');
            res.send(result);
        }
    });
};

exports.updateOfferProduct = (req, res) => {
    // Extract data from the request body
    const { product_id, product_name, product_price, offer_percent, product_image } = req.body;

    // Check for null values
    if (!product_id || !product_name || !product_price || !offer_percent || !product_image) {
        return res.status(400).send('Missing required fields');
    }

    // Construct the SQL query
    const query = 'UPDATE offerproducts SET product_name = ?, product_image = ?, product_price = ?, offer_percent = ? WHERE product_id = ?';
    db.query(query, [product_name, product_image, product_price, offer_percent, product_id], (err, result) => {
        if (err) {
            console.error('Error updating offer product:', err);
            res.status(500).send('Error updating offer product');
        } else {
            console.log('Offer product updated successfully');
            res.send(result);
        }
    });
};

// Function to delete an offer product
exports.deleteOfferProduct = (req, res) => {
    // Extract product ID from the request parameters
    const { product_id } = req.params;

    // Check for null values
    if (!product_id) {
        return res.status(400).send('Missing required fields');
    }

    // Construct the SQL query
    const query = 'DELETE FROM offerproducts WHERE product_id = ?';
    db.query(query, [product_id], (err, result) => {
        if (err) {
            console.error('Error deleting offer product:', err);
            res.status(500).send('Error deleting offer product');
        } else {
            console.log('Offer product deleted successfully');
            res.send(result);
        }
    });
};




