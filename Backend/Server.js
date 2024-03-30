const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const multer = require('multer');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads/images', express.static('uploads/images'));


// MySQL connection
const db = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password: '',
 database: 'best_shop_'
});

db.connect((err) => {
 if (err) throw err;
 console.log('Connected to MySQL');
});

// Configure Multer to use the 'uploads' directory and handle multiple files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/images');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Use the original file name
    }
});

const upload = multer({ storage: storage }).fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 }
]);

// Middleware to check if the user is an admin
const isAdmin = (req, res, next) => {
    // Assuming the user's role is sent in the request body
    const userRole = req.body.role;
    if (!userRole) return res.status(403).send({ message: "No role provided!" });

    // Check if the user is an admin
    if (userRole !== 'admin') {
        return res.status(403).send({ message: "Access denied. You are not an admin." });
    }

    // If everything is good, proceed to the next middleware or route handler
    next();
};


// Login route
app.post('/users', (req, res) => {
    const { username, password } = req.body;
    console.log("ula....")
    const query = 'SELECT * FROM users WHERE username = ?';
    db.query(query, [username], (err, results) => {
        if (err) {
            console.error('Error logging in:', err);
            res.status(500).send('Error logging in');
        } else if (results.length === 0) {
            res.status(401).send('Invalid username or password');
        } else {
            const user = results[0];
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                    // Directly send the user's role in the response
                    res.status(200).send({ auth: true, role: user.role });
                } else {
                    res.status(401).send('Invalid username or password');
                }
            });
        }
    });
});

app.get('/users', (req, res) => {
    console.log('Fetching users...');
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            res.status(500).send('Error fetching users');
        } else {
            console.log('fetched users');
            res.send(results);
        }
    });
});

// Example of a protected route
app.get('/admin-only-route', isAdmin, (req, res) => {
    res.send('Welcome to the admin-only route!');
});


//category
app.get('/categories', (req, res) => {
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
});

app.post('/categories', (req, res) => {
    const { name } = req.body;
    const query = 'INSERT INTO categories (category) VALUES (?)';
    db.query(query, [name], (err, result) => {
       if (err) throw err;
       res.send(result);
    });
});

// Edit category
app.put('/categories/:id', (req, res) => {
    const { id } = req.params;
    const { category } = req.body;
    const query = 'UPDATE categories SET category = ? WHERE id = ?';
    db.query(query, [category, id], (err, result) => {
       if (err) {
         console.error('Error updating category:', err);
         res.status(500).send('Error updating category');
       } else {
         res.send(result);
       }
    });
   });
  
// Delete category
app.delete('/categories/:id', (req, res) => {
const { id } = req.params;
const query = 'DELETE FROM categories WHERE id = ?';
db.query(query, [id], (err, result) => {
    if (err) {
        console.error('Error deleting category:', err);
        res.status(500).send('Error deleting category');
    } else {
        res.send(result);
    }
});
});

//Brands
app.get('/brands', (req, res) => {
    console.log('Fetching brands...');
    const query = 'SELECT * FROM brands';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching brands:', err);
            res.status(500).send('Error fetching brands');
        } else {
            console.log('brands fetched successfully');
            res.send(results);
        }
    });
});

app.post('/brands', (req, res) => {
    const { name } = req.body;
    const query = 'INSERT INTO brands (brand_name) VALUES (?)';
    db.query(query, [name], (err, result) => {
       if (err) throw err;
       res.send(result);
    });
});

// Edit brands
app.put('/brands/:brand_id', (req, res) => {
const { brand_id } = req.params;
const { brand_name } = req.body;
const query = 'UPDATE brands SET brand_name = ? WHERE brand_id = ?';
db.query(query, [brand_name, brand_id], (err, result) => {
    if (err) {
        console.error('Error updating brands:', err);
        res.status(500).send('Error updating brands');
    } else {
        res.send(result);
    }
});
});

// Delete brands
app.delete('/brands/:brand_id', (req, res) => {
const { brand_id } = req.params;
const query = 'DELETE FROM brands WHERE brand_id = ?';
db.query(query, [brand_id], (err, result) => {
    if (err) {
        console.error('Error deleting brands:', err);
        res.status(500).send('Error deleting brands');
    } else {
        res.send(result);
    }
});
});


//gender
app.get('/genders', (req, res) => {
    console.log('Fetching genders...');
    const query = 'SELECT * FROM genders';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching genders:', err);
            res.status(500).send('Error fetching genders');
        } else {
            console.log('genders fetched successfully');
            res.send(results);
        }
    });
});

app.post('/genders', (req, res) => {
    const { name } = req.body;
    const query = 'INSERT INTO genders (gender) VALUES (?)';
    db.query(query, [name], (err, result) => {
       if (err) throw err;
       res.send(result);
    });
});

