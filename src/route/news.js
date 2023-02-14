import express from 'express';

import {
    getnews, getaj, getdetailnews, getnewsnctt,
    getnewsnctt1,
    getnewshtpt,
    getnewstnmt,
    getnewshdnb,
    getnewshtpt1,
    getnewstnmt1,
    getnewshdnb1
} from '../controller/homeController.js'
const router = express.Router();



router.get('/', getnews,)
router.get('/ajj', getaj)
router.get('/cntt', getnewsnctt)
router.get('/htpt', getnewshtpt)
router.get('/tnmt', getnewstnmt)
router.get('/hdnb', getnewshdnb)
router.get('/cntt1', getnewsnctt1)
router.get('/htpt2', getnewshtpt1)
router.get('/tnmt3', getnewstnmt1)
router.get('/hdnb4', getnewshdnb1)
router.get('/:newsid', getdetailnews)



module.exports = router