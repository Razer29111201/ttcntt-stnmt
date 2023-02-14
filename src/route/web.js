import express from 'express';
import admin from './admin'
import news from './news'
import login from './login'
import register from './register'
import ttvb from './ttvb'
import gt from './gt'
import { ckecklogin, checkadmin, getHomePage } from '../controller/homeController.js'
const router = express.Router();



const initWebRouter = (app) => {
    router.get('/', getHomePage)
    app.use('/gt', gt)
    app.use('/ttvb', ttvb)
    app.use('/register', register)
    app.use('/login', login)
    app.use('/news', news)
    app.use('/admin', ckecklogin, checkadmin, admin)
    return app.use('/', router)

}


export default initWebRouter;