// Edit gender
app.put('/genders/:g_id', (req, res) => {
const { g_id } = req.params;
const { gender } = req.body;
const query = 'UPDATE genders SET gender = ? WHERE g_id = ?';
db.query(query, [gender, g_id], (err, result) => {
    if (err) {
        console.error('Error updating genders:', err);
        res.status(500).send('Error updating genders');
    } else {
        res.send(result);
    }
});
});

// Delete gender
app.delete('/genders/:g_id', (req, res) => {
const { g_id } = req.params;
const query = 'DELETE FROM genders WHERE g_id = ?';
db.query(query, [g_id], (err, result) => {
    if (err) {
        console.error('Error deleting genders:', err);
        res.status(500).send('Error deleting genders');
    } else {
        res.send(result);
    }
});
});
   

//Sub Categories
app.get('/subcategories', (req, res) => {
    console.log('Fetching subcategories...');
    const query = `SELECT * FROM subcategories `;
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching subcategories:', err);
            res.status(500).send('Error fetching subcategories');
        } else {
            console.log('Subcategories fetched successfully');
            res.send(results);
        }
    });
});



app.post('/subcategories', (req, res) => {
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
});

// Edit subCategory
app.put('/subcategories/:id', (req, res) => {
const { id } = req.params;
const { name, categoryId, genderId } = req.body;
const query = 'UPDATE subcategories SET name = ?, categoryId = ?, genderId = ? WHERE id = ?';
db.query(query, [name, categoryId, genderId, id], (err, result) => {
    if (err) {
        console.error('Error updating SubCategory:', err);
        res.status(500).send('Error updating SubCategory');
    } else {
        res.send(result);
    }
});
});
    

// Delete subCategory
app.delete('/subcategories/:id', (req, res) => {
const { id } = req.params;
const query = 'DELETE FROM subcategories WHERE id = ?';
db.query(query, [id], (err, result) => {
    if (err) {
        console.error('Error deleting SubCategory:', err);
        res.status(500).send('Error deleting SubCategory');
    } else {
        res.send(result);
    }
});
});

// Fetch brands by subcategory (used in filter)
app.get('/brands/:subCategoryName', (req, res) => {
    const { subCategoryName } = req.params;
    const query = `
        SELECT DISTINCT brands.brand_name
        FROM brands
        JOIN product ON brands.brand_name = product.brandName
        WHERE product.subCategoryName = ?
    `;
    db.query(query, [subCategoryName], (err, results) => {
        if (err) {
            console.error('Error fetching brands by subcategory:', err);
            res.status(500).send('Error fetching brands by subcategory');
        } else {
            res.send(results);
        }
    });
});


//product
app.get('/product', (req, res) => {
console.log('Fetching products...');
const { subCategoryName } = req.query; 
const { brandName } = req.query;
let params = [];

let query = 'SELECT * FROM product';
if (subCategoryName) {
    query += ' WHERE subCategoryName = ?';
    console.log(req.query);
    console.log('Subcategory Fetched...');
    params = [subCategoryName];
} 
if(brandName){
    query += ' WHERE brandName = ?';
    console.log(req.query);
    console.log('Brandname Fetched...');
    params = [brandName];
    
}

db.query(query, params, (err, results) => {
    if (err) {
        console.error('Error fetching products:', err);
        res.status(500).send('Error fetching products');
    } else {
        console.log('Products fetched successfully');
        console.log(results);
        res.send(results); 
    }
});
});

app.get('/product/:id', (req, res) => {
const { id } = req.params;

const query = 'SELECT * FROM product WHERE product_id = ?';
const params = [id]; 

db.query(query, params, (err, results) => {
    if (err) {
        console.error('Error fetching product:', err);
        res.status(500).send('Error fetching product');
    } else {
        console.log('Product fetched successfully');
        console.log(results);
        res.send(results[0]);
    }
});
});

