import {Router} from 'express';
import {uploadFileMiddleware} from './upload';

const router = Router();

router.post('/upload', async (req, res, next) => {
  try {
    await uploadFileMiddleware(req, res);

    console.log(req.file);
    if (!req.file) {
      return res.send('No file to upload!');
    }

    return res.send(`File "${req.file.originalname}" Uploaded successfully!`)
    res.send(200);
  } catch (e) {
    console.log(e);

    next('500');
  }
});

export default router;
