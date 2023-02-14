import express from 'express';

import { checkUser, ckecklogin1, getlogin, submitlogin, ckecklogin } from '../controller/homeController.js'
const router = express.Router();


router.get('/', getlogin)
router.post('/vl', submitlogin)
router.get('/logindi', ckecklogin)
router.get('/logindia', ckecklogin1)


module.exports = router