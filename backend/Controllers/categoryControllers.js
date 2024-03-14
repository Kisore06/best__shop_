const multer = require('multer');
const upload = multer({ dest: 'components/uploads/' }); // Adjust the destination as needed

exports.addCategory = (req, res) => {
 upload.single('image_path')(req, res, async (err) => {
    if (err) {
      return res.status(500).send(err);
    }

    const { category_name } = req.body;
    const imagePath = req.file.path; // This is the path to the uploaded file

    const sql = 'INSERT INTO category (category_name, image_path) VALUES (?, ?)';
    db.query(sql, [category_name, imagePath], (err, result) => {
      if (err) throw err;
      res.send('Category added successfully!');
    });
 });
};
