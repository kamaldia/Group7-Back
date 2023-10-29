import multer from 'multer';

// Create a storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './images/'); // Use './images/' to specify the folder where uploaded files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname); // Fix the timestamp generation and filename format
  },
});

// Create an instance of the multer middleware
const upload = multer({ storage });

export default upload;
