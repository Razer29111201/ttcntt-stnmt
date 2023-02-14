import express from 'express';

import { gt } from '../controller/homeController.js'
const router = express.Router();


router.get('/', gt)





module.exports = router