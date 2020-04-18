import util from 'util';
import multer from 'multer';
import GridFsStorage from 'multer-gridfs-storage';

const storage = new GridFsStorage({
  url: 'mongodb://localhost:27017/file_db',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  file: (req, file) => {
    return {
      bucket: 'photos',
      filename: file.originalname
    };
  }
});

const uploadFile = multer({storage}).single('uploadfile');

export const uploadFileMiddleware = util.promisify(uploadFile);
