import sharp from 'sharp';

const createThumbnail = async (req, res, next) => {
  if (!req.file) {
    return next('Image not found!');
  }

  let extension = 'jpg';
  if (req.file.mimetype === 'image/png') {
    extension = 'png';
  }

  console.log(req.file);
  const thumbnailPath = `uploads/${req.file.filename}_thumb.${extension}`;

  await sharp(req.file.path)
    .resize(160, 160)
    .toFile(thumbnailPath, (err) => {
      if (err) {
        console.log(err);
      }
    });
  next();
};

export default createThumbnail;
