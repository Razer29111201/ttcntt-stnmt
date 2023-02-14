import express from 'express';

import { register, registerpost } from '../controller/homeController.js'
const router = express.Router();


router.get('/', register)
router.post('/post', registerpost)




module.exports = router