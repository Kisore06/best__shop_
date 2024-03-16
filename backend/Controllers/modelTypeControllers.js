// const db = require('../config/database');

// exports.showForm = (req, res) => {
//  res.send(`
//     <form action="/add-model-type" method="post">
//       <label for="category_name">Category Name:</label><br>
//       <input type="text" id="category_name" name="category_name"><br>
//       <label for="type_name">Type Name:</label><br>
//       <input type="text" id="type_name" name="type_name"><br>
//       <label for="image_path">Image Path:</label><br>
//       <input type="text" id="image_path" name="image_path"><br>
//       <input type="submit" value="Submit">
//     </form>
//  `);
// };

// exports.addModelType = (req, res) => {
//  const { category_name, type_name, image_path } = req.body;
//  const sql = 'INSERT INTO model_type (category_name, type_name, image_path) VALUES (?, ?, ?)';
//  db.query(sql, [category_name, type_name, image_path], (err, result) => {
//     if (err) throw err;
//     res.send('Model type added successfully!');
//  });
// };
