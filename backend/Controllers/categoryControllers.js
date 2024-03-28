// controllers/categoriesController.js
const db = require('../config/database');

exports.getCategories = (req, res) => {
    console.log('Fetching categories...');
    const query = 'SELECT * FROM categories';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching categories:', err);
            res.status(500).send('Error fetching categories');
        } else {
            console.log('Categories fetched successfully');
            res.send(results);
        }
    });
};

exports.addCategory = (req, res) => {
    const { name } = req.body;
    const query = 'INSERT INTO categories (category) VALUES (?)';
    db.query(query, [name], (err, result) => {
       if (err) throw err;
       res.send(result);
    });
};
