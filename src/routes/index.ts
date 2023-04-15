import HomeController from '../controllers/HomeController';
import { Router } from 'express';

const router = Router();

/* GET home page. */
router.get('/', HomeController.index);

export default router;
