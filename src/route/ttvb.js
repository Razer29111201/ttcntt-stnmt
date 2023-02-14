import express from 'express';

import { getttvb, getttvb1, getttvbaj } from '../controller/homeController.js'
const router = express.Router();
const multer = require('multer')






router.get('/', getttvb)
router.get('/value', getttvbaj)
router.get('/a', getttvb1)





module.exports = router