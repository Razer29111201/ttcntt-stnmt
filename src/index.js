import * as dotenv from 'dotenv'
dotenv.config()
import bp from 'body-parser'
import express from "express";
import configViewEngine from "./configs/viewEngine.js";
import initWebRouter from "./route/web.js";
var cookieParser = require('cookie-parser')
const app = express()
app.use(cookieParser())
const port = process.env.PORT;
app.use(bp.urlencoded({ extended: true, limit: '50mb' }));
app.use(bp.json({ limit: '50mb' }));


initWebRouter(app)
configViewEngine(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

