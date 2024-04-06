// // Middleware/imageUpload.js

// const multer = require('multer');
// const path = require('path');

// // Configure multer storage
// const storage = multer.diskStorage({
//  destination: (req, file, cb) => {
//     cb(null, 'uploads/images'); // Set the destination folder
//  },
//  filename: (req, file, cb) => {
//     // Generate a unique filename
//     const unique_identifier = Date.now();
//     const file_name = `${unique_identifier}-${file.originalname}`;
//     cb(null, file_name);
//  }
// });

// // Initialize multer with the storage configuration
// const upload = multer({ storage: storage });

// // Define the middleware function
// const imageUploadMiddleware = (req, res, next) => {
//  return new Promise((resolve, reject) => {
//     upload.single('image')(req, res, (err) => {
//       if (err) {
//         if (err.code === 'LIMIT_UNEXPECTED_FILE') {
//           req.body.image_path = '';
//           resolve(next());
//         } else {
//           reject(err);
//         }
//       } else {
//         if (!req.file) {
//           req.body.image_path = '';
//           resolve(next());
//         } else {
//           // Construct the image path
//           const image_path = path.join('uploads/images', req.file.filename);
//           req.body.image_path = image_path;
//           resolve(next());
//         }
//       }
//     });
//  });
// };

// module.exports = imageUploadMiddleware;
