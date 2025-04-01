import express from 'express';
import catRouter from './routes/cat-router.js';
import userRouter from './routes/users-routes.js';

const router = express.Router();

// bind base url for all cat routes to catRouter
router.use('/cats', catRouter);

router.use('/users', userRouter);

export default router;