// Route for uploading images product
app.post('/upload', upload, (req, res) => {
console.log(req.body);
console.log(req.files);
try {
    // Extract image paths
    const imagePaths = {
        image1: req.files.image1 ? req.files.image1[0].path : null,
        image2: req.files.image2 ? req.files.image2[0].path : null,
        image3: req.files.image3 ? req.files.image3[0].path : null,
        image4: req.files.image4 ? req.files.image4[0].path : null,
    };

    const productName = req.body.productName;
    const price = req.body.price;
    const description = req.body.description;
    const categoryName = req.body.categoryName;
    const subCategoryName = req.body.subCategoryName;
    const genderName = req.body.genderName;
    const brandName = req.body.brandName;

    const query = `
        INSERT INTO product (productName, price, description, categoryName, subCategoryName, genderName, brandName, image1, image2, image3, image4)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [productName, price, description, categoryName, subCategoryName, genderName, brandName, imagePaths.image1, imagePaths.image2, imagePaths.image3, imagePaths.image4];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error('Error uploading product:', err);
            res.status(500).send({ message: 'Error uploading product', error: err.message });
        } else {
            res.status(200).send({ message: 'Product uploaded successfully', imagePaths });
        }
    });
} catch (error) {
    console.error('Error uploading product:', error);
    res.status(500).send({ message: 'Error uploading product', error: error.message });
}
});



//get product with images product
app.get('/upload', (req, res) => {
    console.log('Fetching product details...');
    const query = `SELECT * FROM product `;
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching product details:', err);
            res.status(500).send('Error fetching product details');
        } else {
            console.log('Product details fetched successfully');
            res.send(results);
        }
    });
});

// Edit product
app.put('/product/:product_id', (req, res) => {
const { product_id } = req.params;
const { productName, price, description, categoryName, subCategoryName, genderName, brandName } = req.body;
const query = 'UPDATE product SET productName = ?, price = ?, description = ?, categoryName = ?, subCategoryName = ?, genderName = ?, brandName = ? WHERE product_id = ?';
db.query(query, [productName, price, description, categoryName, subCategoryName, genderName, brandName, product_id], (err, result) => {
    if (err) {
        console.error('Error updating product:', err);
        res.status(500).send('Error updating product');
    } else {
        res.send(result);
    }
});
});
   

// Delete product
app.delete('/product/:product_id', (req, res) => {
const { product_id } = req.params;
const query = 'DELETE FROM product WHERE product_id = ?';
db.query(query, [product_id], (err, result) => {
    if (err) {
        console.error('Error deleting products:', err);
        res.status(500).send('Error deleting products');
    } else {
        res.send(result);
    }
});
});

// get offer products
app.get('/offerproducts', (req, res) => {
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
});

app.get('/offerproducts/:ofp_id', (req, res) => {
    const { ofp_id } = req.params;
    
    const query = 'SELECT * FROM offerproducts WHERE ofp_id = ?';
    const params = [ofp_id]; 
    
    db.query(query, params, (err, results) => {
        if (err) {
            console.error('Error fetching product:', err);
            res.status(500).send('Error fetching product');
        } else {
            console.log('Product fetched successfully');
            console.log(results);
            res.send(results[0]);
        }
    });
    });

// Route for uploading images offer product
app.post('/uploadofp', upload, (req, res) => {
    console.log(req.body);
    console.log(req.files);
    try {
        // Extract image paths
        const imagePaths = {
            image1: req.files.image1 ? req.files.image1[0].path : null,
            image2: req.files.image2 ? req.files.image2[0].path : null,
            image3: req.files.image3 ? req.files.image3[0].path : null,
            image4: req.files.image4 ? req.files.image4[0].path : null,
        };
    
        const product_name = req.body.product_name;
        const product_price = req.body.product_price;
        const offer = req.body.offer;
        const description = req.body.description;
        const brand_name = req.body.brand_name;
        const category = req.body.category;
        const sub_category = req.body.sub_category;
        const gender = req.body.gender;
    
        const query = `
            INSERT INTO offerproducts (product_name, product_price, offer, description, brand_name, category, sub_category, gender, image1, image2, image3, image4)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [product_name, product_price, offer, description, brand_name, category, sub_category, gender, imagePaths.image1, imagePaths.image2, imagePaths.image3, imagePaths.image4];
    
        db.query(query, values, (err, result) => {
            if (err) {
                console.error('Error uploading product:', err);
                res.status(500).send({ message: 'Error uploading offer product', error: err.message });
            } else {
                res.status(200).send({ message: 'Offer Product uploaded successfully', imagePaths });
            }
        });
    } catch (error) {
        console.error('Error uploading offer product:', error);
        res.status(500).send({ message: 'Error uploading offer product', error: error.message });
    }
    });   
    
//get product with images offer poroduct
app.get('/uploadofp', (req, res) => {
    console.log('Fetching product details...');
    const query = `SELECT * FROM offerproducts `;
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching offer product details:', err);
            res.status(500).send('Error fetching offer product details');
        } else {
            console.log('Offer Product details fetched successfully');
            res.send(results);
        }
    });
});

// Edit offer product
app.put('/offerproducts/:ofp_id', (req, res) => {
    const { ofp_id } = req.params;
    const { product_name, product_price, offer, description, brand_name, category, sub_category, gender } = req.body;
    const query = 'UPDATE offerproducts SET product_name = ?, product_price = ?, offer = ?, description = ?, brand_name = ?, category = ?, sub_category = ?, gender = ? WHERE ofp_id = ?';
    db.query(query, [product_name, product_price, offer, description, brand_name, category, sub_category, gender, ofp_id], (err, result) => {
        if (err) {
            console.error('Error updating offer product:', err);
            res.status(500).send('Error updating offer product');
        } else {
            res.send(result);
        }
    });
    });
           
// Delete offer product
app.delete('/offerproducts/:ofp_id', (req, res) => {
const {ofp_id } = req.params;
const query = 'DELETE FROM offerproducts WHERE ofp_id = ?';
db.query(query, [ofp_id], (err, result) => {
    if (err) {
        console.error('Error deleting offer products:', err);
        res.status(500).send('Error deleting offer products');
    } else {
        res.send(result);
    }
});
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
