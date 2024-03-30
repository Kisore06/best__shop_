// controllers/brandsController.js
const db = require('../config/database');

exports.getBrands = (req, res) => {
    console.log('Fetching brands...');
    const query = 'SELECT * FROM brands';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching brands:', err);
            res.status(500).send('Error fetching brands');
        } else {
            console.log('Brands fetched successfully');
            res.send(results);
        }
    });
};

exports.addBrand = (req, res) => {
    const { name } = req.body;
    const query = 'INSERT INTO brands (brand_name) VALUES (?)';
    db.query(query, [name], (err, result) => {
       if (err) throw err;
       res.send(result);
    });
};

// function to fetch brands by subcategory
// exports.getBrandsBySubCategory = (req, res) => {
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
// };