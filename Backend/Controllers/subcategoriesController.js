// controllers/subcategoriesController.js
const db = require('../config/database');

exports.getSubcategories = (req, res) => {
    console.log('Fetching subcategories...');
    const query = 'SELECT * FROM subcategories';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching subcategories:', err);
            res.status(500).send('Error fetching subcategories');
        } else {
            console.log('Subcategories fetched successfully');
            res.send(results);
        }
    });
};

exports.addSubcategory = (req, res) => {
    const { name, categoryId, genderId } = req.body;
    const query = 'INSERT INTO subcategories (name, categoryId, genderId) VALUES (?, ?, ?)';
    db.query(query, [name, categoryId, genderId], (err, result) => {
        if (err) {
            console.error('Error adding subcategory:', err);
            res.status(500).send('Error adding subcategory');
        } else {
            console.log('Subcategory added successfully');
            res.send(result);
        }
    });
};
