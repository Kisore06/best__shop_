// controllers/gendersController.js
const db = require('../config/database');

exports.getGenders = (req, res) => {
    console.log('Fetching genders...');
    const query = 'SELECT * FROM genders';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching genders:', err);
            res.status(500).send('Error fetching genders');
        } else {
            console.log('Genders fetched successfully');
            res.send(results);
        }
    });
};

exports.addGender = (req, res) => {
    const { name } = req.body;
    const query = 'INSERT INTO genders (gender) VALUES (?)';
    db.query(query, [name], (err, result) => {
       if (err) throw err;
       res.send(result);
    });
};
